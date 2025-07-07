import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Layout() {
  const { user, token, setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    const res = await fetch("/api/logout", {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  }
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>

          {user ? (
            <div className="flex">
              <p className="nav-link">Welcom back {user.name}</p>
              <form onSubmit={handleLogout}>
                <button className="nav-link">Logout</button>
              </form>
            </div>
          ) : (
            <div>
              <Link to="/register" className="nav-link">
                Register
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

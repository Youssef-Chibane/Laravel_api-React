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
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-700"
          >
            BlogApp
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-600">
                Welcome back, <span className="font-medium">{user.name}</span>
              </p>
              <Link
                to="/create"
                className="text-sm px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                + New Post
              </Link>
              <form onSubmit={handleLogout}>
                <button
                  type="submit"
                  className="text-sm px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/register"
                className="text-sm px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-sm px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition"
              >
                Login
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

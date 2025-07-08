import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [errors, setErorrs] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.errors) {
      setErorrs(data.errors);
    } else {
      navigate("/");
    }
  }
  return (
    <>
      <h1 className="title">Create new post</h1>

      <form onSubmit={handleSubmit} className="w-1/2 mx-auto space-y-6">
        <div>
          <input
            type="text"
            placeholder="Post Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          {errors.title && <p className="error">{errors.title[0]}</p>}
        </div>

        <div>
          <textarea
            rows={6}
            placeholder="Post Content"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
          {errors.body && <p className="error">{errors.body[0]}</p>}
        </div>

        <button className="primary-btn">Create</button>
      </form>
    </>
  );
}

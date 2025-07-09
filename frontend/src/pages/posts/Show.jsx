import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export default function Show() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, token } = useContext(AppContext);

  const [post, setPost] = useState(null);

  async function getPost() {
    const res = await fetch(`/api/posts/${id}`);
    const data = await res.json();

    if (res.ok) {
      setPost(data.post);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();

    if (user && user.id === post.user.id) {
      const res = await fetch(`/api/posts/${id}`, {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        navigate("/");
      }
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {post ? (
        <div
          key={post.id}
          className="p-8 bg-white rounded-2xl shadow-md border border-slate-200 transition"
        >
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
            <p className="text-sm text-slate-500 mt-2">
              Created by{" "}
              <span className="font-medium text-slate-700">
                {post.user.name}
              </span>{" "}
              on{" "}
              {new Date(post.created_at).toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>
          <div className="text-slate-800 leading-relaxed text-lg whitespace-pre-line">
            {post.body}

            {user && user.id === post.user_id && (
              <div className="flex items-center justify-end gap-4">
                <Link
                  to={`/posts/update/${id}`}
                  className="bg-green-500 text-white text-sm rounded-lg px-3 py-1"
                >
                  Update
                </Link>

                <form onSubmit={handleDelete}>
                  <button className="bg-red-500 text-white text-sm rounded-lg px-3 py-1">
                    Delete
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-slate-600 text-lg mt-16">
          Post Not Found!
        </p>
      )}
    </div>
  );
}

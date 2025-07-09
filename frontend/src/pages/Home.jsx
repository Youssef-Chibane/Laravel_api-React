import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const res = await fetch("/api/posts");
    const data = await res.json();

    if (res.ok) {
      setPosts(data);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-slate-800">
        📝 Latest Posts
      </h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="mb-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Created by{" "}
                  <span className="font-medium">{post.user.name}</span> on{" "}
                  {new Date(post.created_at).toLocaleTimeString()}
                </p>
              </div>
              <Link
                to={`/posts/${post.id}`}
                className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Read more
              </Link>
            </div>
            <p className="text-slate-700 leading-relaxed">{post.body}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-slate-600 text-lg mt-8">
          There are no posts.
        </p>
      )}
    </div>
  );
}

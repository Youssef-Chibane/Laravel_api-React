export default function Create() {
  return (
    <>
      <h1 className="title">Create new post</h1>

      <form className="w-1/2 mx-auto space-y-6">
        <div>
          <input type="text" placeholder="Post Title" />
        </div>

        <div>
          <textarea rows={6} placeholder="Post Content"></textarea>
        </div>

        <button className="primary-btn">Create</button>
      </form>
    </>
  );
}

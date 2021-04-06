export const PostForm = (addPost, setTitle, setContent, title, content) => (
  <form onSubmit={addPost}>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <textarea
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
    <button type="submit">Add post</button>
  </form>
);

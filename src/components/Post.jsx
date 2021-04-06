export const Post = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <b>{post.createdAt}</b>
  </div>
);

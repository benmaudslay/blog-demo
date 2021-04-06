export const Posts = (user, posts) => {
  return (
    <div>
      {user && (
        <>
          <h1>
            {user.name} | {user.email}
          </h1>

          {console.log(posts)}
          {posts.map((item, index) => {
            return (
              <div key={index}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

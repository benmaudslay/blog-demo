import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { fetchUsers } from "./utils";
import { UserForm } from "./components/UserForm.jsx";
import { PostForm } from "./components/PostForm.jsx";
import { Posts } from "./components/Posts.jsx";
import { Post } from "./components/Post.jsx";
// React app to render posts
// add a new post for user

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  const getUsersPosts = async (index) => {
    const response = await fetch(
      `http://localhost:5000/posts/${users[index]._id}`
    );
    const data = await response.json();
    console.log(data);
    setPosts(data);
    setUser(users[index]);
  };

  const addPost = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/posts/${user._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });

    const data = await response.json();

    let tempArr = [...posts];
    tempArr.push(data);
    setPosts(tempArr);
    setTitle("");
    setContent("");
  };

  return (
    <div className="App">
      <h1>Scooby Doo Blog Machine</h1>
      <UserForm getUsersPosts={getUsersPosts} users={users} />
      <PostContainer primary>
        {/* <Posts user={user} posts={posts} /> */}
        <div>
          {user && posts.map((item, index) => <Post key={index} post={item} />)}
        </div>
        <div className="postFormWrapper">
          <PostForm
            addPost={addPost}
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
          />
        </div>
      </PostContainer>
    </div>
  );
};

const PostContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 200px;

  .postFormWrapper {
    background-color: ${(props) => (props.primary ? "lightblue" : "pink")};
    width: 100%;
    height: 100%;
  }
`;

export default App;

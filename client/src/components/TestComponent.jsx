import React, { useState, useEffect } from "react";
const URL = "https://jsonplaceholder.typicode.com/posts";

export default function TestComponent() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      <ul>
        {posts.map((post, index) => {
          // {
          //   console.log(post.title);
          // }
          return <li key={index}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

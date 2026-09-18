import React from 'react';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostPage = async () => {
  const posts = await getData();
  return (
    <div>
      <h2>Hello Posts: {posts.length}</h2>
    </div>
  );
};

export default PostPage;

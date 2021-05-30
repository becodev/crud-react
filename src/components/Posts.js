import React from "react";
import List from "./List";

const Posts = ({ posts, removePost }) => {
  return (
    <div className="col-12 col-md-8">
      <List posts={posts} removePost={removePost} />
    </div>
  );
};

export default Posts;

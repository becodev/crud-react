import React from "react";
import Post from "./Post";

const List = ({ posts, removePost }) => {
  const showPosts = () => {
    if (posts.length === 0) return null;

    return (
      <>
        {Object.keys(posts).map((post) => (
          <Post key={post} info={posts[post]} removePost={removePost} />
        ))}
      </>
    );
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> ID </th>
            <th scope="col"> Title </th>
            <th scope="col"> Actions </th>
          </tr>
        </thead>

        <tbody>{showPosts()}</tbody>
      </table>
    </div>
  );
};

export default List;

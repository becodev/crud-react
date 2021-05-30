import React from "react";

const SinglePost = ({ post }) => {
  const mostrarPost = (post) => {
    if (!post) return null;
    const { title, body, userId } = post;

    return (
      <>
        <h1> {title} </h1>
        <p>Author: {userId} </p>
        <p> {body} </p>
      </>
    );
  };

  return <div className="col-12 col-md-8">{mostrarPost(post)}</div>;
};

export default SinglePost;

import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./../index.css";

const Post = ({ removePost, info }) => {
  const confirmDelete = (id) => {
    removePost(id);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Deleted!",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const { id, title } = info;

  return (
    <tr>
      <td> {id} </td>
      <td> {title} </td>
      <td>
        <Link to={`/post/${id}`} className="btn btn-primary ver">
          Show
        </Link>
        <Link to={`/edit/${id}`} className="btn btn-warning ver">
          Edit
        </Link>
        <button
          onClick={() => confirmDelete(id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Post;

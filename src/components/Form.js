import React, { useRef } from "react";
import Swal from "sweetalert2";

const Form = (props) => {
  const titleRef = useRef(null);
  const entryRef = useRef(null);

  const createPost = async (e) => {
    e.preventDefault();
    //create refs
    const post = {
      title: titleRef.current.value,
      body: entryRef.current.value,
      userId: 1,
    };
    // form validation
    if (!titleRef.current.value || !entryRef.current.value) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Form is empty!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      props.createPost(post);
    }
  };

  return (
    <form onSubmit={createPost} className="col-8">
      <legend className="text-center">Create a new post</legend>
      <div className="form-group">
        <label>Title</label>
        <input ref={titleRef} type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea
          ref={entryRef}
          type="text"
          className="form-control"
        ></textarea>
        <button type="submit" className="btn btn-primary mt-2">
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;

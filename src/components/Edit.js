import React, { useRef } from "react";

const Edit = (props) => {
  const tituloRef = useRef(null);
  const entradaRef = useRef(null);

  const editarPost = (e) => {
    e.preventDefault();
    //crear refs
    const post = {
      title: tituloRef.current.value,
      body: entradaRef.current.value,
      userId: 1,
      id: props.post.id,
    };
    // enviar por props
    props.editPost(post);
  };

  const cargarFormulario = (params) => {
    if (!props.post) return null;

    const { title, body } = props.post;
    return (
      <form onSubmit={editarPost} className="col-8">
        <legend className="text-center">Edit post</legend>
        <div className="form-group">
          <label>Title</label>
          <input
            ref={tituloRef}
            type="text"
            className="form-control"
            defaultValue={title}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            ref={entradaRef}
            type="text"
            className="form-control"
            defaultValue={body}
          />
          <button type="submit" className="btn btn-primary mt-2">
            Save changes
          </button>
        </div>
      </form>
    );
  };

  return <>{cargarFormulario()}</>;
};

export default Edit;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Navigation from "./Navigation";
import Posts from "./Posts";
import SinglePost from "./SinglePost";
import Form from "./Form";
import Swal from "sweetalert2";
import Edit from "./Edit";

const Router = (props) => {
  const [posts, setPosts] = useState({ posts: [] });

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  };

  const removePost = (id) => {
    try {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          if (res.status === 200) {
            const estado = [...posts];

            let resultado = estado.filter((value) => value.id !== id);
            setPosts(resultado);
          }
        });
    } catch (error) {
      throw new Error("Error");
    }
  };

  const createPost = (post) => {
    try {
      axios
        .post(`https://jsonplaceholder.typicode.com/posts`, { post })
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Post created!",
              showConfirmButton: false,
              timer: 1500,
            });

            let postId = { id: res.data.id };
            const nuevoPost = Object.assign({}, res.data.post, postId);

            setPosts([...posts, nuevoPost]);
          }
        });
    } catch (error) {
      throw new Error("Error en API");
    }
  };

  const editPost = (postUpdated) => {
    const { id } = postUpdated;

    try {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          postUpdated,
        })
        .then((res) => {
          if (res.status === 200) {
            let postId = res.data.id;

            const postEdit = posts.findIndex((post) => postId === post.id);

            posts[postEdit] = postUpdated;

            setPosts(posts);

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Post updated!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } catch (error) {
      throw new Error("Error en api");
    }
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <div className="row justify-content-center">
          <Header />
          <Navigation />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Posts posts={posts} removePost={removePost} />}
            />

            <Route
              exact
              path="/post/:postId"
              render={(props) => {
                let idPost = props.location.pathname.replace("/post/", "");

                let filtro = posts.filter((post) => post.id === Number(idPost));

                return <SinglePost post={filtro[0]} />;
              }}
            />

            <Route
              exact
              path="/crear"
              render={() => <Form createPost={createPost} />}
            />

            <Route
              exact
              path="/edit/:postId"
              render={(props) => {
                let idPost = props.location.pathname.replace("/edit/", "");

                let filter = posts.filter((post) => post.id === Number(idPost));

                return <Edit post={filter[0]} editPost={editPost} />;
              }}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';

class Router extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    };

    componentDidMount() {
        this.obtenerPosts();
    }

    obtenerPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data
            })
        });
    };

    borrarPost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if(res.status === 200) {
                    const estado = [...this.state.posts];

                    let resultado = estado.filter( value => (
                        value.id != id
                    ))
                    this.setState( {
                        posts: resultado
                    })
                };
            }); 
    };
    
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header></Header>
                        <Navegacion></Navegacion>
                        <Switch>
                            <Route exact path="/" render={
                                () => (
                                    <Posts 
                                        posts={this.state.posts} 
                                        borrarPost={this.borrarPost}
                                        />
                                )
                            } ></Route>

                            <Route exact path="/post/:postId" render= {
                                (props) => {
                                    let idPost = props.location.pathname.replace('/post/','');
                                    const posts = this.state.posts;                            
                                 
                                    let filtro = posts.filter(post => (
                                        post.id === Number(idPost)
                                        
                                    ));
                                    
                                    return(
                                        <SinglePost
                                            post={filtro[0]}
                                        />
                                    )
                                }
                            }></Route>
                        </Switch>
                    </div>
                </div>
            
            </BrowserRouter>
        )
    }
};

export default Router;

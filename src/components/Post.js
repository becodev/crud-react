import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './../index.css';

class Post extends Component {
    confirmarEliminacion = (id) => {
        this.props.borrarPost(id) 

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Deleted!',
            showConfirmButton: false,
            timer: 1500
          })
    }
    

    render() { 
        const {id,title} = this.props.info;
        return ( 
            <tr>
                <td> {id} </td>
                <td> {title} </td>
                <td>
                    <Link to={ `/post/${id}` } className="btn btn-primary ver">Ver</Link>
                    <Link to={ `/editar/${id}` } className="btn btn-warning ver">Editar</Link>
                    <button onClick={ this.confirmarEliminacion } type="button" className="btn btn-danger">Borrar</button>
                </td>
            </tr>
        );
    }
};
 
export default Post;

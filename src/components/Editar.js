import React, { Component } from 'react'

class Editar extends Component {

    tituloRef = React.createRef();
    entradaRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();
        //crear refs
        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1,
            id: this.props.post.id
        }
        // enviar por props
        this.props.editarPost(post);
    }

    cargarFormulario = (params) => {

        if(!this.props.post) return null;

        const { title,body } = this.props.post;
        return(
            <form onSubmit={this.editarPost} className="col-8">
                <legend className="text-center">Editar post</legend>
                <div className="form-group">
                    <label>Titulo del post</label>
                    <input ref={this.tituloRef} type="text" className="form-control" defaultValue={title} />
                </div>
                <div className="form-group">
                    <label>Contenido</label>
                    <textarea ref={this.entradaRef} type="text" className="form-control" defaultValue={body} ></textarea>
                    <button type="submit" className="btn btn-primary mt-2">Guardar cambios</button>
                </div>
            </form>
        )
    };  

    render() {
        return (
            <React.Fragment>
                { this.cargarFormulario() }
            </React.Fragment>
        )
    }
}

export default Editar;

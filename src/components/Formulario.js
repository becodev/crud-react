import React, { Component } from 'react'

class Formulario extends Component {

    tituloRef = React.createRef();
    entradaRef = React.createRef();

    crearPost = (e) => {
        e.preventDefault();
        //crear refs
        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1
        }
        // enviar por props
        this.props.crearPost(post);
    }
    

    render() {
        return (
            <form onSubmit={this.crearPost} className="col-8">
                <legend className="text-center">Crear nuevo post</legend>
                <div className="form-group">
                    <label>Titulo del post</label>
                    <input ref={this.tituloRef} type="text" className="form-control" placeholder="Titulo del post"/>
                </div>
                <div className="form-group">
                    <label>Contenido</label>
                    <textarea ref={this.entradaRef} type="text" className="form-control" placeholder="Contenido"></textarea>
                    <button type="submit" className="btn btn-primary mt-2">Crear</button>
                </div>
            </form>
        )
    }
}

export default Formulario

import React, { Component } from 'react'
import {connect} from 'react-redux';
import {agregarProducto} from '../actions/agregarProducto';
import {Link} from 'react-router-dom'
class CrearProducto extends Component {
    render() {
        let nombre = React.createRef();
        let precio = React.createRef();
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-6 offset-3 card card-shadow" style={{'height':'18rem','marginTop':'3rem','padding':'1rem'}}>
                    <h2>Nuevo producto</h2>
                    <form >
                        <div className="form-group">
                            <label >Nombre</label>
                            <input ref={nombre} type="text" className="form-control"   placeholder="Ej: Cafe, Arroz" />
                        </div>
                        <div className="form-group">
                            <label >Precio</label>
                            <input ref={precio} type="number" className="form-control" placeholder="$." />
                        </div>
       
                        <Link to="/productos"><button type="button" className="btn btn-primary" onClick={
                            ()=>{
                                
                                const producto = {
                                    id: Date.now(),
                                    nombre : nombre.current.value,
                                    precio : precio.current.value
                                }
                                this.props.agregarProducto(producto)
                                
                            }
                        }>Crear Producto</button>
                        </Link>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default  connect(null,{agregarProducto})(CrearProducto);
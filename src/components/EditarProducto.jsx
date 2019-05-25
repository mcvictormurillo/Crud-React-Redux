import React, { Component } from 'react'
import Producto from './Producto';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {editarProducto} from '../actions/editarProducto'
import {eliminarProducto} from '../actions/eliminarProductos'
 class EditarProducto extends Component {
    render() {
        let nombre = React.createRef();
        let precio = React.createRef();
        console.log('map state to props',this.props.id);
        const producto = this.props.productos[this.props.id]

        return (
            <div className="container">
                <div className="row">
                    <div className="col-5 offset-1 card card-shadow" style={{'height':'18rem','marginTop':'3rem','padding':'1rem'}} >
                    <form className="mt-8">
                        <h2>Editar Producto</h2>
                        <div className="form-group ">
                            <label >Nombre</label>
                            <input ref={nombre} type="text" className="form-control"   placeholder={producto.nombre} />
                        </div>
                        <div className="form-group">
                            <label >Precio</label>
                            <input ref={precio} type="number" className="form-control" placeholder={producto.precio} />
                        </div>
                        <Link to="/productos"><button type="button" className="btn btn-info mr-3"  onClick={
                            ()=>{
                                
                                const producto = {
                                    id: Date.now(),
                                    nombre : nombre.current.value,
                                    precio : precio.current.value
                                }
                                this.props.editarProducto(producto,this.props.id)
                                
                            }
                        }>Actualizar</button>
                        </Link>
                        <Link to="/productos"><button type="button" className="btn btn-danger" onClick={
                            ()=>{
                                this.props.eliminarProducto(producto.id)
                            }
                        }>Eliminar </button>
                        </Link>
                    </form>
                    
                    </div>
                    <div className="col-5 offset-1">
                            
                    </div>
                   
                </div>
            </div>
        )
    }
}
const mapStateToProp = (state)=>{
    return {
        productos: state.productos.productos,
    }
}

export default connect(mapStateToProp,{editarProducto,eliminarProducto})(EditarProducto)
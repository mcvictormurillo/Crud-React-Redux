import React, { Component } from 'react'
import {connect} from 'react-redux';
import {mostrarProductos} from '../actions/ProductosAction'
import Producto from './Producto';
 class Productos extends Component {

    componentDidMount(){
        
        this.props.mostrarProductos();
    }
    
    render() {
        const {productos} = this.props;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4"><h2>lista de productos</h2></div>
                </div>
                <div className="row">
                
                {
                    productos.map((producto,index)=>{
                        return(<Producto key={index} ide={index} producto={producto} />)
                    })
                }
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

export default connect(mapStateToProp,{mostrarProductos})(Productos)
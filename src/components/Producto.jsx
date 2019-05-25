import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

 class Producto extends Component {
  
    render() {
        
        const {producto} = this.props;
        //console.log('props en producto',this.props.ide)
        return (
            <Link to={`/editar/${this.props.ide}`}>
            <div className="col" style={{'height':'17rem','marginTop':'3rem','padding':'1rem'}}>
                <div className="card  card-hover mb-3 card-shadow" style={{"width": "15rem"}}>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">${producto.precio}</p>
                    </div>
                </div>
            </div>
            </Link>
        )
    }
}



export default Producto;
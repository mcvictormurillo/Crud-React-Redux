import {CREAR_PRODUCTOS} from './types';


export const agregarProducto = (producto)=>{
    console.log('ACTION CREAR_PRODUCTOS!!!')
    return{
        type: CREAR_PRODUCTOS,
        payload: {
            id:producto.id,
            nombre: producto.nombre,
            precio: producto.precio
        }
    }
}

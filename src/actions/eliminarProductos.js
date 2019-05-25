import {ELIMINAR_PRODUCTOS} from './types';


export const eliminarProducto = (id)=>{
    console.log('ACTION ELIMINAR_PRODUCTOS!!!')
    return{
        type: ELIMINAR_PRODUCTOS,
        payload: id
    }
}

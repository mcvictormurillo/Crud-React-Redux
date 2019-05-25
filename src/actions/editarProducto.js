import {EDITAR_PRODUCTOS} from './types';

export const editarProducto= (producto,index)=>{
    return {
        type: EDITAR_PRODUCTOS,
        payload: {
            producto: producto,
            index:index
        }
    }
}
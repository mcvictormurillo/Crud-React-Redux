import {BUSCAR_PRODUCTO } from  './types';

export const buscarProducto = (id)=>{
    return{
       type: BUSCAR_PRODUCTO,
       payload: id 
    }
}
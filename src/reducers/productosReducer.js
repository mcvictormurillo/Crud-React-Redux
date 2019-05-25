import {MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTOS, CREAR_PRODUCTOS, EDITAR_PRODUCTOS,BUSCAR_PRODUCTO} from '../actions/types'

const estadoInicial = {
    productos : [{
        "id": 0,
        "nombre": "Panela",
        "precio": 2000
      },
      {
        "id": 1,
        "nombre": "Arroz",
        "precio": 3000
      },
      {
        "id": 2,
        "nombre": "Azucar",
        "precio": 2000
      },
      {
        "id": 3,
        "nombre": "Cafe",
        "precio": 2000
      }
    ]
}

export default function (state = estadoInicial, action){
    switch(action.type){
        case MOSTRAR_PRODUCTOS:
            return state;

        case ELIMINAR_PRODUCTOS:
          console.log('index a eliminar',action.payload)
            const data = state.productos.filter((item)=>{
              if(item.id!=action.payload){
                return item
              }
            })
            const nuevoEstado = {productos: data}
            return nuevoEstado;

        case EDITAR_PRODUCTOS:
            let stateEditable = state
            stateEditable.productos[action.payload.index].nombre = action.payload.producto.nombre
            stateEditable.productos[action.payload.index].precio = action.payload.producto.precio
            console.log(stateEditable)
            return stateEditable;
     
        case CREAR_PRODUCTOS:
            let copia = state
            copia.productos.push(action.payload)
            return copia
       
        default:
            return state;
      
    }
}
import React from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import CrearProducto from './components/CrearProducto';
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto';
class App extends React.Component {
  render(){
    return (
     <Provider store={store}>
       <BrowserRouter>
        <Switch>
          <Route path="/productos" component={Productos} />
          <Route path="/crear-producto" component={CrearProducto} />
          <Route path="/editar/:id" render={(props)=>{
            console.log(props)
            const id = props.match.params.id
            return(<EditarProducto id={id} />)
          }} />
          
        </Switch>
       </BrowserRouter>
       
       
     </Provider>
    );
  }
}

export default App;

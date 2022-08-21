import {
  Routes,
  Route
} from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';
import Orders from './components/Orders';

import './assets/css/style.css';
// bootstrap, jquery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/orders' element={<Orders />}></Route>
      </Routes>
    </div>
  );
}

export default App;

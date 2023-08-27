import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Products/:id' element={<Product/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='categories/:name' element={<CategoryProducts/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import logo from './imgs/rose.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Create from './components/Create';
import OneProduct from './components/OneProduct';
import ProductInventory from './components/ProductInventory';

function App() {
  return (
    <>
      <div className="App mx-auto col-md-12">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/create' element={<Create />} />
            <Route path='/oneProduct/:id' element={<OneProduct />} />
            <Route path='/productinventory' element={<ProductInventory />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

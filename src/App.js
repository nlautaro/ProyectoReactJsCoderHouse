import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import Provider from './context/CartContext';
import Form from './Form/Form';
import Cart from './components/Cart';

function App() {
  return (
    <Provider>
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    </div>
    <Routes>
    <Route path='/' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailsContainer/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/form' element={<Form />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

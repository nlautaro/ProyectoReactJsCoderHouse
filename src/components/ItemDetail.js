import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ( { item } ) => {

  const [unidades, setUnidades] = useState(0);

  const {addToCart} = useContext(CartContext);

  const prueba = (numero) => {
    setUnidades(numero);
    addToCart( item, numero );
    toast.success(`Añadiste ${numero} al carro`);
  };


  return (
    <div>
    <hr></hr>
    <article className='card-details'>
    <img width='300px' src={item.img} alt="" />
    <div className='card-info-details'>
      <h2>{item.nombre}</h2>
      <h4 className='precioProducto'>$ {item.precio} ARS</h4>
      <h5 className='talles'>{item.talle}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      
      {unidades === 0 ? ( // Boton de añadir al carro
        <ItemCount prueba={prueba} stock={15} initial={1} />
      ) : (
        <div>
        <Link to='/Cart'> <Button>Ir al carrito</Button> </Link>
        <ToastContainer />
      </div>
      )}

    </div>
    </article>
    </div>
  )
}

export default ItemDetail
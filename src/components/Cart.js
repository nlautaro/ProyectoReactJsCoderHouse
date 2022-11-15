import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const { cart, deleteAll, deleteOne} = useContext(CartContext);

    if (cart.length === 0) {
      return <div className='App'>
        <hr></hr>
        <h1>No hay productos agregados</h1>
      <Link to='/'> <Button>Compra ya Aquí!</Button> </Link>
      </div>
    }

  return (
    <div>
      <hr></hr>
        {cart.map((producto) => 
        <div className='productos-cart'>
          <div key={producto.id} className='interiorCarro'>
            <img src={producto.img} alt={producto.nombre} width='70px'/>
            <div className='productoEnCarro'>
            <h4>$ {producto.precio} ARS </h4>
            <h4> Cantidad: {producto.cantidad} </h4>
            <h4> Subtotal: ${producto.precio * producto.cantidad} ARS </h4>
            </div>
            <button onClick={() => deleteOne(producto.id)} className='btn btn-warning'>Borrar</button>
          </div>
        </div>
          )
        }
        <h3>Total: $</h3>
        <Button onClick={deleteAll} variant="danger">
            Borrar todo
        </Button>
        <Link to='/form'><Button variant="success" >
            Terminar compra
        </Button></Link>
    </div>

  );
};

export default Cart;
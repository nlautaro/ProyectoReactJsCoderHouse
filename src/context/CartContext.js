import { createContext, useState } from 'react';

export const CartContext = createContext();

const Provider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = ( item, cantidad ) => {
    const producto= {...item, cantidad};
    if (isInCart(producto.id)) {
    } else {
        setCart([...cart, producto]);
    }
};
        
    const isInCart = (id) => cart.some ((producto) => producto.id === id);
    
    const deleteAll = () => setCart([]);
    
    const deleteOne = (id) => {
        const productosFiltados = cart.filter((productos)=> productos.id !== id)
        setCart(productosFiltados);
    }

    const totalUnidades = () => {
        let acc = 0;
        const copia = [...cart];
        copia.forEach((producto) => {
            acc = acc + producto.cantidad;
        });
        return acc;
    }


    //Precio total
    const total = () => {  
        return 1000;
    }

    //const getTotal = () => {
        //let total = 0
        //cart.forEach(producto => {
            //total = total + producto.precio * producto.quantity
        //})
        //return total
    //} 

    return ( 
    <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, totalUnidades, total}}>
        {children} 
    </CartContext.Provider>
    );
};

export default Provider;
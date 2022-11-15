import React, { useState, useEffect} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import { db } from '../services/FirebaseConfig';
import ScaleLoader from 'react-spinners/ScaleLoader';

const ItemListContainer = () => {

  const [items, setItems] = useState ({})
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams(); 

  useEffect(() => {
    
    const collectionProductos = collection(db, 'productos');

    const referencia = categoryId
    ? query(collectionProductos, where('category', '==', categoryId))
    : collectionProductos;

    getDocs(referencia)
    .then((res) => {
      const productos = res.docs.map((producto) => {
        return {
          id: producto.id,
          ...producto.data(),
        };
      });
      setItems(productos);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
    return () => setLoading(true);
}, [categoryId]);

if (loading) {
  return (
    <div className='App'>
      <ScaleLoader color='aqua' />
    </div>
  );
}
  
  return (
      <div>
    <h2 className="text">Productos</h2>
        <ItemList productos={items} />
    </div>
  )
}
export default ItemListContainer
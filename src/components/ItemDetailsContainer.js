import { useParams } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail'
import ScaleLoader from 'react-spinners/ScaleLoader';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/FirebaseConfig';

function ItemDetailsContainer() {

  const [item, setItem] = useState ({});
  const [loading, setLoading] = useState(true);

  //const params = useParams();
  const { id } = useParams();
  
  useEffect(() => {
    const collectionProductos = collection(db, 'productos')
    const ref = doc( collectionProductos, id );

    getDoc(ref)
    .then((res) => {
      setItem({
          id: res.id,
          ...res.data(),
      });
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false);
    });
    return () => setLoading(true);
  }, [id]);

  if (loading) {
    return (
      <div className='App'>
        <ScaleLoader color='aqua' />
      </div>
    );
  }

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailsContainer
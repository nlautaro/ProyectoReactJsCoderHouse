import React, { useState } from 'react';

const ItemCount = (props) => {

  const [count, setCount] = useState(props.initial);
  const {prueba} = props;


    const sumar = () => {
        count < props.stock && setCount(count + 1);
        //setCount(count + 1);
    };

    const restar = () => {
        count > props.initial && setCount(count - 1);
        //setCount(count - 1);
    };

    const add = () => {
      prueba(count);
    }
  return (
      <div class='itemcount'>
          <div className='count-btn'>
              
          <button className='btn btn-info' dissabled={count === props.stock} onClick={sumar}> + </button>
          <p className='count'> {count} </p> 
          <button className='btn btn-info' dissabled={count === props.initial} onClick={restar}> - </button>  

          </div>
          <button onClick={add} className='btn btn-info'>Agregar al carro</button>
      </div>
  );
}

export default ItemCount;
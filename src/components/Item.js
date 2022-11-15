import React from 'react'
import {Link} from 'react-router-dom'

function Item( { producto } ) {
  return (
      <div className='cards'>
        <article className='card'>
            <img src={producto.img} width='220px' alt=""/>
            <div className='card-info'>
              <h4>{producto.nombre}</h4>
              <h6>$ {producto.precio} ARS</h6>
              <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver</Link>
            </div>
        </article>
      </div>
  )
}

export default Item
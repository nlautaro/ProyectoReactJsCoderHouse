import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

function CartWidget() {

  return (
    <Icon>
        <Button className="boton-carro" variant="primary">
        <i className='bx bx-cart'><span id="contadorCarrito"> 0 </span></i>
        </Button>
    </Icon>
  )
}

export default CartWidget

const Icon = styled.div`
`
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <FooterDiv>
        <br/>
        <footer className="footer">

<div className="row p-5 bg-dark text-white">

    <div className="col-xs-12 col-md-6 col-lg-3">
        <p className="h3">NOCITA®</p>
        <div>
          <p className="text-secondary text-decoration-none">2022</p> 
      </div>
    </div>

    <div className="col-xs-12 col-md-6 col-lg-3">

        <p className="h5">NAVEGACIÓN</p>
        <div>

        <div className="textofooter">
            <Link class="text-secondary text-decoration-none" to="">Productos</Link> 
        </div>
            
        <div className="textofooter"> 
            <Link className="text-secondary text-decoration-none" to="">Buzos</Link>
        </div>

        <div className="textofooter">
            <Link className="text-secondary text-decoration-none" to="">Pantalones</Link> 
        </div>

        <div className="textofooter">
            <Link className="text-secondary text-decoration-none" to="">Remeras</Link>
        </div>

        </div>
    </div>
    
    <div className="col-xs-12 col-md-6 col-lg-3">
        <p className="h5">CONTACTO</p>
        <div className="textofooter">
            <p className="text-secondary text-decoration-none"> lautaronocita00@gmail.com </p>
        </div>
        <div className="textofooter">
            <p className="text-secondary text-decoration-none"> +54 223 *** **** </p>
        </div>
    </div>

    <div className="col-xs-12 col-md-6 col-lg-3">
        <p className="h5">REDES SOCIALES</p>
        <div className="textofooter">
            <a className="text-secondary text-decoration-none" href="https://www.instagram.com/lautaro.nocita/">Instagram </a> 
        </div>
    </div>
    
</div>

</footer>
    </FooterDiv>
  )
}

export default Footer

const FooterDiv = styled.div`

.textofooter:hover {
    transform: scale(1.10);
}
`
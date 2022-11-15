import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CartWidget from './CartWidget'
import {Link, NavLink} from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/FirebaseConfig'
 
 function NavBar() {

    const [categories, setCategories] = useState([]);
 
    useEffect(() => {
        const collectionCat = collection(db, 'categorias')
        getDocs(collectionCat)
        .then((res) => {
            const categorias = res.docs.map ((cat) => {
                return {
                    id: cat.id,
                    ...cat.data()
                }
            })
            setCategories(categorias);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

   return (
      <NavContainer>
          <Link to="/">
          <h1 className="titulo"> NOCITA </h1>
          </Link>
            <section>
                <article>
                    <div className="menu">
                    <ul>
                        {categories.map((cat) => (
                        <NavLink key={cat.id} to={`/category/${cat.path}`}>{cat.name}</NavLink>
                        ))}
                        <Link to='/cart'><CartWidget/></Link>
                    </ul>
            </div>
                </article>
            </section>
      </NavContainer>
   )
 }
 
 export default NavBar

 const NavContainer = styled.nav`
 `
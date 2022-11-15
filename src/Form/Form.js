import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../services/FirebaseConfig';

const Form = () => {

    const [name, setName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [mail, setMail] = useState ('');
    const [num, setNum] = useState ('');
    const [home, setHome] = useState ('');

    const { cart, total, deleteAll } = useContext(CartContext);

    const [loading, setLoading] = useState(false);

    const [ orderId, setOrderId ] = useState('')

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        const order = {
            buyer: {name, lastName, mail, num, home},
            items: cart,
            total: total(),
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then((res) => {
            setOrderId(res.id);
            deleteAll();
        })
        .catch((error) => {
            console.log(error);
        })
        .finally (() => setLoading(false));
    };

    const handleChangeName = (e) => {
    setName(e.target.value);
    }

    const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    }

    const handleChangeMail = (e) => {
    setMail(e.target.value);
    }

    const handleChangeNum = (e) => {
    setNum(e.target.value);
    }

    const handleChangeHome = (e) => {
    setHome(e.target.value);
    }

    console.log(orderId)

    if (orderId) {
        return (
            <div className='App'>
            <h3>Gracias por tu compra!</h3>
            <h2>Este es tú numero de seguimiento es: {orderId}</h2>
            </div>
        );
    }

    return(
<div>

<h1 className='text'>Terminar compra</h1>
        <div style={{
        minHeight: '30vh', 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center'
        }}>

<form onSubmit={handleSubmit} action="">

    <div>
    <label><strong>Nombre y Apellido</strong></label>

    <input 
    type="text" 
    name="nombre" 
    placeholder="Nombre..." 
    onChange={handleChangeName} 
    value={name} />

    <input 
    type="text" 
    name="apellido" 
    placeholder="Apellido..." 
    onChange={handleChangeLastName} 
    value={lastName} />
    </div>

    <div>
    <label>Email</label>

    <input 
    type="text" 
    name="email" 
    placeholder="Email..." 
    onChange={handleChangeMail}
    value={mail} />
    </div>

    <div>
    <label>Número de teléfono</label>

    <input 
    type="text" 
    name="número de teléfono" 
    placeholder="Ej +54 223 123 4567" 
    onChange={handleChangeNum} 
    value={num} />
    </div>

    <div>
    <label>Dirección</label>

    <input 
    type="text" 
    name="hogar" 
    placeholder="Ej +54 223 123 4567" 
    onChange={handleChangeHome} 
    value={home} />
    </div>

    <button>{loading ? 'Enviando...' : 'Enviar'}</button>

    </form>
    </div>
</div>
    );
};

export default Form;
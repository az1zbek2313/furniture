import style from './style.module.css';
import Alert from '@mui/material/Alert';
import Savat from '../../components/Cart';
import { useState } from 'react';

function Cart() {
    const carts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):false;
    const [cart, setCart] = useState(carts)
  return (
    <div className='container-fluid container-lg'>
        <h1 className={style.title}>Shopping Cart</h1>
        <div className={style.cardWrap}>
          {
            !cart ?
            <>
              <Alert variant="filled" severity="warning">
                There are no products in the cart!
              </Alert> 
              <Alert variant="outlined" severity="warning">
                This is an outlined warning Alert.
              </Alert> 
              <Alert variant="filled" severity="warning">
                There are no products in the cart!
              </Alert> 
            </>
            : cart.map((el, index) => {
              return (
                <Savat key={index} data={el} setCart={setCart}></Savat>
              )
            })
          }
        </div>
    </div>
  )
}

export default Cart;
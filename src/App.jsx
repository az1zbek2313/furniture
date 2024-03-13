import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/index.jsx';
import About from './pages/About';
import Products from './pages/Products';
import Single from './pages/Single';
import Cart from './pages/Cart';

const body = document.getElementById('body');
function App() {
  const defaultDark = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : false
  const [dark, setDark] = useState(defaultDark);
  const dispatch = useDispatch();
  dark ? body.setAttribute('style', 'background: #212529; color: white;') : body.setAttribute('style', 'background: white; color: black;')

  useEffect(() => {
    let carts = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
      sum += Number(carts[i].amount);
    }
    dispatch({ type: "UPDATE", payload: sum });
  }, [dispatch]);

  return (
    <Routes>  
      <Route path='/' element={<Layout setDark={setDark} dark={dark}/>}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products'>
          <Route index={true} element={<Products />} />
          <Route path='id' element={<Single/>} />
        </Route>
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}


export default App;

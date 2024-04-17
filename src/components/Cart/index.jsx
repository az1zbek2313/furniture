import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";

function Savat(props) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
    let cart =localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    function RemoveItem(){
      let dart = cart.find((el) => {
          return  (el.cart_id == props.data.cart_id && el.color == props.data.color)
      })
        cart = cart.filter((el) => {
            return  !(el.cart_id == props.data.cart_id && el.color == props.data.color)
        })
        props.setCart(cart);
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({type: "UPDATE", payload:counter.counter - dart.amount})
    }

    function handleChange(e){
      let dart = cart.map((el) => {
          if (el.cart_id == props.data.cart_id && el.color == props.data.color){
            dispatch({type:"UPDATE", payload:counter.counter - Number(el.amount) + Number(e.target.value)})
            el.amount = e.target.value;
          }

          return el;
      })
      localStorage.setItem('cart', JSON.stringify(dart));
      console.log(26, dart);
    }
    

  return (
    <div className={style.wrapper}>
      <div className={style.about}>
        <img
          className={style.image}
          src={props.data.image}
          alt="product image"
        />
        <article>
          <h1>{props.data.title}</h1>
          <h4>{props.data.company}</h4>
          <b className={style.bold}>Color: &nbsp;</b>{" "}
          <button
            type="button"
            className={`badge w-6 h-6 mr-2 false ${style.color}`}
            style={{ background: `${props.data.color}` }}
          >
            &nbsp;
          </button>
        </article>
      </div>
      <div className={style.amount}>
        <p>Amount</p>
        <select
          name="amount"
          id="amount"
          className={`mt-2 select select-base select-bordered select-xs ${style.select}`}
          onChange={handleChange}
        >
          <option selected={props.data.amount == '1' ? true : false} value="1">1</option>
          <option selected={props.data.amount == '2' ? true : false} value="2">2</option>
          <option selected={props.data.amount == '3' ? true : false} value="3">3</option>
          <option selected={props.data.amount == '4' ? true : false} value="4">4</option>
          <option selected={props.data.amount == '5' ? true : false} value="5">5</option>
          <option selected={props.data.amount == '6' ? true : false} value="6">6</option>
          <option selected={props.data.amount == '7' ? true : false} value="7">7</option>
          <option selected={props.data.amount == '8' ? true : false} value="8">8</option>
          <option selected={props.data.amount == '9' ? true : false} value="9">9</option>
          <option selected={props.data.amount == '10' ? true : false} value="10">10</option>
          <option selected={props.data.amount == '11' ? true : false} value="11">11</option>
          <option selected={props.data.amount == '12' ? true : false} value="12">12</option>
          <option selected={props.data.amount == '13' ? true : false} value="13">13</option>
          <option selected={props.data.amount == '14' ? true : false} value="14">14</option>
          <option selected={props.data.amount == '15' ? true : false} value="15">15</option>
          <option selected={props.data.amount == '16' ? true : false} value="16">16</option>
          <option selected={props.data.amount == '17' ? true : false} value="17">17</option>
          <option selected={props.data.amount == '18' ? true : false} value="18">18</option>
          <option selected={props.data.amount == '19' ? true : false} value="19">19</option>
          <option selected={props.data.amount == '20' ? true : false} value="20">20</option>
        </select>
        <NavLink onClick={RemoveItem}>remove</NavLink>
      </div>
      <h2>${props.data.price / 100}</h2>
    </div>
  );
}

export default Savat;

import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import Snackbar from "@mui/material/Snackbar";
import style from "./style.module.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Single(props) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const amount = useRef();
  const [saveCart, setSaveCart] = useState(false);
  const [textStyle, setStyle] = useState("");
  const location = useLocation();
  const message = location.state.data;
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  function clickButton(el) {
    setStyle(el);
  }

  function handleButton(e) {
    e.preventDefault();
    setSaveCart(true);
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += Number(cart[i].amount)   
    }
    dispatch({ type: "UPDATE", payload: counter.counter + Number(amount.current.value) });
    console.log(counter);
    setTimeout(() => {
      setSaveCart(false);
    }, 1000);
    const feature = {
      id: nanoid(),
      cart_id: `${message.id}${textStyle}`,
      color: `${textStyle}`,
      image: message.attributes.image,
      title: message.attributes.title,
      price: message.attributes.price,
      company: message.attributes.company,
      amount: amount.current.value,
    };
    // console.log(feature);
    let controlCart = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).some(
      (el) => el.cart_id == feature.cart_id && el.color == feature.color
    )
      ? JSON.parse(localStorage.getItem("cart")).find(
          (el) => el.image == feature.image && el.color == feature.color
        )
      : feature;


    cart = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).some(
      (el) => el.cart_id == feature.cart_id && el.color == feature.color
    )
      ? cart.filter(
          (el) => !(el.title == feature.title && el.color == feature.color)
        )
      : cart;

    controlCart.amount = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).some(
      (el) => el.cart_id == feature.cart_id && el.color == feature.color
    )
    ? (+controlCart.amount) + (+feature.amount)
    : feature.amount;

    cart.push(controlCart);

    !feature.color && confirm("Iltimos mahsulot rangini tanlang!")
    feature.color && localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className={`container-fluid container-lg`}>
      {saveCart && (
        <Snackbar
          sx={{ background: "white" }}
          open={open}
          autoHideDuration={2000}
          message="Item added to cart"
        />
      )}
      <div
        className={`mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ${style.wrapper}`}
      >
        <img
          src={message.attributes.image}
          alt="Lounge Chair"
          className={style.image}
        />
        <div className={`${style.textWrap}`}>
          <h1 className={`apitalize text-3xl font-bold ${style.capitalize}`}>
            {message.attributes.title}
          </h1>
          <h4
            className={`text-xl text-neutral-content font-bold mt-2 ${style.opacity}`}
          >
            {message.attributes.company}
          </h4>
          <p className="mt-3 text-xl">${message.attributes.price / 100}</p>
          <p className="mt-6 leading-8">{message.attributes.description}</p>
          <div className={`mt-6`}>
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors
            </h4>
            <div className="mt-2">
              {message?.attributes?.colors.map((el, index) => {
                return (
                  <button
                    onClick={() => {
                      clickButton(el);
                    }}
                    key={index}
                    type="button"
                    className={`badge w-6 h-6 mr-2 false ${style.color} ${
                      textStyle == el ? style.border : ""
                    }`}
                    style={{ background: `${el}` }}
                  >
                    &nbsp;
                  </button>
                );
              })}
            </div>
          </div>
          <label className="label" htmlFor="amount">
            <h4 className="text-md font-medium -tracking-wider capitalize">
              Amount
            </h4>
          </label>
          <div className="form-control w-full max-w-xs mb-3">
            <select
              className={`select select-secondary select-bordered select-md ${style.select}`}
              id="amount"
              ref={amount}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="mt-10">
            <button
              onClick={handleButton}
              className={`btn btn-secondary btn-md ${style.btn}`}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;

import style from "./style.module.css";
import useFetch from "../../hooks/function";
import Filter from "../../components/Filter";
import { RingLoader } from "react-spinners";
import Card from "../../components/Card";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Products() {
  let defaults = localStorage.getItem('count')?JSON.parse(localStorage.getItem('count')):Number(1)
  const [count, setCount] = useState(defaults);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const message = useFetch(
    `https://strapi-store-server.onrender.com/api/products?page=${count}`,
    count
  );

  function AddCounter() {
    let counter = 1;

    if (count == 1) {
      return (counter = 2);
    }
    if (count == 2) {
      return (counter = 3);
    }
    if (count == 3) {
      return (counter = 1);
    }
  }
  function ReturnCounter() {
    let counter = 1;

    if (count == 1) {
      return (counter = 3);
    }
    if (count == 2) {
      return (counter = 1);
    }
    if (count == 3) {
      return (counter = 2);
    }
  }

  return (
    <div className="container-fluid container-lg">

      <div className="card-wrapper">
        <header className={style.header}>
          <div className={style.products}>
            <p>22 products</p>

            <span className={style.productsIcon}>
              <NavLink to={"#"} onClick={() => { setActive1(true); setActive2(false); }}>
                <svg
                  className={active1 ? style.productsIconSvg : ""}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                </svg>
              </NavLink>
              <NavLink to={"#"} onClick={() => { setActive1(false); setActive2(true); }}>
                <svg
                  className={active2 ? style.productsIconSvg : ""}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  ></path>
                </svg>
              </NavLink>
            </span>
          </div>
        </header>

        <div className={active1 ? style.cardWrap : style.cardWrap1}>
          {message.loading ? (
            <RingLoader className={style.spinner} color="rgba(33, 58, 214, 1)" />
          ) : (
            message.data &&
            message.data.data.map((el, index) => {
              return <Card key={index} data={el} active1={active1}></Card>;
            })
          )}
        </div>
        <div className={` mt-16 d-flex justify-content-end`}>
          <div className={`join ${style.justify}`}>
            <NavLink to={count == 2 ? '' : count == 1 ? `?page=${count+2}` : `?page=${count-1}`}>
              <button
                onClick={() => {
                  setCount(ReturnCounter());
                  localStorage.setItem('count', JSON.stringify(ReturnCounter()))
                }}
                className="btn btn-xs sm:btn-md join-item"
              >
                Prev
              </button>
            </NavLink>
            <NavLink>
              <button
                onClick={() => {
                  setCount(1);
                  localStorage.setItem('count', JSON.stringify(1))
                }}
                className={
                  count == 1
                    ? `btn btn-xs sm:btn-md border-none join-item ${style.active}`
                    : "btn btn-xs sm:btn-md border-none join-item"
                }
              >
                1
              </button>
            </NavLink>
            <NavLink to={"?page=2"}>
              <button
                className={
                  count == 2
                    ? `btn btn-xs sm:btn-md border-none join-item ${style.active}`
                    : "btn btn-xs sm:btn-md border-none join-item"
                }
                onClick={() => {
                  setCount(2);
                  localStorage.setItem('count', JSON.stringify(2))
                }}
              >
                2
              </button>
            </NavLink>
            <NavLink to={`?page=${count+1}`}>
              <button
                onClick={() => {
                  setCount(3);
                  localStorage.setItem('count', JSON.stringify(3))
                }}
                className={
                  count == 3
                    ? `btn btn-xs sm:btn-md border-none join-item ${style.active}`
                    : "btn btn-xs sm:btn-md border-none join-item"
                }
              >
                3
              </button>
            </NavLink>
           <NavLink to={count == 3 ? '' : `?page=${count+1}`}>
            <button
                onClick={() => {
                  setCount(AddCounter());
                  localStorage.setItem('count', JSON.stringify(AddCounter()))
                }}
                className="btn btn-xs sm:btn-md join-item"
              >
                Next
              </button>
           </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

function Card(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products/id", { state: { data: props.data } });
  }

  return (
    <div
      onClick={handleClick}
      className={props.active1 ? style.card : style.card1}
    >
      <img
        src={props.data.attributes.image}
        alt="avant-garde lamp"
        className={`rounded-xl h-64 md:h-48 w-full object-cover ${
          props.active1 ? style.img : style.img1
        }`}
      ></img>
      <div className="card-body items-center text-center mt-4">
        <h2
          className={`card-title capitalize tracking-wide ${
            props.active1 ? style.tracking : style.tracking1
          }`}
        >
          {props.data.attributes.title}
        </h2>
        {!props.active1 && (
          <p style={{ opacity: "0.4", fontSize: "28px", fontWeight: "600" }}>
            {props.data.attributes.company}
          </p>
        )}
        <span className="text-secondary">${props.data.attributes.price}</span>
      </div>
    </div>
  );
}

export default Card;

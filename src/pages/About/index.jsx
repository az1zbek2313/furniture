import style from "./style.module.css";

function About({dark}) {

  return (
    <div className={style.wrapper}>
      <div className={style.wrapBox}>
        <h1 style={dark ? {color:"white"} : {color:"rgba(2, 29, 72, 0.8)"}}>We love</h1>
        <button>comfy</button>
      </div>
      <p style={dark ? {color:"white"} : {color:"rgba(2, 29, 72, 0.8)"}} className={style.wrapText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </div>
  );
}

export default About;

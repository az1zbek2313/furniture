import './style.css';
import hero1 from "../../assets/image/hero1.webp"
import hero2 from "../../assets/image/hero2.webp"
import hero3 from "../../assets/image/hero3.webp"
import hero4 from "../../assets/image/hero4.webp"
import { RingLoader } from "react-spinners";
import useFetch from '../../hooks/function';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';

function Home() {
  const navigate = useNavigate();
  const message = useFetch(
    `https://strapi-store-server.onrender.com/api/products?featured=true`
  );

  return (
    <main className="main main--container">
    <div className="grid mt-20 lg:grid-cols-2 gap-24 items-center">
      <div className="hero">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <a className="btn btn-primary btn-products" href="/products">
            Our Products
          </a>
        </div>
      </div>
      <div className="carousel-div">
      <div className="CAROUSEL h-[28rem] lg:carousel flex carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        <img
            alt="image"
            src={hero1}
            className='rounded-box h-full w-80 object-cover'
          />
        <img
            alt="image"
            src={hero2}
            className='rounded-box h-full w-80 object-cover'
          />
        <img
            alt="image"
            src={hero3}
            className='rounded-box h-full w-80 object-cover'
          />
        <img
            alt="image"
            src={hero4}
            className='rounded-box h-full w-80 object-cover'
          />
        
      </div>
      </div>
    </div>

    <h2 className="main--title text-3xl font-medium tracking-wider capitalize">Featured Products</h2>
    <div className="card-home-wrapper">
      {
        !message.loading ? 
          message.data?.data.map((el) => {
            return <Card active1={true} data={el} key={el.id}/>
          })
        :
        <RingLoader className="spinner" color="rgba(33, 58, 214, 1)" />
      }
    </div>
  </main>
    
  )
}

export default Home;
import {React,useState,useEffect} from 'react';
import axios from 'axios';
import "./pages.css"

const Animes = () => {
    const [data,setData]  = useState(null);
    const [facts, setFacts] = useState();
    const [isloading,setIsloading] = useState(false)
    useEffect(()=>{
        getdata();
    },[isloading])
    
    const getdata = async ()=>{
        const res = await axios.get(
          "https://anime-facts-rest-api.herokuapp.com/api/v1/"
        );
          setData(res.data.data);
          setIsloading(true);
          console.log(res.data);
    }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {isloading &&
            data.map((item) => (
              <div>
                <a
                  key={item.anime_id}
                  href={`./${item.anime_name}`}
                  className="card-zoom hover:bg-gray-400 rounded-lg"
                >
                  <div className=" card-zoom-image aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={item.anime_img}
                      alt={item.anime_name}
                      style={{ height: "400px" }}
                      className=" w-full object-cover object-center hover:opacity-60"
                    />
                  </div>
                </a>
                <h3 className="relative mt-4 text-xl font-bold text-center text-black">
                  {item.anime_name}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Animes
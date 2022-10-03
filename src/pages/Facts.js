import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Facts = () => {
    const { name } = useParams();
    const [facts,setFacts]=useState();
    const [img,setImg] = useState();
    const [isloading,setIsloading] = useState(false);
    const [err,setErr] = useState(null);

    useEffect(()=>{
        
        getfacts();
    },[isloading])
    const getfacts = async () => {
      await axios
        .get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`)
        .then((res) => {
          if (res.data.success) {
            setIsloading(true);
            setFacts(res.data.data);
            setImg(res.data.img);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setErr(err.response.data.data);
          }
        });
      
    };
  return (
    <div>
      {err && (
        <div className="h-screen  text-4xl text-semibold text-center">
          404-page not found
          <br />
          Error- {err}
        </div>
      )}
      {isloading && (
        <div className=" bg-gray-100">
          <section className="md:h-full flex items-center text-gray-600">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex text-center items-center mb-12">
                <img
                  style={{ width: "300px", height: "400px" }}
                  className="w-1/2"
                  src={img}
                ></img>
                <h1 className="text-4xl md:text-6xl text-gray-700 w-1/2 font-semibold">
                  {name}
                </h1>
              </div>
              <div className="flex flex-wrap -m-4">
                {isloading &&
                  facts.map((item) => (
                    <div key={item.fact_id} class="p-4 sm:w-1/2 lg:w-1/3">
                      <a href={`/${name}/${item.fact_id}`}>
                        <div className="h-full hover:bg-black hover:text-white transition duration-300 ease-in border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <div className="p-6 ">
                            <p className="text-base font-medium ">
                              {item.fact}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Facts;
import {React,useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Fact = () => {
  const { name , id } = useParams();
  const [fact, setFact] = useState();
  const [isloading, setIsloading] = useState(false);
  const [err,setErr] = useState(null)

  useEffect(() => {
    getfact();
  }, [isloading]);
  const getfact = async () => {
    await axios
      .get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${name}/${id}`)
      .then((res) => {
        if (res.data.success) {
          setIsloading(true);
          setFact(res.data.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setErr(err.response.data.data);
        }
      });
  };
  return (
    <div className="flex flex-col h-screen">
      {err && (
        <div className="h-screen  text-4xl text-semibold text-center m-24">
          404-page not found<br/>Error- {err}
        </div>
      )}
      {isloading && (
        <div className="text-center m-4">
          <h1 className="text-2xl">{fact.fact}</h1>
        </div>
      )}
    </div>
  );
};

export default Fact;
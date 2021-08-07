import React,{useState,useEffect} from 'react';
import "./Banner.css"
import axios from './axios';
import {truncate,getRandomNumber,baseURL} from "./util"
 
function Banner({url}) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url)
           
            setMovie(request.data.results[ getRandomNumber(request.data.results.length)])
        }
        fetchData();
    }, []);
    return (

<div>
        <header className="banner" style={{
            backgroundImage: `url(${movie?.backdrop_path?baseURL+movie?.backdrop_path:"https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/20-02-2020/netflix/Netflix-Banner_1080x419.jpg?impolicy=pqmedium"})`, backgroundSize: 'cover',
            backgroundPosition: "center center",
            backgroundAttachment:"fixed",
            backgroundRepeat:"no-repeat"
        }}>



            <div className="banner__contents">
                <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_title || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                  {movie?.overview? truncate(movie?.overview,250): ""}  
                </h1>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>
      

 
        </div>

    )
}

export default Banner

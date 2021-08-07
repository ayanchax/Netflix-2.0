import React,{useState,useEffect} from 'react';
import "./Banner.css"
import axios from './axios';
import {truncate,getRandomNumber,baseURL} from "./util"
import movieTrailer from "movie-trailer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YouTubeTrailerDialog from './YouTubeTrailerDialog';
toast.configure();
function Banner({url}) {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')
    const [trailerName, setTrailerName] = useState('')
    const [showModal, updateShowModal] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url)
           
            setMovie(request.data.results[ getRandomNumber(request.data.results.length)])
        }
        fetchData();
    }, []);
    const toggleModal = () => {
        setTrailerName('');
        setTrailerUrl('')
        updateShowModal((state) => !state);
    };
    const handleClick = (movie) => {
        // movie trailer gives the movie url by searching with title or name
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                
                // getting the url param for the video id <v> to play
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                setTrailerName(movie?.title || movie?.name || movie?.original_name)
                updateShowModal(true)
            }).catch((error) => 
            {
                updateShowModal(false)
                toast.warning("Video unavailable in your region!!", {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 3000,
                });
            }
            
            )
}
 
    return (

<div>
        <header
        onClick={() => handleClick(movie)}
        className="banner" style={{
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
      
        <YouTubeTrailerDialog
                    content={
                     trailerUrl
                    }
                    title={trailerName}
                    isOpen={showModal}
                    updateModalState={toggleModal}
                />
        </div>

    )
}

export default Banner

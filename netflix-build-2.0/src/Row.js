/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from './axios';
import { baseURL } from "./util"
import movieTrailer from "movie-trailer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Row.css"
import YouTubeTrailerDialog from './YouTubeTrailerDialog';
toast.configure();
function Row({ allow, title, url, isLargeRow, isRowDisplayed }) {

    //data hooks
    const [videos, setVideos] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')
    const [trailerName, setTrailerName] = useState('')
    const [showModal, updateShowModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setVideos(request.data.results);
            return request;
        }
        if (isRowDisplayed) fetchData();
    }, [url]);

    if (!isRowDisplayed) {
        return ("")
    }
    const toggleModal = () => {
        setTrailerName('');
        setTrailerUrl('')
        updateShowModal((state) => !state);
    };
    const addDefaultSrc = (e) => {
        e.target.src = 'https://assets.nflxext.com/en_us/akira/jawBone/nav-shadow.png'

    }

    const handleClick = (movie) => {
        // movie trailer gives the movie url by searching with title or name
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {

                // getting the url param for the video id <v> to play
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                setTrailerName(movie?.title || movie?.name || movie?.original_name)
                updateShowModal(true)
            }).catch((error) => {
                updateShowModal(false)
                toast.error("Video unavailable currently!! 😔", {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 3000,
                });
            }
            )
    }

    return (
        <div className="row">
            {videos && videos?.length > 0 && (<h2>{title}</h2>)}
            <div className="row__posters">
                {/* several row__poster(s) */}

                {videos && videos.slice(0, allow)

                    .filter(video => video?.poster_path !== null && video?.backdrop_path !== null).map((video) => (

                        <img onClick={() => handleClick(video)}
                            onError={addDefaultSrc}
                            title={video?.title || video?.name || video?.original_name}
                            className={`row__poster ${isLargeRow && "row__poster__large"}`}
                            src={`${baseURL}${isLargeRow ? video.poster_path : video.backdrop_path
                                }`}
                            key={video.id}
                        />
                    )
                    )}


            </div>

            {trailerUrl && <YouTubeTrailerDialog
                content={
                    trailerUrl
                }
                title={trailerName}
                isOpen={showModal}
                updateModalState={toggleModal}
            />
            }

        </div>
    );
}
export default Row

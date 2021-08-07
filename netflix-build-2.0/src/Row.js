/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from './axios';
import { baseURL } from "./util"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./Row.css"
function Row({ title, url, isLargeRow, isRowDisplayed }) {

    //data hooks
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setVideos(request.data.results);
            return request;
        }
        if (isRowDisplayed) fetchData();
    }, [url]);
    const addDefaultSrc = (e) => {
        e.target.src = 'https://optimumdental.com.pk/wp-content/uploads/2016/10/orionthemes-placeholder-image-750x750.jpg'
        
    }
    if (!isRowDisplayed) {
        return ("")
    }
    return (
        <div className="row">
            {videos && videos?.length>0 &&  ( <h2>{title}</h2>) }
            <div className="row__posters">
                {/* several row__poster(s) */}
                {videos?.map((video) => (
                     
                    <img lazy={true}
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

        </div>
    );
}


export default Row

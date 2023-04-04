import React, { useState, useRef } from 'react'
import './Section.scss'
import { useNavigate } from 'react-router-dom';

export default function Section(props) {

    const navigate = useNavigate();
    const videoRef = useRef(null);

    const [showVideo, setShowVideo] = useState(true);

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    const showBigCard = (id) => {
        const bigCard = document.querySelector('#' + id);
        bigCard.style.display = 'flex';
    }

    const hideBigCard = (id) => {
        const bigCard = document.querySelector('#' + id);
        const allbigCard = document.querySelector('.big-card');
        bigCard.style.display = 'none';
        allbigCard.style.display = 'none';
        videoRef.current.currentTime = 0;
    }

    return (
        <div className='section'>
            <h3 className='title'>{props.Genre}</h3>
            <div className='list'>
                {Array.isArray(props.Media) && props.Media.map((media, index) => {
                    if (media.Genre.includes(props.Genre)) {
                        return (
                            <div className='card' key={index} onMouseOver={() => showBigCard(props.Genre.replace(/\s+/g, '') + '' + index)} onMouseLeave={() => hideBigCard(props.Genre.replace(/\s+/g, '') + '' + index)}>
                                <img src={process.env.PUBLIC_URL + '/movies/' + media.Poster} alt='poster' />
                                <div className='big-card' id={props.Genre.replace(/\s+/g, '') + '' + index} onMouseOver={() => showBigCard(props.Genre.replace(/\s+/g, '') + '' + index)}>
                                    {showVideo && (
                                        <video className='media-card' width="100%" autoPlay={true} muted playsInline ref={videoRef} onEnded={handleVideoEnd}>
                                            <source src={process.env.PUBLIC_URL + "/movies/" + media.Trailer} type="video/mp4" />
                                        </video>
                                    )}
                                    {!showVideo && (
                                        <img className='image-card' src={process.env.PUBLIC_URL + '/movies/' + media.Poster} alt='poster' />
                                    )}
                                    <div className='card-controls'>
                                        <div className='actions'>
                                            <button className='card-button first' onClick={() => navigate('/play/' + media._id)}><i className="fa-solid fa-play"></i></button>  
                                            <button className='card-button second'><i className="fa-solid fa-plus"></i></button>  
                                            <button className='card-button second'><i className="fa-solid fa-thumbs-up"></i></button>
                                        </div>
                                        <div className='actions'>
                                            <button className='card-button second'><i className="fa-solid fa-chevron-down"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
                <button className='next-button'><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    );
}
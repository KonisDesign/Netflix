import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import './FullCard.scss'
import { useNavigate } from 'react-router-dom';
import Episode from '../episode/Episode';

export default function FullCard(props) {

    const navigate = useNavigate();

    const videoRef = useRef(null);

    const [card, setCard] = useState([]);
    const [showVideo, setShowVideo] = useState(true);
    const [isSoundOn, setIsSoundOn] = useState(false);

    const toggleSound = () => {
        try {
            setIsSoundOn(!isSoundOn);
            const videoElement = document.querySelector('.media-full-card');
            videoElement.muted = !isSoundOn;
        } catch {

        }
    };


    useEffect(() => {
        const fetchPosts = async () => {
            const result = await axios.get('http://localhost:8888/browse');
            setCard(result.data);
        };
        fetchPosts();
    }, []);

    const handleVideoEnd = () => {
        videoRef.current.currentTime = 0;
        setShowVideo(false);
    };

    const closeFullCard = () => {
        props.setShowFullCard(false)
    }

    const [season, setSeason] = useState(1)


    const myCard = card.find((post) => post._id === props.cardId);

    return props.showFullCard && myCard ? (
        <div className='full-card-container'>
            <div className='full-card'>
                <button className='close-button' onClick={() => closeFullCard()}><i className="fa-solid fa-xmark"></i></button>
                {showVideo && (
                    <video className='media-full-card' width="100%" autoPlay={true} playsInline onEnded={handleVideoEnd} ref={videoRef}>
                        <source src={process.env.PUBLIC_URL + "/movies/" + myCard.Trailer} type="video/mp4" />
                    </video>
                )}
                {!showVideo && (
                    <img className='image-full-card' src={process.env.PUBLIC_URL + '/movies/' + myCard.Poster} alt='poster' />
                )}
                {showVideo && (
                    <img className='media-title-image' src={process.env.PUBLIC_URL + '/movies/' + myCard.TitleImage} alt='media_title' />
                )}
                {!showVideo && (
                    <div className='blank'></div>
                )}
                <div className='controls'>
                    <div className='actions'>
                        <button className='play-button' onClick={() => navigate('/play/' + myCard._id)}><i className="fa-solid fa-play"></i> Lecture</button>
                        <button className='action-button'><i className="fa-solid fa-plus"></i></button>
                        <button className='action-button'><i className="fa-regular fa-thumbs-up"></i></button>
                    </div>
                    <div className='actions'>
                        <button className='action-button' onClick={toggleSound}>{isSoundOn ? <i className='fa-solid fa-volume-mute'></i> : <i className='fa-solid fa-volume-high'></i>}</button>
                    </div>
                </div>
                <div className='infos-full-card'>
                    <p className='recomend'>Recommandé à 96%</p>
                    <p className='time'>{myCard.TIme}</p>
                    <p className='hd'>HD</p>
                    <i className="fa-solid fa-audio-description"></i>
                    <i className="fa-regular fa-message fa-flip-horizontal"></i>
                </div>
                <p className='pegi'>{myCard.Pegi}+</p>
                <p className='synopsis'>{myCard.Synopsis}</p>
                {myCard.Genre[0] === 'Série' && (
                    <div className='episode-header'>
                        <h3>Episodes</h3>

                        {myCard.Seasons === "1" && (
                            <h4>{myCard.Name}</h4>
                        )}
                        {myCard.Seasons !== "1" && (
                            <div className='select-seasons'>
                                <select onChange={(e) => setSeason(Number(e.target.value))} className='seasons'>
                                    {[...Array(Number(myCard.Seasons)).keys()].map((i) => (
                                        <option key={i + 1} value={i + 1}>Saison {i + 1}</option>
                                    ))}
                                </select>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        )}
                    </div>
                )}

                {myCard.Genre[0] === 'Série' && (
                    <div className='episode-container'>
                        {Array.isArray(myCard[`Season${season}Title`]) && myCard[`Season${season}Title`].map((media, index) => {
                            return (
                                <Episode Media={media} EpisodeNb={index + 1} Poster={myCard.Poster} Url={myCard._id} />
                            )
                        })}
                    </div>
                )}
                <h3 className='similar-title'>Titres similaires</h3>
                <div className='similar-container'>
                    {Array.isArray(card) && card.map((media, index) => {
                        if (media.Genre.includes(myCard.Genre[1]) && media._id !== myCard._id) {
                            return (
                                <div className='similar-card' key={index}>
                                    <img className='poster' src={process.env.PUBLIC_URL + '/movies/' + media.Poster} alt='media_poster' />
                                    <div className='header'>
                                        <div className='infos-similar'>
                                            <p className='recomend'>Recommandé à 95%</p>
                                            <p className='pegi'>{media.Pegi}+</p>
                                        </div>
                                        <button className='add-button'><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    <p className='synopsis-similar'>{media.Synopsis}</p>
                                    <button className='play-button-similar' onClick={() => navigate('/play/' + media._id)}><i className="fa-solid fa-play"></i></button>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    )
        :
        (
            <div className='hide'></div>
        )
}

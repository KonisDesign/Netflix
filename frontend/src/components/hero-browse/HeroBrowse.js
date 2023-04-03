import React, { useState } from 'react'
import './HeroBrowse.scss'

export default function HeroBrowse() {

    const [showVideo, setShowVideo] = useState(true);
    const [isSoundOn, setIsSoundOn] = useState(true);

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    const toggleSound = () => {
        setIsSoundOn(!isSoundOn);
        const videoElement = document.querySelector('.hero-movie');
        videoElement.muted = !isSoundOn;
      };

    return (
        <div className='hero-browse'>
            {showVideo && (
                <video className='hero-movie' width="100%" autoPlay={true} muted playsInline onEnded={handleVideoEnd}>
                    <source src={process.env.PUBLIC_URL + "/movies/avatar_2.mov"} type="video/mp4" />
                </video>
            )}
            {!showVideo && (
                <img className='hero-image' src={process.env.PUBLIC_URL + '/movies/avatar_2.jpeg'} alt='Video end' />
            )}
            <div className='media-infos'>
                <img src={process.env.PUBLIC_URL + '/movies/avatar_2_title.png'} alt='avatar_2'/>
                <div className='top-media'>
                    <h4>Top<br />10</h4>
                    <h3>N° 1 des films aujourd'hui</h3>
                </div>
                <h4>Jake Sully et Ney'tiri sont contraints de quitter leur foyer et d'explorer les différentes régions encore mystérieuses de Pandora. Lorsqu'une ancienne menace refait surface.</h4>
                <div className='actions'>
                    <button className='browse-button primary'><i className="fa-solid fa-play"></i> Lecture</button>
                    <button className='browse-button secondary'><i className="fa-solid fa-circle-info"></i> Plus d'infos</button>
                </div>
            </div>
            <div className='video-actions'>
                <button className='control-button' onClick={toggleSound}>
                {isSoundOn ? <i className='fa-solid fa-volume-mute'></i> : <i className='fa-solid fa-volume-high'></i>}
                </button>
                <h4 className='pegi'>12+</h4>
            </div>
        </div>
    )
}

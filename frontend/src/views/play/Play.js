import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Play.scss';

export default function Play() {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const isLoggedIn = !!localStorage.getItem('token');
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [navigate]);

    const showControls = () => {
        const header = document.querySelector('.play-header');
        header.style.display = 'flex'
        const footer = document.querySelector('.play-footer');
        footer.style.display = 'flex'
        const timer = setTimeout(() => {
            hideControls();
        }, 5000);
        return () => {
            clearTimeout(timer);
          };
    }

    const hideControls = () => {
        try {
            const header = document.querySelector('.play-header');
            header.style.display = 'none'
            const footer = document.querySelector('.play-footer');
            footer.style.display = 'none'
        } catch {

        }
    }

    const handleVideoEnd = () => {
        setIsPlaying(false);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleProgressBarClick = (event) => {
        const progressBar = event.target;
        const progress = (event.clientX - progressBar.offsetLeft) / progressBar.offsetWidth;
        videoRef.current.currentTime = videoRef.current.duration * progress;
    };

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className='play-container'>
            <div className='play-header'>
                <button className='play-button' onClick={() => navigate('/browse')}>
                    <i className='fa-solid fa-arrow-left-long'></i>
                </button>
                <button className='play-button'>
                    <i className='fa-regular fa-flag'></i>
                </button>
            </div>
            <video
                className='play-media'
                width='100%'
                autoPlay={true}
                playsInline
                onEnded={handleVideoEnd}
                onTimeUpdate={handleTimeUpdate}
                ref={videoRef}
                onClick={togglePlay}
                onMouseMove={showControls}
            >
                <source src={process.env.PUBLIC_URL + '/movies/century.mp4'} type='video/mp4' />
            </video>
            <div className='play-footer'>
                <div className='progress-bar' onClick={handleProgressBarClick}>
                    <div className='progress-bar-filled' style={{ width: `${(currentTime / videoRef.current?.duration) * 100}%` }}></div>
                </div>
                <div className='control-container'>
                    <div className='controls'>
                        <button className='play-control-button' onClick={togglePlay}>
                            {isPlaying ? <i className='fa-solid fa-pause'></i> : <i className='fa-solid fa-play'></i>}
                        </button>
                        <button className='play-control-button'>
                            <i className='fa-solid fa-clock-rotate-left'></i>
                        </button>
                        <button className='play-control-button'>
                            <i className='fa-solid fa-clock-rotate-left fa-flip-horizontal'></i>
                        </button>
                        <button className='play-control-button'>
                            <i className='fa-solid fa-volume-high'></i>
                        </button>
                    </div>
                    <h4>Avatar La voie de l'eau</h4>
                    <div className='controls'>
                        <button className='play-control-button'>
                            <i className='fa-regular fa-message fa-flip-horizontal'></i>
                        </button>
                        <button className='play-control-button'>
                            <i className='fa-solid fa-gauge-simple-high'></i>
                        </button>
                        <button className='play-control-button'>
                            <i className='fa-solid fa-expand'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Play.scss';

export default function Play() {
    let timer;
    const navigate = useNavigate();
    const { id } = useParams();
    const [media, setMedia] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isSoundOn, setIsSoundOn] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const isLoggedIn = !!localStorage.getItem('token');
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            const fetchPosts = async () => {
                const result = await axios.get('http://localhost:8888/browse');
                setMedia(result.data);
            };
            fetchPosts();
        }
    }, [navigate, id]);

    const mediaToSee = media.find((post) => post._id === id);


    const showControls = () => {
        const header = document.querySelector('.play-header');
        header.style.display = 'flex'
        const footer = document.querySelector('.play-footer');
        footer.style.display = 'flex'
        clearTimeout(timer);
        hideControls()
    }

    const hideControls = () => {
        timer = setTimeout(() => {
            try {
                const header = document.querySelector('.play-header');
                header.style.display = 'none'
                const footer = document.querySelector('.play-footer');
                footer.style.display = 'none'
            } catch {

            }
        }, 5000);
        return () => {

        };
    }

    const handleVideoEnd = () => {
        setIsPlaying(false);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleProgressBarClick = (event) => {
        try {
            const progressBar = event.target;
        const progress = (event.clientX - progressBar.offsetLeft) / progressBar.offsetWidth;
        videoRef.current.currentTime = videoRef.current.duration * progress;
        } catch {

        }
    };

    const handleMoveTime = (time) => {
        videoRef.current.currentTime += time
    }

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleSound = () => {
        setIsSoundOn(!isSoundOn);
        const videoElement = document.querySelector('.play-media');
        videoElement.muted = !isSoundOn;
    };

    const fullScreen = () => {
        if (document.fullscreenEnabled) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
        }
    }

    const exitVideo = () => {
        if (document.fullscreenEnabled) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        }
        videoRef.current.currentTime = 0;
        navigate('/browse');
    }

    return mediaToSee ? (
        <div className='play-container'>
            <div className='play-header' onMouseOver={showControls}>
                <button className='play-button' onClick={exitVideo}>
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
                <source src={process.env.PUBLIC_URL + '/movies/' + mediaToSee.Url} type='video/mp4' />
            </video>
            <div className='play-footer' onMouseOver={showControls}>
                <div className='progress-bar' onClick={handleProgressBarClick}>
                    <div className='progress-bar-filled' style={{ width: `${(currentTime / videoRef.current?.duration) * 100}%` }}></div>
                </div>
                <div className='control-container'>
                    <div className='controls'>
                        <button className='play-control-button' onClick={togglePlay}>
                            {isPlaying ? <i className='fa-solid fa-pause'></i> : <i className='fa-solid fa-play'></i>}
                        </button>
                        <button className='play-control-button' onClick={() => handleMoveTime(-10)}>
                            <i className='fa-solid fa-clock-rotate-left'></i>
                        </button>
                        <button className='play-control-button' onClick={() => handleMoveTime(10)}>
                            <i className='fa-solid fa-clock-rotate-left fa-flip-horizontal'></i>
                        </button>
                        <button className='play-control-button' onClick={toggleSound}>
                            {isSoundOn ? <i className='fa-solid fa-volume-mute'></i> : <i className='fa-solid fa-volume-high'></i>}
                        </button>
                    </div>
                    <h4>{mediaToSee.Name}</h4>
                    <div className='controls'>
                        <button className='play-control-button'>
                            <i className='fa-regular fa-message fa-flip-horizontal'></i>
                        </button>
                        <button className='play-control-button'>
                            <i className='fa-solid fa-gauge-simple-high'></i>
                        </button>
                        <button className='play-control-button' onClick={fullScreen}>
                            <i className='fa-solid fa-expand'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    :
    (
        <div>

        </div>
    )
}

import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Section.scss';
import { useNavigate } from 'react-router-dom';

export default function Section(props) {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const divRef = useRef(null);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  const showBigCard = (id) => {
    const bigCard = document.querySelector('#' + id);
    bigCard.style.display = 'flex';
  };

  const ShowFullCard = (id) => {
    props.setCardId(id);
    props.setShowFullCard(true);
  };

  const hideBigCard = (id) => {
    const bigCard = document.querySelector('#' + id);
    const allbigCard = document.querySelector('.big-card');
    bigCard.style.display = 'none';
    allbigCard.style.display = 'none';
  };

  const scrollLeft = (id) => {
    const div = divRef.current;
    const maxScrollLeft = div.scrollWidth - div.clientWidth;
    let scrollLeft = maxScrollLeft;
    const scrollStep = 10;

    const scrollLoop = setInterval(() => {
      scrollLeft -= scrollStep;
      div.scrollLeft = scrollLeft;

      if (scrollLeft <= 0) {
        clearInterval(scrollLoop);
      }
    }, 10);
  };

  const scrollRight = (id) => {
    const div = document.getElementById(id);
    const maxScrollLeft = div.scrollWidth - div.clientWidth;
    let scrollLeft = 0;
    const scrollStep = 10;

    const scrollLoop = setInterval(() => {
      scrollLeft += scrollStep;
      div.scrollLeft = scrollLeft;

      if (scrollLeft >= maxScrollLeft) {
        clearInterval(scrollLoop);
      }
    }, 10);
  };

  const updateList = async (list) => {
    const token = localStorage.getItem('token');
    console.log(list);
    try {
      const response = await axios.put(
        'http://localhost:8888/browse',
        { List: list },
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert('Liste mise à jour avec succès');
      }
    } catch (error) {
      console.error(error);
    }
  };

    return props.Genre2 ? (
        <div className='section'>
            <h3 className='title'>{props.Genre.replace(/\s+/g, '')}</h3>
            <div className='list' id={props.Genre} ref={divRef}>
                {Array.isArray(props.Media) && props.Media.map((media, index) => {
                    if (media.Genre.includes(props.Genre) && media.Genre.includes(props.Genre2)) {
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
                                            <button className='card-button second' onClick={(e) => updateList(["test"])}><i className="fa-solid fa-plus"></i></button>
                                            <button className='card-button second'><i className="fa-solid fa-thumbs-up"></i></button>
                                        </div>
                                        <div className='actions'>
                                            <button className='card-button second' onClick={() => ShowFullCard(media._id)}><i className="fa-solid fa-chevron-down"></i></button>
                                        </div>
                                    </div>
                                    <div className='infos'>
                                        <p className='recomend'>Recomandé à {Math.floor(Math.random() * 30) + 70}%</p>
                                        <p className='pegi'>{media.Pegi}+</p>
                                        {media.Genre[0] === 'Film' ? <p className='time'>{media.Time}</p> : media.Seasons === '1' ? <p className='episodenb'>{media.Season1Title.length} Épisodes</p> : <p className='seasons'>{media.Seasons} Saisons</p>}
                                        <p className='hd'>HD</p>
                                    </div>
                                    <div className='genre-container'>
                                        <p className='genre'>{media.Genre[1]}</p>
                                        {media.Genre[2] && (
                                            <>
                                                <i className="fa-solid fa-circle"></i>
                                                <p className='genre'>{media.Genre[2]}</p>
                                            </>
                                        )}
                                        {media.Genre[3] && (
                                            <>
                                                <i className="fa-solid fa-circle"></i>
                                                <p className='genre'>{media.Genre[3]}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                        );
                    }
                    return null;
                })}
                <button className='next-button' onClick={() => scrollRight(props.Genre.replace(/\s+/g, ''))}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
        : (
            <div className='section'>
                <h3 className='title'>{props.Genre}</h3>
                <div className='list' id={props.Genre.replace(/\s+/g, '')} ref={divRef}>
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
                                                <button className='card-button second' onClick={() => ShowFullCard(media._id)}><i className="fa-solid fa-chevron-down"></i></button>
                                            </div>
                                        </div>
                                        <div className='infos'>
                                            <p className='recomend'>Recomandé à {Math.floor(Math.random() * 30) + 70}%</p>
                                            <p className='pegi'>{media.Pegi}+</p>
                                            {media.Genre[0] === 'Film' ? <p className='time'>{media.Time}</p> : media.Seasons === '1' ? <p className='episodenb'>{media.Season1Title.length} Épisodes</p> : <p className='seasons'>{media.Seasons} Saisons</p>}
                                            <p className='hd'>HD</p>
                                        </div>
                                        <div className='genre-container'>
                                            <p className='genre'>{media.Genre[1]}</p>
                                            {media.Genre[2] && (
                                                <>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <p className='genre'>{media.Genre[2]}</p>
                                                </>
                                            )}
                                            {media.Genre[3] && (
                                                <>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <p className='genre'>{media.Genre[3]}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            );
                        }
                        return null;
                    })}
                    <button className='next-button'  onClick={() => scrollRight(props.Genre.replace(/\s+/g, ''))}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        );
}
import React from 'react'
import './Episode.scss'
import { useNavigate } from 'react-router-dom'

export default function Episode(props) {

  const navigate = useNavigate();

  return (
    <div className='episode' onClick={() => navigate('/play/' + props.Url)}>
      <h3>{props.EpisodeNb}</h3>
      <div className='image-button'>
        <button className='play-button-episode'><i className="fa-solid fa-play"></i></button>
        <img src={process.env.PUBLIC_URL + '/movies/' + props.Poster} alt='poster' />
      </div>
      <div className='infos-episode'>
        <div className='title-time'>
          <h5 className='episode-title'>{props.Media}</h5>
          <p className='episode-time'>21 min</p>
        </div>
        <p className='episode-synopsis'>Une évasion d'un laboratoire du gouvernement et la disparition d'un jeune garçon viennent perturber l'équilibre tranquille de la petite ville d'Hawkins dans l'Indiana.</p>
      </div>
    </div>
  )
}

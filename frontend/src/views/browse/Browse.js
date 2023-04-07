import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header-browse/HeaderBrowse';
import './Browse.scss'
import HeroBrowse from '../../components/hero-browse/HeroBrowse';
import Section from '../../components/section-browse/Section';
import FullCard from '../../components/full-card/FullCard';

const Browse = () => {
  const navigate = useNavigate();
  const [media, setMedia] = useState([]);

  const [showFullCard, setShowFullCard] = useState(false)
  const [cardId, setCardId] = useState('');

  const [main, setMain] = useState('');

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      try {
        const fetchPosts = async () => {
          const result = await axios.get('http://localhost:8888/browse');
          setMedia(result.data);
        };
        fetchPosts();
      } catch {

      }
    }
  }, [navigate]);


  return !media[0] ? (
    <h1 className='error-server'>Internal server error</h1>
  )
    :
    (
      <>
        <div className='browse-container'>
          <Header main={main} setMain={setMain} />
          <HeroBrowse />
          <div className='sections-container'>
            {(!main || main === 'main') && (
              <>
                <Section Media={media} Genre={"Nouveautés"} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Comédie"} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Thriller"} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Science fiction"} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Super-héros"} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Action"} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Drame"} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
              </>
            )}
            {(main === 'Film' || main === 'Série' || main === 'Nouveautés') && (
              <>
                <Section Media={media} Genre={"Science fiction"} Genre2={main} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Action"} Genre2={main} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Super-héros"} Genre2={main} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Thriller"} Genre2={main} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
                <Section Media={media} Genre={"Drame"} Genre2={main} showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} setCardId={setCardId} />
              </>
            )}
          </div>
        </div>
        <FullCard showFullCard={showFullCard} setShowFullCard={setShowFullCard} cardId={cardId} />
      </>
    )
};

export default Browse;

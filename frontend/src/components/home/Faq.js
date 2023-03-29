import React from 'react'

export default function Faq() {

    return (
        <div className='faq-container'>
            <h1>Foire aux questions</h1>
            <div className='toggle'>
                <div className='title'>
                    <h3>Netflix, qu'est-ce que c'est ?</h3>
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className='answer'>
                    <p>Netflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes sur des milliers d'appareils connectés à Internet.
                    Regardez tout ce que vous voulez, quand vous voulez, à un prix mensuel très attractif. Découvrez de nouveaux films et séries chaque semaine, il y en a pour tous les goûts !</p>
                </div>
            </div>
        </div>
    )
}

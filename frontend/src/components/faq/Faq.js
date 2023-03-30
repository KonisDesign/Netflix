import React from 'react'
import './Faq.scss'

export default function Faq() {

    const show = (e) => {

        const answer = e.target.parentNode.nextElementSibling;
        if (answer.style.display === 'none') {
            const answers = document.querySelectorAll('.answer');

        answers.forEach(answer => {
            answer.style.display = 'none';
        });
            answer.style.display = 'flex';
        } else {
            answer.style.display = 'none';
        }
    };

    return (
        <div className='faq-container'>
            <h1>Foire aux questions</h1>
            <div className='toggle'>
                <div className='title' onClick={(e) => show(e)}>
                    <h3>Netflix, qu'est-ce que c'est ?</h3>
                    <i className='fa-solid fa-plus'></i>
                </div>
                <div className='answer scale-in-ver-top'>
                    <h3>
                        Netflix est un service de streaming qui propose une vaste sélection
                        de séries, films, animes, documentaires et autres programmes sur des
                        milliers d'appareils connectés à Internet. Regardez tout ce que vous
                        voulez, quand vous voulez, à un prix mensuel très attractif.
                        Découvrez de nouveaux films et séries chaque semaine, il y en a pour
                        tous les goûts !
                    </h3>
                </div>
            </div>
            <div className='toggle'>
                <div className='title' onClick={(e) => show(e)}>
                    <h3>Combien coûte Netflix ?</h3>
                    <i className='fa-solid fa-plus'></i>
                </div>
                <div className='answer scale-in-ver-top'>
                    <h3>
                        Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les offres vont de 5,99€ à 17,99€ par mois. Pas de contrat ni de frais supplémentaires.
                    </h3>
                </div>
            </div>
            <div className='toggle'>
                <div className='title' onClick={(e) => show(e)}>
                    <h3>Qu'est-ce qui est différent dans une offre avec pub ?</h3>
                    <i className='fa-solid fa-plus'></i>
                </div>
                <div className='answer scale-in-ver-top'>
                    <h3>
                        Une offre avec pub vous permet de profiter de films et séries à un prix plus attractif. Vous pouvez regarder vos programmes préférés avec de courtes pauses pub (certaines restrictions sur l'emplacement et les appareils s'appliquent). Le téléchargement n'est pas pris en charge et quelques films et séries ne sont pas disponibles en raison de restrictions liées aux licences.                    </h3>
                </div>
            </div>
            <div className='toggle'>
                <div className='title' onClick={(e) => show(e)}>
                    <h3>Où puis-je regarder Netflix ?</h3>
                    <i className='fa-solid fa-plus'></i>
                </div>
                <div className='answer scale-in-ver-top'>
                    <h3>
                        Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.
                        <br /><br />Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.
                    </h3>
                </div>
            </div>
            <div className='toggle'>
                <div className='title' onClick={(e) => show(e)}>
                    <h3>Comment puis-je annuler mon offre ?</h3>
                    <i className='fa-solid fa-plus'></i>
                </div>
                <div className='answer scale-in-ver-top'>
                    <h3>
                        Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.
                    </h3>
                </div>
            </div>
            <div className='toggle'>
                <div className='title' onClick={(e) => show(e)}>
                    <h3>Que puis-je regarder sur Netflix ?</h3>
                    <i className='fa-solid fa-plus'></i>
                </div>
                <div className='answer scale-in-ver-top'>
                    <h3>
                        Netflix propose un vaste catalogue comprenant notamment des longs-métrages, des documentaires, des séries, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez.
                    </h3>
                </div>
            </div>
            <div className='toggle'>
                <div className='title' onClick={(e) => show(e)}>
                    <h3>Est-ce que Netflix est adapté aux enfants ?</h3>
                    <i className='fa-solid fa-plus'></i>
                </div>
                <div className='answer scale-in-ver-top'>
                    <h3>
                        Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.
                        <br /><br />Les profils Jeunesse comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.
                    </h3>
                </div>
            </div>
            <h4>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre<br />abonnement.</h4>
            <form className='subscribe-actions'>
            <input type='email' className='get-start-input' placeholder='Adresse e-mail' name='email' required />
            <label htmlFor="email" >Adresse e-mail</label>
            <button className='primary-button'>Commencer <i className="fa-solid fa-chevron-right"></i></button>
          </form>
        </div>
    );
}


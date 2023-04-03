import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import Footer from '../../components/footer-step/Footer';
import Header from '../../components/header-step/Header';
import './SignUp.scss'

export default function SignUp() {

  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const { state } = useLocation();

  const [formData, setFormData] = useState({
    Email: state.User,
    Password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch('http://localhost:8888/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setStep(3)
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return step === 1 ? (
    <div className='step-container'>
      <Header />
      <div className='infos-container'>
        <img src={process.env.PUBLIC_URL + "/assets/step-devices.png"} alt='step-devices' />
        <p>ÉTAPE <b>1</b> SUR <b>2</b></p>
        <h2>Complétez la configuration de votre compte.</h2>
        <h4>Netflix est personnalisé selon vos goûts. Créez un mot de passe pour regarder Netflix quand vous voulez, où vous voulez.</h4>
        <button className='primary-button' onClick={() => setStep(2)}>Suivant</button>
      </div>
      <Footer />
    </div>

  )
    : step === 2 ? (
      <div className='step-container'>
        <Header />
        <div className='infos-container left'>
          <p>ÉTAPE <b>1</b> SUR <b>2</b></p>
          <h2 className='left'>Créez un mot de passe pour activer votre abonnement</h2>
          <h4>Plus que quelques étapes et c'est fini !</h4>
          <h4>Plus rien à remplir.</h4>
          <form className='signup-form' onSubmit={handleSubmit}>
            <div className='contain'>
              <input className='signin-input' type="email" name='Email' value={formData.Email} onChange={handleInputChange} />
              <label htmlFor='Email'>Email:</label>
            </div>
            <div className='contain'>
              <input className='signin-input' type="password" name='Password' value={formData.Password} onChange={handleInputChange} />
              <label htmlFor='Password'>Password:</label>
            </div>
            <div className='check-container'>
              <input type="checkbox" name='keep' id='keep' value='keep' />
              <label htmlFor='keep'>Oui, envoyez-moi les offres spéciales de Netflix par e-mail.</label>
            </div>
            <button className='primary-button' type="submit">Suivant</button>
          </form>
        </div>
        <Footer />
      </div>
    ) : step === 3 ? (
      <div className='step-container'>
        <Header />
        <div className='infos-container'>
          <i className="fa-regular fa-circle-check"></i>
          <p>ÉTAPE <b>2</b> SUR <b>2</b></p>
          <h2>Choisissez votre forfait.</h2>
          <div className='advantage'>
            <i className="fa-solid fa-check"></i>
            <h4 className='left'>Sans engagement. Annulable à tout moment.</h4>
          </div>
          <div className='advantage'>
            <i className="fa-solid fa-check"></i>
            <h4 className='left'>Du divertissement à volonté pour un prix très attractif.</h4>
          </div>
          <div className='advantage'>
            <i className="fa-solid fa-check"></i>
            <h4 className='left'>Accès illimité sur tous vos appareils.</h4>
          </div>
          <button className='primary-button' onClick={() => setStep(4)}>Suivant</button>
        </div>
        <Footer />
      </div>
    ) : step === 4 ? (
      <div className='step-container'>
        <Header />
        <div className='infos-container large left'>
          <p>ÉTAPE <b>2</b> SUR <b>2</b></p>
          <h2>Sélectionnez le forfait qui vous convient</h2>
          <div className='advantage'>
            <i className="fa-solid fa-check"></i>
            <h4 className='left'>Sans engagement. Annulable à tout moment.</h4>
          </div>
          <div className='advantage'>
            <i className="fa-solid fa-check"></i>
            <h4 className='left'>Du divertissement à volonté pour un prix très attractif.</h4>
          </div>
          <div className='advantage'>
            <i className="fa-solid fa-check"></i>
            <h4 className='left'>Accès illimité sur tous vos appareils.</h4>
          </div>
          <div className='square-price'>
            <div className='square'>
              <h5>Premium</h5>
            </div>
          </div>
          <div className='options-list'>
            <h4>Abonnement mensuel</h4>
            <h4><b>Gratuit</b></h4>
          </div>
          <div className='options-list'>
            <h4>Qualité vidéo</h4>
            <h4><b>Optimale</b></h4>
          </div>
          <div className='options-list'>
            <h4>Résolution</h4>
            <h4><b>AK+HDR</b></h4>
          </div>
          <div className='options-list'>
            <h4>Netflix sur votre TV, ordinateur, smartphone et tablette</h4>
            <i className="fa-solid fa-check"></i>
          </div>
          <div className='options-list'>
            <h4>Téléchargements</h4>
            <i className="fa-solid fa-check"></i>
          </div>
          <div className='conditions'>
          <i className="fa-solid fa-lock"></i>
            <p>Si vous avez choisi une offre avec pub, quelques films et séries ne seront
              pas disponibles en raison de restrictions liées aux licences. Certaines restrictions sur
              l'emplacement et les appareils s'appliquent également. <a href='/'>En savoir plus</a>.</p>
          </div>
          <p>Si vous sélectionnez une offre avec pub, nous vous demanderons de fournir votre date de naissance
            pour personnaliser les publicités, ainsi qu'à d'autres fins conformes à la <a href='/'>Déclaration
              de confidentialité</a> de Netflix.</p>
          <p>La disponibilité de la HD (720p), de la Full HD (1080p), de l'Ultra HD (4K) et de la HDR dépend
            de votre connexion Internet et des capacités de l'appareil.
            Tous les contenus ne sont pas disponibles dans toutes les résolutions. Pour en savoir plus,
            veuillez consulter nos <a href='/'>Conditions d'utilisation</a>.</p>
          <p>Seules les personnes qui vivent avec vous peuvent utiliser votre compte. Regardez Netflix
            en simultané sur 4 appareils différents avec l'offre Premium, sur 2 appareils avec l'offre
            Standard, et sur 1 appareil avec l'offre Essentiel ou Essentiel avec pub.</p>
          <div className='center'>
            <button className='primary-button' onClick={() => setStep(5)}>Suivant</button>
          </div>
        </div>
        <Footer />
      </div>
    ) : step === 5 ? (
      <div className='step-container'>
        <Header />
        <div className='infos-container'>
          <i className="fa-regular fa-circle-check"></i>
          <h2>Configuration terminée.</h2>
          <h4>Vous pouvez maintenant profiter de Netflix pleinement</h4>
          <button className='primary-button' onClick={() => navigate('/')}>Terminer</button>
        </div>
        <Footer />
      </div>
    ) : (
      <div></div>
    )
};

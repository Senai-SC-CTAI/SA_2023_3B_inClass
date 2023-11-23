import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for web navigation
import './Home.css';
import logoImage from '../../assets/textInClass.png';
import listaIcon from '../../assets/lista-png-icon.png';
import calendarIcon from '../../assets/pngwing.com.png';
import verifiedIcon from '../../assets/verificado.png';
import perfilIcon from '../../assets/perfilpng.png';
import LogoutIcon from '@mui/icons-material/Logout';

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="logout">
          <a href="/">
            Sair
            <LogoutIcon fontSize="large" />
          </a>
        </div>
        <img src={logoImage} alt="Logo" className="logo" />

        <div className="buttonContainer">
          <Link to="/solicitation">
            <div className="button buttonMarginRight">
              <img src={listaIcon} alt="Icon" className="icones" />
              <p className="buttonText">Reserva de Salas</p>
            </div>
          </Link>
          <Link to="/calendar">
            <div className="button buttonMarginLeft">
              <img src={calendarIcon} alt="Icon" className="icones" />
              <p className="buttonText">Calendário Escolar</p>
            </div>
          </Link>
        </div>
        <div className="buttonContainer">
          <Link to="/reservation">
            <div className="button buttonMarginRight">
              <img src={verifiedIcon} alt="Icon" className="icones" />
              <p className="buttonText">Suas Reservas</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className="button buttonMarginLeft">
              <img src={perfilIcon} alt="Icon" className="icones" />
              <p className="buttonText">Dados Pessoais</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
};

export default Home;
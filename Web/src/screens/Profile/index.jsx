import React from 'react';
import perfilpng from '../../assets/perfilpng.png'; // Importe diretamente a imagem
import { Link } from 'react-router-dom'; // Assuming you're using React Router for web
import './Profile.css'
import setacinza from '../../assets/setacinza.png';

const Profile = () => {
  return (
    <>
      <div className="main">
        <div className="logout voltar">
          <a href="/home">
            <img src={setacinza} className="seta esq" alt="Seta Cinza"></img>
            Voltar
          </a>
        </div>
        <div className="container">
          <div className="title">Dados Pessoais</div>
          <div className="iconContainer">
            <img src={perfilpng} alt="profile icon" className="icon" />
          </div>

          <div className="section">
            <div className="sectionTitle">Informações do Usuário</div>
            <div className="infoContainer">
              <div className="infoLabel">Nome de Usuário</div>
              <div className="info">SeuNomeDeUsuario</div>
              <div className="infoLabel">CPF</div>
              <div className="info">123.456.789-00</div>
            </div>
          </div>

          <Link to="resetPassword">
            <button className="buttonProfile">
              <span className="buttonText">Redefinir Senha</span>
            </button>
          </Link>
          <Link to="changeClass">
            <button className="buttonProfile">
              <span className="buttonText">Alterar Matéria</span>
            </button>
          </Link>

          <div className="deleteAccountText">Deseja excluir sua conta?</div>
          <button className="deleteAccountButton">
            <span className="deleteAccountButtonText">Excluir Conta</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Profile;
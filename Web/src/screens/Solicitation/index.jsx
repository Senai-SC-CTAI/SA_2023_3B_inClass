import React, { useState } from 'react';
import axios from 'axios';
import setacinza from '../../assets/setacinza.png';
import './Solicitation.css';

const Solicitation = () => {
  const [sala, setSala] = useState('');
  const [professor, setProfessor] = useState('');
  const [horario, setHorario] = useState('');
  const [texto, setTexto] = useState('');

  const [sucessMessage, setSucessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    try {
      // Validar campos não nulos
      if (!sala || !professor || !horario || !texto) {
        setSucessMessage('');
        setErrorMessage('Campos não podem ser nulos!');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
        return;
      }

      let novaSala = {
        nome: sala,
        data_hora: horario,
        professor: professor,
        comentario: texto,
      };
      await axios.post('http://localhost:8091/salas', novaSala);
      setSala('');
      setHorario('');
      setProfessor('');
      setTexto('');
      setErrorMessage('');
      setSucessMessage('Sala solicitada com sucesso');
      setTimeout(() => {
        setSucessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Erro ao criar o cadastro:', error);
    }
  };

  return (
    <div className="container">
        <div className="logout voltar">
          <a href="/home">
            <img src={setacinza} className="seta esq" alt="Seta Cinza"></img>
            Voltar
          </a>
        </div>
      <div className="titleContainer">
        <h1 className="titulo">Solicitar Sala</h1>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Nome da Sala"
          className="input"
          value={sala}
          onChange={(e) => setSala(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Professor"
          className="input"
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Horario"
          className="input"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <textarea
          placeholder="Comentário"
          className="input textarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {sucessMessage && <p className="sucessMessage">{sucessMessage}</p>}
      <button className="loginButton" onClick={handleSubmit}>
        Solicitar
      </button>
    </div>
  );
};

export default Solicitation;

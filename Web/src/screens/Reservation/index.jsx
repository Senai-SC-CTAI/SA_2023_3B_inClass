import React, { useEffect, useState } from 'react';
import './Reservation.css';
import axios from 'axios';
import setacinza from '../../assets/setacinza.png';

const Aba = ({ sala, professor, horario, estado, texto }) => {
  const [expandida, setExpandida] = useState(estado === 'aberta');

  return (
    <div className={`abaContainer ${expandida ? 'expandida' : ''}`}>
      <div className="abaHeader" onClick={() => setExpandida(!expandida)}>
        <div className="abaHeaderText">{sala}</div>
        <div className="abaHeaderText">{professor}</div>
        <div className="abaHeaderText">{horario}</div>
        {expandida ? <div className="setinha">▲</div> : <div className="setinha">▼</div>}
      </div>
      {expandida && (
        <div className="textoContainer">
          <div className="texto">{texto}</div>
        </div>
      )}
    </div>
  );
};

const Reservation = () => {
  const [reservas, setReservas] = useState([]);

  const fetchReservas = async () => {
    try {
      const response = await axios.get('http://localhost:8091/salas');
      setReservas(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchReservas();
  }, []);


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
          <div className="titleContainer">
            <div className="titulo">Minhas Solicitações de Reservas</div>
          </div>
          {reservas.map((reserva, index) => (
            <Aba
              key={index}
              sala={reserva.nome}
              professor={reserva.professor}
              horario={reserva.data_hora}
              estado="fechada"
              texto={reserva.comentario}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Reservation;
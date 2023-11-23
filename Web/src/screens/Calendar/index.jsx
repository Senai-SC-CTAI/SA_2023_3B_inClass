import React from 'react';
import './Calendar.css';
import setacinza from '../../assets/setacinza.png';

const Calendar = () => {
  return (
    <>
      <div className="logout voltar">
        <a href="/home">
        <img src={setacinza} className="seta esq" alt="Seta Cinza"></img>
        Voltar
        </a>
      </div>
      <div className="main">
        <div className="container Calendar">
          <div className="title">Calendário Escolar</div>
          <div className="manha">
            <img src={setacinza} className="seta esq" alt="Seta Cinza"></img>
            <div className="subtitle">Manhã de Quinta-Feira</div>
            <img src={setacinza} className="seta" alt="Seta Cinza"></img>
          </div>
          <div className="calendar">

          </div>
        </div>
      </div>
    </>
  )
}

export default Calendar;
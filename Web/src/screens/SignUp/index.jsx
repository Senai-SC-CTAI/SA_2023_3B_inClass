import React, { useState, useEffect } from 'react';
import './SignUp.css'
import logoImage from '../../assets/textInClass.png';
import cadeadoImage from '../../assets/cadeado.png';
import emailImage from '../../assets/email.png';
import axios from 'axios'

const SignUp = () => {

  const [cadastro, setCadastro] = useState('');
  const [tipoInput, setTipoInput] = useState('');
  const [nomeInput, setNomeInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [CPFInput, setCPFInput] = useState('');

  const [sucessMessage, setSucessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchCadastro = async () => {
    try {
      const response = await axios.get('http://localhost:8091/usuario');
      setCadastro(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchCadastro();
  }, []);


  const handleSubmit = async () => {
    try {
      // Validar campos não nulos
      if 
      (!tipoInput || !senhaInput || !nomeInput || !emailInput || !CPFInput) 
      {
        setSucessMessage("")
        setErrorMessage("campos não podem ser nulos!")
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
        return;
      }

      let novoUsuario = {
        tipo: tipoInput,
        nome: nomeInput,
        senha: senhaInput,
        email: emailInput,
        cpf: CPFInput,
      }
      await axios.post('http://localhost:8091/usuario', novoUsuario);
      //  fetchCadastro();
      setEmailInput('');
      setSenhaInput('');
      setCPFInput('');
      setNomeInput('');
      setTipoInput('');
      console.log(cadastro);
      setErrorMessage("");
      setSucessMessage("usuário cadastrado com sucesso");
      setTimeout(() => {
        setSucessMessage("");
      }, 3000);
    } catch (error) {
      console.error('Erro ao criar o cadastro:', error);
    }
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <h1 className="title">Cadastro</h1>
          <img src={logoImage} className="logo" alt="Logo" />

          <div className="inputContainer">
            <img src={emailImage} className="smallLogo" alt="Lock" />
            <input placeholder="Nome de usuário"
              className="input"
              value={nomeInput}
              onChange={(e) => setNomeInput(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <img src={emailImage} className="smallLogo" alt="Lock" />
            <input placeholder="Tipo de usuário" className="input"
              value={tipoInput}
              onChange={(e) => setTipoInput(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <img src={emailImage} className="smallLogo" alt="Lock" />
            <input placeholder="Email" className="input"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <img src={cadeadoImage} className="smallLogo" alt="Email" />
            <input placeholder="CPF" type="text" className="input"
              value={CPFInput} 
              onChange={(e) => setCPFInput(e.target.value)} 
            />
          </div>

          <div className="inputContainer">
            <img src={cadeadoImage} className="smallLogo" alt="Email" />
            <input placeholder="Senha" type="password" className="input"
              value={senhaInput}  
              onChange={(e) => setSenhaInput(e.target.value)} 
            />
          </div>

          <div className="inputContainer">
            <img src={cadeadoImage} className="smallLogo" alt="Email" />
            <input placeholder="Repita a Senha" type="password" className="input"
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {sucessMessage && <div className="sucess-message">{sucessMessage}</div>}

          <button className="loginButton" onClick={handleSubmit}>
            Cadastrar
          </button>
          <p className="signupText">
            Já tem uma conta? <a href="/">Faça Login</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp;
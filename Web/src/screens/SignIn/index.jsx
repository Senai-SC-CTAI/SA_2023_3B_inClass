import React, {useState} from 'react';
import './SignIn.css'
import logoImage from '../../assets/textInClass.png';
import cadeadoImage from '../../assets/cadeado.png';
import emailImage from '../../assets/email.png';
import axios from 'axios'

const logar = async (email, senha) => {
  try {
    const response = await axios.post('http://localhost:8091/api/login', {
      email: email,
      senha: senha,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [, setIsAuthenticated] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await logar(email, senha);
      if (response == true) {
        window.location.href = "/home"
      } else if (!email || !senha) {
        setIsAuthenticated(false);
        setErrorMessage("campos não podem ser nulos")
        setTimeout(() => {
          setErrorMessage("");
        }, 4000);
        return;
      } else {
        setIsAuthenticated(false);
        setErrorMessage("email ou senha incorretos")
        setTimeout(() => {
          setErrorMessage("");
        }, 4000);
        return;
      }
    } catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="title">Login</h1>
        <img src={logoImage} className="logo" alt="Logo" />
        <div className="inputContainer">
          <img src={cadeadoImage} className="smallLogo" alt="Lock" />
          <input
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <img src={emailImage} className="smallLogo" alt="Email" />
          <input
            placeholder="Senha"
            type="password"
            className="input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        {errorMessage && <div className="error-message-login">{errorMessage}</div>}
        <button className="loginButton" onClick={handleLogin}>
            Entrar
        </button>
        <p className="signupText">
          Não possui login? <a href="signup">Cadastre-se</a>
        </p>
        <a href="/">
          <span>Voltar</span>
        </a>
      </div>
    </div>
  );
};

export default SignIn;

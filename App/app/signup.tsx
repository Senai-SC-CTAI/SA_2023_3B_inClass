import React from 'react';
import { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from "expo-router";
import axios from 'axios'

export default function App() {

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
      if (!tipoInput || !senhaInput || !nomeInput || !emailInput || !CPFInput) {
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
        CPF: CPFInput,
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
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text >
      <Image source={require('../assets/textInClass.png')} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Image source={require('../assets/email.png')} style={styles.smallLogo} />
        <TextInput
          placeholder="Nome de usuario"
          style={styles.input}
          value={nomeInput}
          onChangeText={(text) => setNomeInput(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/cadeado.png')} style={styles.smallLogo} />
        <TextInput
          placeholder="Tipo de usuario"
          secureTextEntry
          style={styles.input}
          value={tipoInput}
          onChangeText={(text) => setTipoInput(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/email.png')} style={styles.smallLogo} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={emailInput}
          onChangeText={(text) => setEmailInput(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/email.png')} style={styles.smallLogo} />
        <TextInput
          placeholder="CPF"
          style={styles.input}
          value={CPFInput}
          onChangeText={(text) => setCPFInput(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/cadeado.png')} style={styles.smallLogo} />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={senhaInput}
          onChangeText={(text) => setSenhaInput(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/cadeado.png')} style={styles.smallLogo} />
        <TextInput
          placeholder="Repita a senha"
          secureTextEntry
          style={styles.input}
        />
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      {sucessMessage && <Text style={styles.sucessMessage}>{sucessMessage}</Text>}

      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}><Text>Cadastrar</Text></Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>Já possui login? <Link href="signin"><Text>Login</Text></Link></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#00AEA4',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: -20,
    color: '#000',

  },
  logoContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  loginButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    color: '#fff',
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  smallLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  errorMessage: {
    color: '#FFF',
    fontWeight: "600",
    marginBottom: -22,
    fontSize: 15,
    textAlign: 'center',
    position: 'relative',
  },
  sucessMessage: {
    color: '#5cff79',
    fontWeight: "600",
    position: 'relative',
    bottom: 0,
    marginBottom: -22,
    fontSize: 15,
    textAlign: 'center',
  }
});
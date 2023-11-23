import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from "expo-router";
import Home from './home';
import axios from 'axios'

const logar = async (email: string, senha: string) => {
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

export default function App() {
  const [currentPage, setCurrentPage] = useState("signin");

  const navigateTo = (pageName: string) => {
    setCurrentPage(pageName);
  };

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [, setIsAuthenticated] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await logar(email, senha);
      if (response == true) {
        // ir para Home
        navigateTo("home")
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
    <View style={styles.container}>
      {currentPage === "signin" && (

        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Image source={require('../assets/textInClass.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
          <Image source={require('../assets/cadeado.png')} style={styles.smallLogo} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/email.png')} style={styles.smallLogo} />
          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
        </View>
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            <Text>Entrar</Text>
          </Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Não possui login? <Link href="signup"><Text>Cadastre-se</Text></Link></Text>
        <Link href="/"><Text>Voltar</Text></Link>
      </View>
        )}
        {currentPage === "home" &&(
          <Home />
        )}
    </View>
  );
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
});

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Login</Text >
      <Image source={require('../sa_2023/assets/textInClass.png')} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Image source={require('../sa_2023/assets/cadeado.png')} style={styles.smallLogo} />
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../sa_2023/assets/email.png')} style={styles.smallLogo} />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>Não possui login? Cadastre-se</Text>
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
});

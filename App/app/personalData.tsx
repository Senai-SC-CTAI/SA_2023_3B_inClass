import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from "expo-router";

export default function PersonalDataScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/perfilpng.png')} style={styles.icon} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações do Usuário</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Nome de Usuário</Text>
          <Text style={styles.info}>SeuNomeDeUsuario</Text>
          <Text style={styles.infoLabel}>CPF</Text>
          <Text style={styles.info}>123.456.789-00</Text>
        </View>
      </View>

      <Link href="resetPassword"><TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Redefinir Senha</Text>
      </TouchableOpacity></Link>
      <Link href="changeClass"><TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Alterar Matéria</Text>
      </TouchableOpacity></Link>

      <Text style={styles.deleteAccountText}>Deseja excluir sua conta?</Text>
      <TouchableOpacity style={styles.deleteAccountButton}>
        <Text style={styles.deleteAccountButtonText}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E1E1E1',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  iconContainer: {
    backgroundColor: '#00AEA4',
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  info: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: '#00AEA4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteAccountText: {
    fontSize: 16,
    color: 'black',
    marginTop: 20,
  },
  deleteAccountButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteAccountButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
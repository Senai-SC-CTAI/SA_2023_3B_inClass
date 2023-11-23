import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from "expo-router";

interface AbaProps {
  title: string;
  estado: 'fechada' | 'aberta';
  texto?: string;
}

const Aba: React.FC<AbaProps> = ({ title, estado, texto }) => {
  const [expandida, setExpandida] = useState(estado === 'aberta');

  return (
    <View style={styles.abaContainer}>
      <TouchableOpacity
        style={styles.abaHeader}
        onPress={() => setExpandida(!expandida)}
      >
        <Text style={styles.abaHeaderText}>{title}</Text>
        {expandida ? (
          <Text style={styles.setinha}>▲</Text>
        ) : (
          <Text style={styles.setinha}>▼</Text>
        )}
      </TouchableOpacity>
      {expandida && (
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>{texto}</Text>
        </View>
      )}
    </View>
  );
};

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titulo}>Dados pessoais</Text>
        <Image style={styles.perfil} source={require('../assets/perfilpng.png')}></Image>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.subtitle}>Trocar de turma</Text>
        <View style={styles.extraContainer}>
          <Aba
            title="Matéria"
            estado="fechada"
            texto="Desenvolvimento de Sistemas" />
          <Link href="personalData"><TouchableOpacity style={styles.confirmButton}><Text style={styles.buttonText}>Confirmar</Text></TouchableOpacity></Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  abaContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  abaHeader: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#00AEA4',
  },
  abaHeaderText: {
    color: '#ffffff',
    fontSize: 16,
  },
  setinha: {
    fontSize: 24,
    color: '#ffffff',
  },
  textoContainer: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  texto: {
    color: '#333333',
    fontSize: 14,
  },
  confirmButton: {
    width: 120,
    height: 30,
    backgroundColor: '#00AEA4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 10,
    boxShadow: 100,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  perfil: {
    width: 100,
    height: 100,
  },
  secondContainer: {
    width: 500,
    height: 350,
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
  },
  subtitle: {
    fontSize: 25,
    color: 'gray',
    marginBottom: 20,
  },
  extraContainer: {
    alignItems: 'center',
  }
});

export default App;
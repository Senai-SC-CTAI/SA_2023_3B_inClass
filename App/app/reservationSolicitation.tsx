import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

interface Sala {
  sala: string;
  professor: string;
  horario: string;
  texto: string;
}

const App = () => {
  const [sala, setSala] = useState('');
  const [professor, setProfessor] = useState('');
  const [horario, setHorario] = useState('');
  const [texto, setTexto] = useState('');

  const [sucessMessage, setSucessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    try {
      // Validar campos não nulos
      if (!sala || !professor || !horario || !texto) {
        setSucessMessage("")
        setErrorMessage("campos não podem ser nulos!")
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
        return;
      }

      let novaSala = {
        nome: sala,
        data_hora: horario,
        professor: professor,
        comentario: texto,
      }
      await axios.post('http://localhost:8091/salas', novaSala);
      //  fetchCadastro();
      setSala('');
      setHorario('');
      setProfessor('');
      setTexto('');
      setErrorMessage("");
      setSucessMessage("sala solicitada com sucesso");
      setTimeout(() => {
        setSucessMessage("");
      }, 3000);
    } catch (error) {
      console.error('Erro ao criar o cadastro:', error);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titulo}>Solicitar Sala</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nome da Sala"
          style={styles.input}
          value={sala}
          onChangeText={(text) => setSala(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Professor"
          style={styles.input}
          value={professor}
          onChangeText={(text) => setProfessor(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Horario"
          style={styles.input}
          value={horario}
          onChangeText={(text) => setHorario(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Comentário"
          style={[styles.input, { paddingVertical: 50 }]}
          value={texto}
          onChangeText={(text) => setTexto(text)}
        />
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      {sucessMessage && <Text style={styles.sucessMessage}>{sucessMessage}</Text>}
      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}><Text>Solicitar</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
  },
  abaContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  abaHeader: {
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
  errorMessage: {
    color: 'black',
    fontWeight: "600",
    marginBottom: -22,
    fontSize: 15,
    textAlign: 'center',
    position: 'relative',
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
  },buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  sucessMessage: {
    color: '#035719',
    fontWeight: "600",
    position: 'relative',
    bottom: 0,
    marginBottom: -22,
    fontSize: 15,
    textAlign: 'center',
  }
});

export default App;
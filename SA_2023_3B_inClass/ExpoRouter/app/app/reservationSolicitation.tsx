import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AbaProps {
  sala: string;
  professor: string;
  horario: string;
  estado: 'fechada' | 'aberta';
  texto?: string;
}

const Aba: React.FC<AbaProps> = ({ sala, professor, horario, estado, texto }) => {
  const [expandida, setExpandida] = useState(estado === 'aberta');

  return (
    <View style={styles.abaContainer}>
      <TouchableOpacity
        style={styles.abaHeader}
        onPress={() => setExpandida(!expandida)}
      >
        <Text style={styles.abaHeaderText}>{sala}</Text>
        <Text style={styles.abaHeaderText}>{professor}</Text>
        <Text style={styles.abaHeaderText}>{horario}</Text>
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
        <Text style={styles.titulo}>Solicitações de Reservas</Text>
      </View>
      <Aba sala="G23" professor="Bruno Bandeira" horario="07h40" estado="fechada" />
      <Aba
        sala="F25"
        professor="Charles Pereira"
        horario="07h40"
        estado="aberta"
        texto="Lorem ipsum dolor sit amet"
      />
      <Aba sala="Maker A" professor="Tairine" horario="07h40" estado="fechada" />
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
});

export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/textInClass.png')} style={styles.image} />
      <Text style={styles.title}>Agende e veja os horários de sua sala, quadra ou laboratório.</Text>
      <TouchableOpacity style={styles.buttonStart}>
        <Text style={styles.buttonText}><Link href="signup"><Text>COMEÇAR</Text></Link></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonTextTransparent}><Link href="signin"><Text>Login</Text></Link></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151D1C',
  },
  image: {
    width: 250,
    height: 100,
    marginBottom: 40,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 70,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonStart: {
    backgroundColor: '#00AEA4',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonLogin: {
    paddingVertical: 10,
  },
  buttonTextTransparent: {
    color: '#00AEA4',
    fontSize: 25,
    textAlign: 'center',
  },
});
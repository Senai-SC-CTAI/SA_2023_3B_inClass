import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/textInClass.png')} style={styles.logo}></Image>
      </View>
      <View style={styles.buttonContainer} >
        <Link href="reservationSolicitation"><TouchableOpacity style={[styles.button, styles.buttonMarginRight]}>
          <Image source={require('../assets/lista-png-icon.png')} style={styles.icones}></Image>
          <Text style={styles.buttonText}>Reserva de Salas</Text>
        </TouchableOpacity></Link>
        <Link href="calendar"><TouchableOpacity style={[styles.button, styles.buttonMarginLeft]}>
          <Image source={require('../assets/pngwing.com.png')} style={styles.icones}></Image>
          <Text style={styles.buttonText}>Calendário Escolar</Text>
        </TouchableOpacity></Link>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="myReservations"><TouchableOpacity style={[styles.button, styles.buttonMarginRight]}>
          <Image source={require('../assets/verificado.png')} style={styles.icones}></Image>
          <Text style={styles.buttonText}>Suas Reservas</Text>
        </TouchableOpacity></Link>
        <Link href="personalData"><TouchableOpacity style={[styles.button, styles.buttonMarginLeft]}>
          <Image source={require('../assets/perfilpng.png')} style={styles.icones}></Image>
          <Text style={styles.buttonText}>Dados Pessoais</Text>
        </TouchableOpacity></Link>
    </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height: 100,
    marginBottom: 20,
  },
  icones: {
    width: 75,
    height: 80,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    marginVertical: 5,
    marginHorizontal: 60
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: '#00AEA4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonMarginRight: {
    marginRight: 20,
  },
  buttonMarginLeft: {
    marginLeft: 20,
  },
});
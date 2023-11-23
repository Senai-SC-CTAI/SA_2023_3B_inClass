import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendário Escolar</Text>
      <View style={styles.manha}>
        <Image style={styles.flip} source={require('../assets/setacinza.png')}></Image>
        <Text style={styles.subtitle}>Manhã de Quinta-Feira</Text>
        <Image source={require('../assets/setacinza.png')} style={styles.seta}></Image>
      </View>
      <View style={styles.calendar}>
        <View style={styles.column}>
          <View style={[styles.square, styles.black]}><Text style={[styles.squareText, styles.white]}>Salas</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>D22</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>E11</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>E12</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>E13</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>F11</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>F12</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>F13</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>F21</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>F25</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>G12</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>G22</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Maker A</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Maker B</Text></View>
        </View>
        <View style={styles.column}>
          <View style={[styles.square, styles.black]}><Text style={[styles.squareText, styles.white]}>KIT</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Lab</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Superação</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Saber</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Saber</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Sucesso</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Note 02</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Sinergia</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Lab</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Lab</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Note 04</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Sentimento</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Sinergia</Text></View>
          <View style={[styles.square, styles.blue]}><Text style={styles.squareText}>Superação</Text></View>
        </View>
        <View style={styles.column}>
          <View style={[styles.square, styles.black]}><Text style={[styles.squareText, styles.white]}>Antes do Intervalo</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>3D Aline</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1A Marcus</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1B Felipe</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1C Luciano</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1D Day</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>2D Lucas</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>3A Anna Júlia</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>2B Charles</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>3B Jackson</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>Livre</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>2A Marga</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>2C Wagner</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>3C Tai</Text></View>
        </View>
        <View style={styles.column}>
          <View style={[styles.square, styles.black]}><Text style={[styles.squareText, styles.white]}>Depois do Intervalo</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>3D Wagner</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1A Lucas</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1B Day</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1C Marcus</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1D Aline</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>3A Tai</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>3C Anna Júlia</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>2A Charles</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>3B Bruno</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>2D Luciano</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>2B Marga</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>2C Felipe</Text></View>
          <View style={styles.square}><Text style={styles.squareText}>1C Marcus</Text></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    fontSize: 25,
  },
  manha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  seta: {
    width: 30,
    height: 30,
  },
  flip: {
    width: 30,
    height: 30,
    transform: [{ scaleX: -1 }]
  },
  calendar: {
    width: 300,
    height: '80%',
    border: '1px solid black',
    flexDirection: 'row',
  },
  square: {
    border: '1px solid black',
    width: '100%',
    height: '7.14%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  column: {
    width: '25%',
    height: '100%',
    flexDirection: 'column',
  },
  squareText: {
    fontSize: 10,
  },
  black: {
    backgroundColor: 'black',
    color: '#fff'
  },
  white: {
    color: 'white',
  },
  blue: {
    backgroundColor: '#00AEA4'
  }
});

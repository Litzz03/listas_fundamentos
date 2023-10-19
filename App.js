import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecario}>
        <Text style={styles.titulo}>LISTAS</Text>
      </View>
      <View style={[styles.listaOrigem, {backgroundColor:"#FFA4A4"}]}><Text style={[styles.textoPadrao, {color:"#C62222"}]}>Animais</Text></View>
      <View style={[styles.listaOrigem, {backgroundColor:"#EDA4FF"}]}><Text style={[styles.textoPadrao, {color:"#7422C6"}]}>Carros</Text></View>
      <View style={[styles.listaOrigem, {backgroundColor:"#A4D4FF"}]}><Text style={[styles.textoPadrao, {color:"#2277C6"}]}>Peixes</Text></View>
      <View style={[styles.listaOrigem, {backgroundColor:"#A4FFC3"}]}><Text style={[styles.textoPadrao, {color:"#22C646"}]}>Times</Text></View>
      <View style={[styles.listaOrigem, {backgroundColor:"#D1D6D3"}]}><Text style={[styles.textoPadrao, {color:"#434A44"}]}>Filmes</Text></View>
      <View style={[styles.listaOrigem, {backgroundColor:"#E8EFBD"}]}><Text style={[styles.textoPadrao, {color:"#747D10"}]}>Linguagens</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  cabecario:{
    backgroundColor: "#2A9F91",
    height: 87,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  titulo:{
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10  
  },
  listaOrigem:{
   height: 107,
   width:408,
   justifyContent: 'center',
   marginTop: 15,
   alignItems: 'center',
  },
  textoPadrao:{
   fontSize: 25,
   fontWeight: 'bold',
  }
});
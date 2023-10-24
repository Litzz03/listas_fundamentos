import { StyleSheet, Text, View } from 'react-native';
import { BoxComponente } from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecario}>
        <Text style={styles.titulo}>LISTAS</Text>
      </View>

        <BoxComponente corFundo={"#FFA4A4"} corTexto= {"#C62222"} texto={"Animais"}/>
        <BoxComponente corFundo={"#EDA4FF"} corTexto= {"#7422C6"} texto={"Carros"}/>
        <BoxComponente corFundo={"#A4D4FF"} corTexto= {"#2277C6"} texto={"Peixes"}/>
        <BoxComponente corFundo={"#A4FFC3"} corTexto= {"#22C646"} texto={"Times"}/>
        <BoxComponente corFundo={"#D1D6D3"} corTexto= {"#434A44"} texto={"Filmes"}/>
        <BoxComponente corFundo={"#E8EFBD"} corTexto= {"#747D10"} texto={"Linguagens"}/>
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
  }
});
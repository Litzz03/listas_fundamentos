import { Text, View } from "react-native";
import { styles } from "./styes";

export function BoxComponente(props){

    return(
        <View style={[styles.listaOrigem, {backgroundColor: props.corFundo}]}>
            <Text style={[styles.textoPadrao, {color: props.corTexto}]}>{props.texto}</Text>
        </View>
    )
}
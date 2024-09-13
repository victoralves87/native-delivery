import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./restaurante-style.js";

const Restaurante = (props) => {
  return (
    <View style={styles.restaurante}>
      <Image source={props.logotipo} style={styles.logo} />
      <View style={styles.texto}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.endereco}>{props.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={props.icone} style={styles.favorito} />
      </TouchableOpacity>
    </View>
  );
};

export default Restaurante;

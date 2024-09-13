import { FlatList, Image, Text, View } from "react-native";
import { restaurantes } from "../../constants/dados.js";
import Restaurante from "../../components/restaurantes/Restaurante.jsx";
import icons from "../../constants/icons.js";
import { styles } from "./favorito-style.js";

function Favorito() {
    return <View style={styles.container}>
        <FlatList data={restaurantes}
            keyExtractor={(restaurante) => restaurante.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Restaurante nome={item.nome}
                    endereco={item.endereco}
                    logotipo={item.logotipo}
                    icone={icons.remove} />
            }}

            contentContainerStyle={styles.containerList}

            ListEmptyComponent={() => {
                return <View style={styles.empty}>
                    <Image source={icons.empty} />
                    <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
                </View>
            }}
        />
    </View>
}

export default Favorito;
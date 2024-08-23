import {Image, ScrollView, Text, View} from "react-native"
import { styles } from "./categorias-styles"


const Categorias = (props) => {
  return <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {
        props.dados.map((categoria, index) =>{
            return <View key={index} style={styles.catIcone}>
                <Image style={styles.icone} source={categoria.icone}/>
                    <Text style={styles.catTexto} >{categoria.descricao}</Text>
                </View>
        })
    }
    </ScrollView>
        
  </View>
}


export default Categorias

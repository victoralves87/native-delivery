import { Image, View, Text, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./home-style";
import icons from "../../constants/icons.js";
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import Categorias from "../../components/categorias/Categorias.jsx";
import { categorias, banners, restaurantes } from "../../constants/dados.js";
import Banner from "../../components/banner/Banner.jsx";
import Restaurante from "../../components/restaurantes/Restaurante.jsx";

const Home = () => {
  const [busca, setBusca] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icons.logo} style={styles.logo} />
        <Image source={icons.cart} style={styles.cart} />
      </View>

      <View style={styles.busca}>
        <TextBox
          placeholder="O que vamos pedir hoje?"
          onChangeText={(texto) => setBusca(texto)} // Corrigido aqui
          value={busca}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

      <Categorias dados={categorias} />
      
      <Banner dados={banners}/>

      {
        restaurantes.map((restaurante,index) => {
            return <View key={index}>
                <Restaurante logotipo={restaurante.logotipo}
                  nome={restaurante.nome} endereco={restaurante.endereco} 
                  icone={icons.favoritoFull}/>
            </View>
        })
      }
      </ScrollView>

    </SafeAreaView>
  );
};

export default Home;

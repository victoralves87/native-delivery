import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native"
import { styles } from "./banner-style"


const Banner = (props) => {
  return <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {
        props.dados.map((banner, index) =>{
            return <View key={index} style={styles.banner}>
                <TouchableOpacity>
                    <Image style={styles.icone} source={banner.icone}/>
                </TouchableOpacity>    
                </View>
        })
    }
    </ScrollView>
        
  </View>
}


export default Banner

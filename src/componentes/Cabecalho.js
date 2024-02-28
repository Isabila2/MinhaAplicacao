import { Text, View, Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      {/* Texto de Boas-Vindas */}
      <Text style={styles.textCabecalho}>Welcome to my WEBSITE!</Text>

      {/* View para a imagem */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* Emoji*/}
        <Image
          source={require("../assets/images/oculoss.png")}
          style={styles.emoji}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

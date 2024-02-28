import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Corpo() {
  pressLike = () => {
    alert("Bom saber que você gosta de flores ;D");
  };

  pressDislike = () => {
    alert("Que pena... flores são tão legais...");
  };
  return (
    <View style={[styles.containerCorpo, { marginTop: 10 }]}>
      {/* Texto para fazer login */}
      <Text style={[styles.textCorpo, { marginTop: 40 }]}>
        Ainda não é um membro?
        <Text style={styles.textCorpoo}> Faça o seu login!</Text>
      </Text>

      {/* Botão de Fazer Login */}
      <Button onPress={pressButton} title="Faça login" color="black" />

      <View style={styles.espaco}>
        {/* Texto para fazer login */}
        <Text style={[styles.textPesquisa, { marginTop: 35 }]}>
          Gosta de flores?
        </Text>
        <Text style={styles.textPesquisaa}>Participe da nossa pesquisa!!</Text>
        <View style={styles.likes}>
          {/* Like e dislike*/}
          <TouchableOpacity onPress={pressLike}>
            <Image
              source={require("../assets/images/like.png")}
              style={styles.like}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.textPesquisaaa}>Amo flores!</Text>
          <TouchableOpacity onPress={pressDislike}>
            <Image
              source={require("../assets/images/dislike.png")}
              style={styles.like}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.textPesquisaaa}>Não curto muito...</Text>
        </View>
      </View>
    </View>
  );
}

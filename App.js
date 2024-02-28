import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";

{
  /* Chamando Cabeçalho */
}
import Cabecalho from "./src/componentes/Cabecalho";

{
  /* Chamando Corpo */
}
import Corpo from "./src/componentes/Corpo";

{
  /* Chamando Rodapé */
}
import Rodape from "./src/componentes/Rodape";

{
  /* Chamando Styles */
}
import { styles } from "./src/styles/StyleSheet";

export default function App() {
  pressButton = () => {
    alert("O botão não funciona ainda... Faça o seu login outro dia!");
  };

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground
        source={require("./src/assets/images/fundo.png")}
        style={styles.img}
      >
        {/* Main View */}
        <View style={styles.secondaryContainer}>
          {/* Cabeçalho */}
          <Cabecalho />

          {/* Corpo */}
          <Corpo />

          {/* Rodapé */}
          <Rodape />
        </View>
      </ImageBackground>
    </View>
  );
}

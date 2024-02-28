import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Rodape() {
  return (
    <View style={styles.containerRodape}>
      <View style={styles.rodape}>
        <Text style={[styles.text, { marginTop: 40, fontSize: 10 }]}>
          Site feito por: Isabella Texeira dos Santos -
          <Text style={styles.text}> SESI Nova Odessa - CE 436</Text>
        </Text>
      </View>
    </View>
  );
}

import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  Pressable,
} from "react-native";

import ButtonMenu from "../components/ButtonMenu";
import ButtonBottom from "../components/ButtonBottom";

//Função para abrir o WhatsApp, const numero serve para colocar o número de telefone que você deseja conectar ao URL.
export default function Home({ navigation }) {
  const abrirWhatsApp = () => {
    const numero = "557132878001"; // coloca seu número
    const url = `https://wa.me/${numero}`;
    Linking.openURL(url);
  };

  function handleLinkPress() {
    alert("Link clicado. Em Construção...");
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/SenaiLogo.png")} style={styles.logo} />
      <View style={styles.actions}>
        <Text style={styles.titulo}>Desenvolvimento de sistemas</Text>

        <View style={styles.buttonRow}>
          <ButtonMenu title="Suporte" onPress={abrirWhatsApp} />
          <ButtonMenu title="Calendário" onPress={() => navigation.navigate("Calendario")} />


          <ButtonMenu title="Informações" onPress={() => navigation.navigate("Info")} />
        </View>
      </View>
      <View style={styles.buttonBottomRow}>
        <ButtonBottom
          onPress={() => navigation.navigate("Home")}
        />

        
         

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f1f1f",
  },
  titulo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    backgroundColor: "#0E4194",
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
  },
  texto: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
  link: {
    color: "#00ff40",
    fontSize: 18,
  },
  logo: {
    width: 300,
    height: 50,
    marginBottom: 100,
  },
  buttonRow: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#0E4194",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 12,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonBottom: {
    backgroundColor: "#0E4194",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 100,
  },
  buttonBottomRow: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});

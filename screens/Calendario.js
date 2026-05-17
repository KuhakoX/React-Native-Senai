import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  TextInputBase,
} from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";

import ButtonBottom from "../components/ButtonBottom";
import Footer from "../components/Footer";
import CalendarioComp from "../components/CalendarioComp";


//Função para abrir o WhatsApp, const numero serve para colocar o número de telefone que você deseja conectar ao URL.
export default function Calendario({ navigation }) {
  const abrirWhatsApp = () => {
    const numero = "557132878001"; // coloca seu número
    const url = `https://wa.me/${numero}`; // URL para abrir o WhatsApp
    Linking.openURL(url);
  };

  // Função padrão para lidar com cliques em links, atualmente exibe um alerta indicando que a funcionalidade está em construção.
  function handleLinkPress() {
    alert("Link clicado. Em Construção...");
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/SenaiLogo.png")} style={styles.logo} />
      <View style={styles.actions}>
        <Text style={styles.titulo}>Calendario</Text>
        <CalendarioComp />
      </View>
      <Footer />

       <ButtonBottom
                onPress={() => navigation.navigate("Home")}
              />
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
  },
  texto: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  link: {
    color: "#00ff40",
    fontSize: 18,
    textAlign: "center",
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    margin: 6,
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
  rodape: {
    top: 150,
    bottom: 1,
    backgroundColor: "#0E4194",
    width: "100%",
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 16,
  },
});

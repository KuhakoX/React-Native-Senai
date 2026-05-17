import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  Pressable,
} from "react-native";

import * as WebBrowser from "expo-web-browser";

import ButtonBottom from "../components/ButtonBottom";
import Footer from "../components/Footer";

//Função para abrir o WhatsApp, const numero serve para colocar o número de telefone que você deseja conectar ao URL.
export default function Info({ navigation }) {
  const abrirWhatsApp = () => {
    const numero = "557132878001"; // coloca seu número
    const url = `https://wa.me/${numero}`;
    Linking.openURL(url);
  };

  function handleLinkPress() {
    alert("Link clicado. Em Construção...");
  }

  async function portalLink() {
    await WebBrowser.openBrowserAsync("https://senaiweb6.fieb.org.br/framehtml/web/app/edu/PortalEducacional/login/");
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/SenaiLogo.png")} style={styles.logo} />
      <View style={styles.actions}>
        <Text style={styles.titulo}>Informações</Text>
        <Text style={styles.texto}>
          {
            "Endereço: Praça Barão do Rio Branco, 55 - Centro, Alagoinhas - BA, 48005-135"
          }
        </Text>

        <Text style={styles.texto}>
          {"Horário de funcionamento: \n Aberto 07:30 · Fecha 22:00"}
        </Text>

        <Pressable style={styles.button} onPress={portalLink}>
          <Text style={styles.buttonText}>Portal</Text>
        </Pressable>
        <Footer />
      </View>
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
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
  },
  texto: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
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

import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  Pressable,
} from "react-native";

//Função para abrir o WhatsApp, const numero serve para colocar o número de telefone que você deseja conectar ao URL.
export default function Info({ navigation }) {
  const abrirWhatsApp = () => {
    const numero = "5575998723938"; // coloca seu número
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
        <Text style={styles.titulo}>Informações</Text>
        <Text style={styles.texto}>
          Eu queria lé ajudar, Cabra safado.
          mas você falou: "Volta pra sua rede, baiano"
          </Text>
       </View>
      <View style={styles.buttonBottomRow}>
        <Pressable
          style={styles.buttonBottom}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>

        <Pressable
          style={styles.buttonBottom}
          onPress={() => alert("Botão Menu clicado. Em Construção...")}
        >
          <Text style={styles.buttonText}>Menu</Text>
        </Pressable>
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

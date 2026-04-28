import { Text, View, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const abrirWhatsApp = () => {
    const numero = '5575998723938'; // coloca seu número
    const url = `https://wa.me/${numero}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/SenaiLogo.png')} style={styles.logo} />
      <Text style={styles.titulo}>Caio Campos Mendes</Text>

      <Text style={styles.texto}>
        Linguagem favorita: C
      </Text>

      <TouchableOpacity onPress={abrirWhatsApp}>
        <Text style={styles.link}>Falar no WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1f1f',
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  link: {
    color: '#00ff40',
    fontSize: 18,
  },
  logo: {
    width: 300,
    height: 50,
    marginBottom: 20,
  }
});
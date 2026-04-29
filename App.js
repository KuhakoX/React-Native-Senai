import { Text, View, StyleSheet, Linking, TouchableOpacity, Image, LogBox } from 'react-native';

export default function App() {
  const abrirWhatsApp = () => {
    const numero = '5575998723938'; // coloca seu número
    const url = `https://wa.me/${numero}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/SenaiLogo.png')} style={styles.logo} />
      <Text style={styles.titulo}>Desenvolvimento de sistemas</Text>
      
      <Text style={styles.titulo}>Caio Campos Mendes {"\n"} Telefone: (75) 99872-3938</Text>

      <Text style={styles.texto}>
        Linguagem favorita: JavaScript (Mentira)
      </Text>

      <TouchableOpacity onPress={abrirWhatsApp}>
        <Text style={styles.link}>Falar no WhatsApp</Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>Creditos Reservados © Senai 2026</Text>
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
    marginBottom: 30,
    textAlign: 'center',
    backgroundColor: '#0E4194',
    padding: 10,
    borderRadius: 20,
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
    marginBottom: 100,
  },
  rodape: {
    top: 150,
    bottom: 1,
    backgroundColor: '#0E4194',
    width: '100%',
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 16,
  }
});
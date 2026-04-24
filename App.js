import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function App() {
  const abrirWhatsApp = () => {
    const numero = '5575998723938'; // coloca seu número
    const url = `https://wa.me/${numero}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    marginBottom: 20,
  },
  link: {
    color: 'green',
    fontSize: 18,
  },
});
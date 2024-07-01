// NossaHistoria.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Footer from '../components/Footer';

export default function NossaHistoria({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.TItulo5XL}>Nossa Historia</Text>
      <Text style={styles.textoBase}>
        Muitos de nosso avós não tiveram infância, educação e nem mesmo a chance de sonhar com um futuro além da sombra da perseguição.{"\n\n"}

        Suas vidas foram marcadas pela dor da perda precoce, pela luta diária pela sobrevivência e pela amarga realidade de testemunhar o ódio destilado por aqueles que os cercavam.{"\n\n"}

        Em vez de brincadeiras inocentes e aprendizado em salas de aula, enfrentaram o terror dos pogroms, a brutalidade dos guetos e a incerteza constante sobre o destino de suas famílias.{"\n\n"}

        Essas são as suas histórias.{"\n"}
        Suas memorias.{"\n"}
        Seus ensinamentos.{"\n"}
      </Text>
      <Footer onPress={() => navigation.navigate('Caminhos')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  TItulo5XL: {
    color: "white",
    marginLeft:30,
    fontSize: 48,
    marginTop:40,
    marginBottom: 20, // Adds 20px margin at the bottom
    textAlign: 'left', // Aligns text to the left
  },
  textoBase: {
    marginLeft:30,
    marginRight:30,
    color: "white",
    fontSize: 16, // Sets font size to 16px
  },
});


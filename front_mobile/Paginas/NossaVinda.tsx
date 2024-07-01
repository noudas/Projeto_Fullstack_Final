// NossaVinda.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Footer from '../components/Footer';

export default function NossaVinda({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.TItulo5XL}>Nossa Vinda</Text>
      <Text style={styles.textoBase}>
        Em tempos e tempos, dias e dias, éramos caçados por sermos diferentes, não na aparência, mas pelos costumes ou identidade.{"\n\n"}
        Desde os recantos mais remotos da história, nossas narrativas foram marcadas por uma interminável jornada em busca de aceitação e pertencimento.{"\n\n"}

        Dos tempos antigos em que peregrinamos pelas terras de nossos antepassados, enfrentamos a hostilidade e a intolerância que nos negavam o direito à vida e  dignidade.{"\n\n"}

        Em cada capítulo de nossa história, carregamos o fardo de sermos considerados estranhos, estrangeiros em nossa própria casa.{"\n\n"}

        Estas são as nossas histórias em um período de histórias.{"\n\n"}
        Dentro de uma época mais densa de nossas vidas.{"\n\n"}
      </Text>
      <Footer onPress={() => navigation.navigate('NossaVindaYoutube')} />
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


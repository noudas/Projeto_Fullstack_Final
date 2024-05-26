// NossaVinda.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PagTextPadrao from '../components/Bases/PagTextPadrao';
import Footer from '../components/Footer';

export default function NossaVinda({ navigation }) {
  return (
    <View style={styles.container}>

      <PagTextPadrao
        title="Nossa Vinda"
        description="Em tempos e tempos, dias e dias, éramos caçados por sermos diferentes, não na aparência, mas pelos costumes ou identidade."
      />
      <PagTextPadrao
        title="Outro Título"
        description="Outra descrição aqui. Este é um exemplo de como você pode usar o componente PagTextPadrao para exibir informações adicionais na sua página."
      />
      <Footer onPress={() => navigation.navigate('NossaVindaYoutube')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
});

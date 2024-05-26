// NossaVindaYoutube.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PagTextPadrao from '../components/Bases/PagTextPadrao';
import Footer from '../components/Footer';
import YoutubeEmbed from '../components/Youtube';



export default function NossaVindaYoutube({ navigation }) {
  return (
    <View style={styles.container}>
      <PagTextPadrao
        title="Nossa Vinda"
        description=""
      />
      <YoutubeEmbed embedId="-q9rfkcJ2dk"/>
      <Footer navigation={undefined} />
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

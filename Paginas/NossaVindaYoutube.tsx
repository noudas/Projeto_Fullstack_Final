// NossaVindaYoutube.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import YoutubeEmbed from '../components/Youtube';



export default function NossaVindaYoutube({ navigation }) {
  return (
    <View style={styles.container}>
      <YoutubeEmbed embedId="-q9rfkcJ2dk"/>
      <Footer onPress={() => navigation.navigate('Caminhos')} />
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

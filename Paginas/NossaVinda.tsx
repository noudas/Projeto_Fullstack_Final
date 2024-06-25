// NossaVinda.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';


export default function NossaVinda({ navigation }) {
  return (
    <View style={styles.container}>
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

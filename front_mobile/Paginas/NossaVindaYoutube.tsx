// NossaVindaYoutube.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Footer from '../components/Footer';
import YoutubeEmbed from '../components/Youtube';



export default function NossaVindaYoutube({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.TItulo5XL}>Nossa Vinda</Text>
      <Text style={styles.youtube}><YoutubeEmbed embedId="gcPoksyIk-A"/></Text>

      <Footer onPress={() => navigation.navigate('NossaHistoria')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:0,
    margin:0,
    flex: 1,
    backgroundColor: 'black',
  },  
  TItulo5XL: {
    color: "white",
    marginLeft:30,
    fontSize: 48,
    marginTop:20,
    marginBottom: 20,
    textAlign: 'left',
  },
  youtube:{
  }
});

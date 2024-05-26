// Home.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LogoPositivo from '../components/logoPositivo';
import Setinha from '../components/Botoes/Setinha';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LogoPositivo />
        <Text style={[styles.centeredText, { color: 'white' }]}>
          Aconteceu, portanto, pode acontecer novamente:
        </Text>
        <Text style={[styles.centeredText, { color: 'white' }]}>
          Este é o cerne do que temos a dizer. Isso pode acontecer e pode acontecer em qualquer lugar
        </Text>
        <Text style={[styles.centeredText, { color: 'white' }]}>
          Primo Levi Sobrevivente de Auschwitz
        </Text>

      <Setinha onPress={() => navigation.navigate('NossaVinda')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:"-20px",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  centeredText: {
    textAlign: 'center', // Center the text within its own space
  },
});

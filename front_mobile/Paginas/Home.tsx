import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LogoPositivo from '../components/logoPositivo';
import Setinha from '../components/Botoes/Setinha';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LogoPositivo/>
      <Text style={styles.centeredText}>
        Aconteceu, portanto, pode acontecer novamente:{"\n\n"}
        Este é o cerne do que temos a dizer. Isso pode acontecer e pode acontecer em qualquer lugar{"\n\n"}
        Primo Levi Sobrevivente de Auschwitz
      </Text>

      <Setinha onPress={() => navigation.navigate('NossaVinda')} />
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
  centeredText: {
    color:"white",
    fontSize:16,
    textAlign: 'center',
    marginBottom:40,
  },
  LogoPositivo:{
    marginTop:80,
  }
});

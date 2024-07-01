// Caminhos.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BotoesCaminhos from '../components/Botoes/BotoesCaminhos';

export default function Caminhos({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Titulo</Text>
        <BotoesCaminhos onPress={() => navigation.navigate('HistoriadosSobreviventes')} buttonText='Sobreviventes do Holocausto'/>
        <BotoesCaminhos onPress={undefined} buttonText='Teste'/>
        <BotoesCaminhos onPress={undefined} buttonText='Teste'/>
        <BotoesCaminhos onPress={undefined} buttonText='Teste'/>
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
    Text:{
        fontSize:36,
        color:"white",
    }
  });
  
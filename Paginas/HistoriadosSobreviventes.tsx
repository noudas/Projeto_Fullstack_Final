// HistoriadosSobreviventes.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BotaoPadrao from '../components/Botoes/BotaoPadrao';

export default function HistoriadosSobreviventes({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Titulo</Text>
        <Text>Texto</Text>
        <BotaoPadrao onPress={() => navigation.navigate('ListaSobreviventes')} buttonText='Escolher uma Historia'/>
        <BotaoPadrao onPress={undefined} buttonText='Historia aleatoria'/>
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
  
// SobreviventeYoutube.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GetYoutubeSobrevivente from '../components/API/GetYoutube';


export default function YoutubeSobrevivente({ navigation }) {
    return (
      <View style={styles.container}>
        <GetYoutubeSobrevivente/>
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
  
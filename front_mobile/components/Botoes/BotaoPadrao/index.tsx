// BotaoPadrao.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotaoPadrao {
    onPress: () => void;
    buttonText: string;
  }
  
  const BotaoPadrao: React.FC<BotaoPadrao> = ({ onPress, buttonText }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      width: "75%",
      height: 55,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default BotaoPadrao;
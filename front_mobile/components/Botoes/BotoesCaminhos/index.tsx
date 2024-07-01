// BotoesCaminhos.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotoesCaminhosProps {
  onPress: () => void;
  buttonText: string;
}

const BotoesCaminhos: React.FC<BotoesCaminhosProps> = ({ onPress, buttonText }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "15%",
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BotoesCaminhos;
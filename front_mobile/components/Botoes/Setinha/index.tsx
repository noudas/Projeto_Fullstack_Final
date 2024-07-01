// Setinha.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import SetinhaIcon from '../../SVG/setinhaIcon';

const Setinha = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <SetinhaIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Setinha;

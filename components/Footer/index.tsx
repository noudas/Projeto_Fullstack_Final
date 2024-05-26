// Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonProximaPagPrincipal from '../Botoes/buttonProximaPag_Principal';

const Footer = ({ onPress })  => {
  return (
    <View style={styles.footer}>
      {/* Wrap the button in a View and apply absolute positioning */}
      <View style={styles.buttonContainer}>
        <ButtonProximaPagPrincipal onPress={onPress} />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  buttonContainer: {
    position: 'absolute',
    left: "55%",
  },
});

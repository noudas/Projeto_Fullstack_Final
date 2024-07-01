// buttonProximaPag_Principal.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ProximaPagIcon from '../../SVG/ProximaPagIcon';

const ButtonProximaPagPrincipal = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <ProximaPagIcon />
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

export default ButtonProximaPagPrincipal;


import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LogoPositivo = () => {
  return (
    <Image
      source={require('../../assets/img/Logo Positivo png.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "75%",
    height: '75%',
  },
});

export default LogoPositivo;

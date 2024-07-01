import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const LogoPositivo = () => {
  const imageSize = Math.min(width * 0.75, height * 0.75); // Calculate 75% of the smaller dimension

  return (
    <Image
      source={require('../../assets/img/Logo Positivo png.png')}
      style={{ width: imageSize, height: imageSize }} // Dynamically setting the size
      resizeMode="contain"
    />
  );
};

export default LogoPositivo;

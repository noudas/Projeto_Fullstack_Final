//Titulo League Spartan Extra Bold 800

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, LeagueSpartan_800ExtraBold } from '@expo-google-fonts/league-spartan';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TituloExtraBold: React.FC = () => {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TituloExtraBoldX9L text="League Spartan ExtraBold X9L" />
      <TituloExtraBoldX8L text="League Spartan ExtraBold X8L" />
      <TituloExtraBoldX7L text="League Spartan ExtraBold X7L" />
      <TituloExtraBoldX6L text="League Spartan ExtraBold X6L" />
      <TituloExtraBoldX5L text="League Spartan ExtraBold X5L" />
      <TituloExtraBoldX4L text="League Spartan ExtraBold X4L" />
      <TituloExtraBoldX3L text="League Spartan ExtraBold X3L" />
      <TituloExtraBoldX2L text="League Spartan ExtraBold X2L" />
      <TituloExtraBoldXL text="League Spartan ExtraBold XL" />
      <TituloExtraBoldL text="League Spartan ExtraBold L" />
      <TituloExtraBoldBase text="League Spartan ExtraBold Base" />
      <TituloExtraBoldM text="League Spartan ExtraBold M" />
      <TituloExtraBoldSM text="League Spartan ExtraBold SM" />
      <TituloExtraBoldXSM text="League Spartan ExtraBold XSM" />
    </View>
  );
};

const TituloExtraBoldX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldX9L}>{text}</Text>
);

const TituloExtraBoldX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldX8L}>{text}</Text>
);

const TituloExtraBoldX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldX7L}>{text}</Text>
);

const TituloExtraBoldX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldX6L}>{text}</Text>
);

const TituloExtraBoldX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldX5L}>{text}</Text>
);

const TituloExtraBoldX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldX4L}>{text}</Text>
);

const TituloExtraBoldX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldX3L}>{text}</Text>
);

const TituloExtraBoldX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldX2L}>{text}</Text>
);

const TituloExtraBoldXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldXL}>{text}</Text>
);

const TituloExtraBoldL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldL}>{text}</Text>
);

const TituloExtraBoldBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldBase}>{text}</Text>
);

const TituloExtraBoldM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldM}>{text}</Text>
);

const TituloExtraBoldSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldSM}>{text}</Text>
);

const TituloExtraBoldXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloExtraBoldXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TituloExtraBoldX9L: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 128,
    fontWeight: '800',
  },
  TituloExtraBoldX8L: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 96,
    fontWeight: '800',
  },
  TituloExtraBoldX7L: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 72,
    fontWeight: '800',
  },
  TituloExtraBoldX6L: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 60,
    fontWeight: '800',
  },
  TituloExtraBoldX5L: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 48,
    fontWeight: '800',
  },
  TituloExtraBoldX4L: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 36,
    fontWeight: '800',
  },
  TituloExtraBoldX3L: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 30,
    fontWeight: '800',
  },
  TituloExtraBoldX2L: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 24,
    fontWeight: '800',
  },
  TituloExtraBoldXL: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 20,
    fontWeight: '800',
  },
  TituloExtraBoldL: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 18,
    fontWeight: '800',
  },
  TituloExtraBoldBase: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 16,
    fontWeight: '800',
  },
  TituloExtraBoldM: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 15,
    fontWeight: '800',
  },
  TituloExtraBoldSM: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 14,
    fontWeight: '800',
  },
  TituloExtraBoldXSM: {
    fontFamily: 'LeagueSpartan_800ExtraBold',
    fontSize: 12,
    fontWeight: '800',
  },
});

export default TituloExtraBold;

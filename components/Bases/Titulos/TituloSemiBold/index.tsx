//Titulo League Spartan Semi Bold 600

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TituloSemiBold: React.FC = () => {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TituloSemiBoldX9L text="League Spartan SemiBold X9L" />
      <TituloSemiBoldX8L text="League Spartan SemiBold X8L" />
      <TituloSemiBoldX7L text="League Spartan SemiBold X7L" />
      <TituloSemiBoldX6L text="League Spartan SemiBold X6L" />
      <TituloSemiBoldX5L text="League Spartan SemiBold X5L" />
      <TituloSemiBoldX4L text="League Spartan SemiBold X4L" />
      <TituloSemiBoldX3L text="League Spartan SemiBold X3L" />
      <TituloSemiBoldX2L text="League Spartan SemiBold X2L" />
      <TituloSemiBoldXL text="League Spartan SemiBold XL" />
      <TituloSemiBoldL text="League Spartan SemiBold L" />
      <TituloSemiBoldBase text="League Spartan SemiBold Base" />
      <TituloSemiBoldM text="League Spartan SemiBold M" />
      <TituloSemiBoldSM text="League Spartan SemiBold SM" />
      <TituloSemiBoldXSM text="League Spartan SemiBold XSM" />
    </View>
  );
};

const TituloSemiBoldX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldX9L}>{text}</Text>
);

const TituloSemiBoldX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldX8L}>{text}</Text>
);

const TituloSemiBoldX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldX7L}>{text}</Text>
);

const TituloSemiBoldX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldX6L}>{text}</Text>
);

const TituloSemiBoldX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldX5L}>{text}</Text>
);

const TituloSemiBoldX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldX4L}>{text}</Text>
);

const TituloSemiBoldX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldX3L}>{text}</Text>
);

const TituloSemiBoldX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldX2L}>{text}</Text>
);

const TituloSemiBoldXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldXL}>{text}</Text>
);

const TituloSemiBoldL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldL}>{text}</Text>
);

const TituloSemiBoldBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldBase}>{text}</Text>
);

const TituloSemiBoldM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldM}>{text}</Text>
);

const TituloSemiBoldSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldSM}>{text}</Text>
);

const TituloSemiBoldXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloSemiBoldXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TituloSemiBoldX9L: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 128,
    fontWeight: '600',
  },
  TituloSemiBoldX8L: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 96,
    fontWeight: '600',
  },
  TituloSemiBoldX7L: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 72,
    fontWeight: '600',
  },
  TituloSemiBoldX6L: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 60,
    fontWeight: '600',
  },
  TituloSemiBoldX5L: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 48,
    fontWeight: '600',
  },
  TituloSemiBoldX4L: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 36,
    fontWeight: '600',
  },
  TituloSemiBoldX3L: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 30,
    fontWeight: '600',
  },
  TituloSemiBoldX2L: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 24,
    fontWeight: '600',
  },
  TituloSemiBoldXL: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 20,
    fontWeight: '600',
  },
  TituloSemiBoldL: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 18,
    fontWeight: '600',
  },
  TituloSemiBoldBase: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 16,
    fontWeight: '600',
  },
  TituloSemiBoldM: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 15,
    fontWeight: '600',
  },
  TituloSemiBoldSM: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 14,
    fontWeight: '600',
  },
  TituloSemiBoldXSM: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default TituloSemiBold;

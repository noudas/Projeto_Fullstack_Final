//Titulo League Spartan Regular 400

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, LeagueSpartan_400Regular } from '@expo-google-fonts/league-spartan';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TituloRegular: React.FC = () => {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TituloRegularX9L text="League Spartan Regular X9L" />
      <TituloRegularX8L text="League Spartan Regular X8L" />
      <TituloRegularX7L text="League Spartan Regular X7L" />
      <TituloRegularX6L text="League Spartan Regular X6L" />
      <TituloRegularX5L text="League Spartan Regular X5L" />
      <TituloRegularX4L text="League Spartan Regular X4L" />
      <TituloRegularX3L text="League Spartan Regular X3L" />
      <TituloRegularX2L text="League Spartan Regular X2L" />
      <TituloRegularXL text="League Spartan Regular XL" />
      <TituloRegularL text="League Spartan Regular L" />
      <TituloRegularBase text="League Spartan Regular Base" />
      <TituloRegularM text="League Spartan Regular M" />
      <TituloRegularSM text="League Spartan Regular SM" />
      <TituloRegularXSM text="League Spartan Regular XSM" />
    </View>
  );
};

const TituloRegularX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularX9L}>{text}</Text>
);

const TituloRegularX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularX8L}>{text}</Text>
);

const TituloRegularX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularX7L}>{text}</Text>
);

const TituloRegularX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularX6L}>{text}</Text>
);

const TituloRegularX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularX5L}>{text}</Text>
);

const TituloRegularX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularX4L}>{text}</Text>
);

const TituloRegularX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularX3L}>{text}</Text>
);

const TituloRegularX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularX2L}>{text}</Text>
);

const TituloRegularXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularXL}>{text}</Text>
);

const TituloRegularL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularL}>{text}</Text>
);

const TituloRegularBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularBase}>{text}</Text>
);

const TituloRegularM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularM}>{text}</Text>
);

const TituloRegularSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularSM}>{text}</Text>
);

const TituloRegularXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloRegularXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TituloRegularX9L: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 128,
    fontWeight: '400',
  },
  TituloRegularX8L: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 96,
    fontWeight: '400',
  },
  TituloRegularX7L: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 72,
    fontWeight: '400',
  },
  TituloRegularX6L: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 60,
    fontWeight: '400',
  },
  TituloRegularX5L: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 48,
    fontWeight: '400',
  },
  TituloRegularX4L: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 36,
    fontWeight: '400',
  },
  TituloRegularX3L: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 30,
    fontWeight: '400',
  },
  TituloRegularX2L: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 24,
    fontWeight: '400',
  },
  TituloRegularXL: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 20,
    fontWeight: '400',
  },
  TituloRegularL: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 18,
    fontWeight: '400',
  },
  TituloRegularBase: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 16,
    fontWeight: '400',
  },
  TituloRegularM: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 15,
    fontWeight: '400',
  },
  TituloRegularSM: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 14,
    fontWeight: '400',
  },
  TituloRegularXSM: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default TituloRegular;

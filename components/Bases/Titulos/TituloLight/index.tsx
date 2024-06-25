//Titulo League Spartan Light 300

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, LeagueSpartan_300Light } from '@expo-google-fonts/league-spartan';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TituloLight: React.FC = () => {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TituloLightX9L text="League Spartan Light X9L" />
      <TituloLightX8L text="League Spartan Light X8L" />
      <TituloLightX7L text="League Spartan Light X7L" />
      <TituloLightX6L text="League Spartan Light X6L" />
      <TituloLightX5L text="League Spartan Light X5L" />
      <TituloLightX4L text="League Spartan Light X4L" />
      <TituloLightX3L text="League Spartan Light X3L" />
      <TituloLightX2L text="League Spartan Light X2L" />
      <TituloLightXL text="League Spartan Light XL" />
      <TituloLightL text="League Spartan Light L" />
      <TituloLightBase text="League Spartan Light Base" />
      <TituloLightM text="League Spartan Light M" />
      <TituloLightSM text="League Spartan Light SM" />
      <TituloLightXSM text="League Spartan Light XSM" />
    </View>
  );
};

const TituloLightX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightX9L}>{text}</Text>
);

const TituloLightX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightX8L}>{text}</Text>
);

const TituloLightX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightX7L}>{text}</Text>
);

const TituloLightX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightX6L}>{text}</Text>
);

const TituloLightX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightX5L}>{text}</Text>
);

const TituloLightX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightX4L}>{text}</Text>
);

const TituloLightX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightX3L}>{text}</Text>
);

const TituloLightX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightX2L}>{text}</Text>
);

const TituloLightXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightXL}>{text}</Text>
);

const TituloLightL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightL}>{text}</Text>
);

const TituloLightBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightBase}>{text}</Text>
);

const TituloLightM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightM}>{text}</Text>
);

const TituloLightSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightSM}>{text}</Text>
);

const TituloLightXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloLightXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TituloLightX9L: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 128,
    fontWeight: '300',
  },
  TituloLightX8L: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 96,
    fontWeight: '300',
  },
  TituloLightX7L: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 72,
    fontWeight: '300',
  },
  TituloLightX6L: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 60,
    fontWeight: '300',
  },
  TituloLightX5L: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 48,
    fontWeight: '300',
  },
  TituloLightX4L: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 36,
    fontWeight: '300',
  },
  TituloLightX3L: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 30,
    fontWeight: '300',
  },
  TituloLightX2L: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 24,
    fontWeight: '300',
  },
  TituloLightXL: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 20,
    fontWeight: '300',
  },
  TituloLightL: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 18,
    fontWeight: '300',
  },
  TituloLightBase: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 16,
    fontWeight: '300',
  },
  TituloLightM: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 15,
    fontWeight: '300',
  },
  TituloLightSM: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 14,
    fontWeight: '300',
  },
  TituloLightXSM: {
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 12,
    fontWeight: '300',
  },
});

export default TituloLight;

//Texto Roboto Light 300

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, Roboto_300Light } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TextoLight: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TextoLightX9L text="Roboto Light X9L" />
      <TextoLightX8L text="Roboto Light X8L" />
      <TextoLightX7L text="Roboto Light X7L" />
      <TextoLightX6L text="Roboto Light X6L" />
      <TextoLightX5L text="Roboto Light X5L" />
      <TextoLightX4L text="Roboto Light X4L" />
      <TextoLightX3L text="Roboto Light X3L" />
      <TextoLightX2L text="Roboto Light X2L" />
      <TextoLightXL text="Roboto Light XL" />
      <TextoLightL text="Roboto Light L" />
      <TextoLightBase text="Roboto Light Base" />
      <TextoLightM text="Roboto Light M" />
      <TextoLightSM text="Roboto Light SM" />
      <TextoLightXSM text="Roboto Light XSM" />
    </View>
  );
};

const TextoLightX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightX9L}>{text}</Text>
);

const TextoLightX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightX8L}>{text}</Text>
);

const TextoLightX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightX7L}>{text}</Text>
);

const TextoLightX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightX6L}>{text}</Text>
);

const TextoLightX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightX5L}>{text}</Text>
);

const TextoLightX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightX4L}>{text}</Text>
);

const TextoLightX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightX3L}>{text}</Text>
);

const TextoLightX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightX2L}>{text}</Text>
);

const TextoLightXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightXL}>{text}</Text>
);

const TextoLightL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightL}>{text}</Text>
);

const TextoLightBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightBase}>{text}</Text>
);

const TextoLightM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightM}>{text}</Text>
);

const TextoLightSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightSM}>{text}</Text>
);

const TextoLightXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoLightXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TextoLightX9L: {
    fontFamily: 'Roboto_300Light',
    fontSize: 128,
    fontWeight: '300',
  },

  TextoLightX8L: {
    fontFamily: 'Roboto_300Light',
    fontSize: 96,
    fontWeight: '300',
  },

  TextoLightX7L: {
    fontFamily: 'Roboto_300Light',
    fontSize: 72,
    fontWeight: '300',
  },

  TextoLightX6L: {
    fontFamily: 'Roboto_300Light',
    fontSize: 60,
    fontWeight: '300',
  },
  
  TextoLightX5L: {
    fontFamily: 'Roboto_300Light',
    fontSize: 48,
    fontWeight: '300',
  },
  
  TextoLightX4L: {
    fontFamily: 'Roboto_300Light',
    fontSize: 36,
    fontWeight: '300',
  },
  
  TextoLightX3L: {
    fontFamily: 'Roboto_300Light',
    fontSize: 30,
    fontWeight: '300',
  },
  
  TextoLightX2L: {
    fontFamily: 'Roboto_300Light',
    fontSize: 24,
    fontWeight: '300',
  },
  
  TextoLightXL: {
    fontFamily: 'Roboto_300Light',
    fontSize: 20,
    fontWeight: '300',
  },
  
  TextoLightL: {
    fontFamily: 'Roboto_300Light',
    fontSize: 18,
    fontWeight: '300',
  },
  
  TextoLightBase: {
    fontFamily: 'Roboto_300Light',
    fontSize: 16,
    fontWeight: '300',
  },
  
  TextoLightM: {
    fontFamily: 'Roboto_300Light',
    fontSize: 15,
    fontWeight: '300',
  },
  
  TextoLightSM: {
    fontFamily: 'Roboto_300Light',
    fontSize: 14,
    fontWeight: '300',
  },
  
  TextoLightXSM: {
    fontFamily: 'Roboto_300Light',
    fontSize: 12,
    fontWeight: '300',
  },
});

export default TextoLight;

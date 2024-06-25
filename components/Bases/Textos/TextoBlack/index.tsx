//Texto Roboto Black 900

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, Roboto_900Black } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TextoBlack: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TextoBlackX9L text="Roboto Black X9L" />
      <TextoBlackX8L text="Roboto Black X8L" />
      <TextoBlackX7L text="Roboto Black X7L" />
      <TextoBlackX6L text="Roboto Black X6L" />
      <TextoBlackX5L text="Roboto Black X5L" />
      <TextoBlackX4L text="Roboto Black X4L" />
      <TextoBlackX3L text="Roboto Black X3L" />
      <TextoBlackX2L text="Roboto Black X2L" />
      <TextoBlackXL text="Roboto Black XL" />
      <TextoBlackL text="Roboto Black L" />
      <TextoBlackBase text="Roboto Black Base" />
      <TextoBlackM text="Roboto Black M" />
      <TextoBlackSM text="Roboto Black SM" />
      <TextoBlackXSM text="Roboto Black XSM" />
    </View>
  );
};

const TextoBlackX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackX9L}>{text}</Text>
);

const TextoBlackX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackX8L}>{text}</Text>
);

const TextoBlackX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackX7L}>{text}</Text>
);

const TextoBlackX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackX6L}>{text}</Text>
);

const TextoBlackX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackX5L}>{text}</Text>
);

const TextoBlackX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackX4L}>{text}</Text>
);

const TextoBlackX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackX3L}>{text}</Text>
);

const TextoBlackX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackX2L}>{text}</Text>
);

const TextoBlackXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackXL}>{text}</Text>
);

const TextoBlackL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackL}>{text}</Text>
);

const TextoBlackBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackBase}>{text}</Text>
);

const TextoBlackM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackM}>{text}</Text>
);

const TextoBlackSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackSM}>{text}</Text>
);

const TextoBlackXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBlackXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TextoBlackX9L: {
    fontFamily: 'Roboto_900Black',
    fontSize: 128,
    fontWeight: '900',
  },

  TextoBlackX8L: {
    fontFamily: 'Roboto_900Black',
    fontSize: 96,
    fontWeight: '900',
  },

  TextoBlackX7L: {
    fontFamily: 'Roboto_900Black',
    fontSize: 72,
    fontWeight: '900',
  },

  TextoBlackX6L: {
    fontFamily: 'Roboto_900Black',
    fontSize: 60,
    fontWeight: '900',
  },
  
  TextoBlackX5L: {
    fontFamily: 'Roboto_900Black',
    fontSize: 48,
    fontWeight: '900',
  },
  
  TextoBlackX4L: {
    fontFamily: 'Roboto_900Black',
    fontSize: 36,
    fontWeight: '900',
  },
  
  TextoBlackX3L: {
    fontFamily: 'Roboto_900Black',
    fontSize: 30,
    fontWeight: '900',
  },
  
  TextoBlackX2L: {
    fontFamily: 'Roboto_900Black',
    fontSize: 24,
    fontWeight: '900',
  },
  
  TextoBlackXL: {
    fontFamily: 'Roboto_900Black',
    fontSize: 20,
    fontWeight: '900',
  },
  
  TextoBlackL: {
    fontFamily: 'Roboto_900Black',
    fontSize: 18,
    fontWeight: '900',
  },
  
  TextoBlackBase: {
    fontFamily: 'Roboto_900Black',
    fontSize: 16,
    fontWeight: '900',
  },
  
  TextoBlackM: {
    fontFamily: 'Roboto_900Black',
    fontSize: 15,
    fontWeight: '900',
  },
  
  TextoBlackSM: {
    fontFamily: 'Roboto_900Black',
    fontSize: 14,
    fontWeight: '900',
  },
  
  TextoBlackXSM: {
    fontFamily: 'Roboto_900Black',
    fontSize: 12,
    fontWeight: '900',
  },
});

export default TextoBlack;

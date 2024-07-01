//Texto Roboto Regular 400

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TextoRegular: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TextoRegularX9L text="Roboto Regular X9L" />
      <TextoRegularX8L text="Roboto Regular X8L" />
      <TextoRegularX7L text="Roboto Regular X7L" />
      <TextoRegularX6L text="Roboto Regular X6L" />
      <TextoRegularX5L text="Roboto Regular X5L" />
      <TextoRegularX4L text="Roboto Regular X4L" />
      <TextoRegularX3L text="Roboto Regular X3L" />
      <TextoRegularX2L text="Roboto Regular X2L" />
      <TextoRegularXL text="Roboto Regular XL" />
      <TextoRegularL text="Roboto Regular L" />
      <TextoRegularBase text="Roboto Regular Base" />
      <TextoRegularM text="Roboto Regular M" />
      <TextoRegularSM text="Roboto Regular SM" />
      <TextoRegularXSM text="Roboto Regular XSM" />
    </View>
  );
};

const TextoRegularX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularX9L}>{text}</Text>
);

const TextoRegularX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularX8L}>{text}</Text>
);

const TextoRegularX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularX7L}>{text}</Text>
);

const TextoRegularX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularX6L}>{text}</Text>
);

const TextoRegularX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularX5L}>{text}</Text>
);

const TextoRegularX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularX4L}>{text}</Text>
);

const TextoRegularX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularX3L}>{text}</Text>
);

const TextoRegularX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularX2L}>{text}</Text>
);

const TextoRegularXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularXL}>{text}</Text>
);

const TextoRegularL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularL}>{text}</Text>
);

const TextoRegularBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularBase}>{text}</Text>
);

const TextoRegularM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularM}>{text}</Text>
);

const TextoRegularSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularSM}>{text}</Text>
);

const TextoRegularXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoRegularXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TextoRegularX9L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 128,
    fontWeight: '400',
  },

  TextoRegularX8L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 96,
    fontWeight: '400',
  },

  TextoRegularX7L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 72,
    fontWeight: '400',
  },

  TextoRegularX6L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 60,
    fontWeight: '400',
  },
  
  TextoRegularX5L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 48,
    fontWeight: '400',
  },
  
  TextoRegularX4L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 36,
    fontWeight: '400',
  },
  
  TextoRegularX3L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 30,
    fontWeight: '400',
  },
  
  TextoRegularX2L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 24,
    fontWeight: '400',
  },
  
  TextoRegularXL: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    fontWeight: '400',
  },
  
  TextoRegularL: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    fontWeight: '400',
  },
  
  TextoRegularBase: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontWeight: '400',
  },
  
  TextoRegularM: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    fontWeight: '400',
  },
  
  TextoRegularSM: {
    fontFamily: 'Roboto_400',
    fontSize: 14,
    fontWeight: '400',
  },

  TextoRegularXSM: {
    fontFamily: 'Roboto_400',
    fontSize: 12,
    fontWeight: '400',
  }
});

export default TextoRegular;
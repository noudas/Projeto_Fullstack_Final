//Texto Roboto Bold 700

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TextoBold: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TextoBoldX9L text="Roboto Bold X9L" />
      <TextoBoldX8L text="Roboto Bold X8L" />
      <TextoBoldX7L text="Roboto Bold X7L" />
      <TextoBoldX6L text="Roboto Bold X6L" />
      <TextoBoldX5L text="Roboto Bold X5L" />
      <TextoBoldX4L text="Roboto Bold X4L" />
      <TextoBoldX3L text="Roboto Bold X3L" />
      <TextoBoldX2L text="Roboto Bold X2L" />
      <TextoBoldXL text="Roboto Bold XL" />
      <TextoBoldL text="Roboto Bold L" />
      <TextoBoldBase text="Roboto Bold Base" />
      <TextoBoldM text="Roboto Bold M" />
      <TextoBoldSM text="Roboto Bold SM" />
      <TextoBoldXSM text="Roboto Bold XSM" />
    </View>
  );
};

const TextoBoldX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldX9L}>{text}</Text>
);

const TextoBoldX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldX8L}>{text}</Text>
);

const TextoBoldX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldX7L}>{text}</Text>
);

const TextoBoldX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldX6L}>{text}</Text>
);

const TextoBoldX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldX5L}>{text}</Text>
);

const TextoBoldX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldX4L}>{text}</Text>
);

const TextoBoldX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldX3L}>{text}</Text>
);

const TextoBoldX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldX2L}>{text}</Text>
);

const TextoBoldXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldXL}>{text}</Text>
);

const TextoBoldL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldL}>{text}</Text>
);

const TextoBoldBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldBase}>{text}</Text>
);

const TextoBoldM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldM}>{text}</Text>
);

const TextoBoldSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldSM}>{text}</Text>
);

const TextoBoldXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TextoBoldXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TextoBoldX9L: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 128,
    fontWeight: '700',
  },

  TextoBoldX8L: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 96,
    fontWeight: '700',
  },

  TextoBoldX7L: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 72,
    fontWeight: '700',
  },

  TextoBoldX6L: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 60,
    fontWeight: '700',
  },
  
  TextoBoldX5L: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 48,
    fontWeight: '700',
  },
  
  TextoBoldX4L: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 36,
    fontWeight: '700',
  },
  
  TextoBoldX3L: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
    fontWeight: '700',
  },
  
  TextoBoldX2L: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    fontWeight: '700',
  },
  
  TextoBoldXL: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    fontWeight: '700',
  },
  
  TextoBoldL: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    fontWeight: '700',
  },
  
  TextoBoldBase: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    fontWeight: '700',
  },
  
  TextoBoldM: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 15,
    fontWeight: '700',
  },
  
  TextoBoldSM: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    fontWeight: '700',
  },
  
  TextoBoldXSM: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default TextoBold;
//Titulo League Spartan Black 900

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts, LeagueSpartan_900Black } from '@expo-google-fonts/league-spartan';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TituloBlack: React.FC = () => {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TituloBlackX9L text="League Spartan Black X9L" />
      <TituloBlackX8L text="League Spartan Black X8L" />
      <TituloBlackX7L text="League Spartan Black X7L" />
      <TituloBlackX6L text="League Spartan Black X6L" />
      <TituloBlackX5L text="League Spartan Black X5L" />
      <TituloBlackX4L text="League Spartan Black X4L" />
      <TituloBlackX3L text="League Spartan Black X3L" />
      <TituloBlackX2L text="League Spartan Black X2L" />
      <TituloBlackXL text="League Spartan Black XL" />
      <TituloBlackL text="League Spartan Black L" />
      <TituloBlackBase text="League Spartan Black Base" />
      <TituloBlackM text="League Spartan Black M" />
      <TituloBlackSM text="League Spartan Black SM" />
      <TituloBlackXSM text="League Spartan Black XSM" />
    </View>
  );
};

const TituloBlackX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX9L}>{text}</Text>
);

const TituloBlackX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);

const TituloBlackXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBlackX8L}>{text}</Text>
);


const styles = StyleSheet.create({
  TituloBlackX9L: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 128,
    fontWeight: '900',
  },

  TituloBlackX8L: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 96,
    fontWeight: '900',
  },

  TituloBlackX7L: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 72,
    fontWeight: '900',
  },

  TituloBlackX6L: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 60,
    fontWeight: '900',
  },
  
  TituloBlackX5L: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 48,
    fontWeight: '900',
  },
  
  TituloBlackX4L: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 36,
    fontWeight: '900',
  },
  
  TituloBlackX3L: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 30,
    fontWeight: '900',
  },
  
  TituloBlackX2L: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 24,
    fontWeight: '900',
  },
  
  TituloBlackXL: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 20,
    fontWeight: '900',
  },
  
  TituloBlackL: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 18,
    fontWeight: '900',
  },
  
  TituloBlackBase: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 16,
    fontWeight: '900',
  },
  
  TituloBlackM: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 15,
    fontWeight: '900',
  },
  
  TituloBlackSM: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 14,
    fontWeight: '900',
  },
  
  TituloBlackXSM: {
    fontFamily: 'LeagueSpartan_900Black',
    fontSize: 12,
    fontWeight: '900',
  },
});

export { TituloBlackX5L };

export default TituloBlack;
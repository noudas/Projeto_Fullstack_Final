//Titulo League Spartan Bold 700

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

interface TextProps {
  text: string;
}

const TituloBold: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'LeagueSpartan_700Bold': require("../../../../assets/fonts/LeagueSpartan_700Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <TituloBoldX9L text="League Spartan Bold X9L" />
      <TituloBoldX8L text="League Spartan Bold X8L" />
      <TituloBoldX7L text="League Spartan Bold X7L" />
      <TituloBoldX6L text="League Spartan Bold X6L" />
      <TituloBoldX5L text="League Spartan Bold X5L" />
      <TituloBoldX4L text="League Spartan Bold X4L" />
      <TituloBoldX3L text="League Spartan Bold X3L" />
      <TituloBoldX2L text="League Spartan Bold X2L" />
      <TituloBoldXL text="League Spartan Bold XL" />
      <TituloBoldL text="League Spartan Bold L" />
      <TituloBoldBase text="League Spartan Bold Base" />
      <TituloBoldM text="League Spartan Bold M" />
      <TituloBoldSM text="League Spartan Bold SM" />
      <TituloBoldXSM text="League Spartan Bold XSM" />
    </View>
  );
};

const TituloBoldX9L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldX9L}>{text}</Text>
);

const TituloBoldX8L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldX8L}>{text}</Text>
);

const TituloBoldX7L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldX7L}>{text}</Text>
);

const TituloBoldX6L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldX6L}>{text}</Text>
);

export const TituloBoldX5L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldX5L}>{text}</Text>
);

const TituloBoldX4L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldX4L}>{text}</Text>
);

const TituloBoldX3L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldX3L}>{text}</Text>
);

const TituloBoldX2L: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldX2L}>{text}</Text>
);

const TituloBoldXL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldXL}>{text}</Text>
);

const TituloBoldL: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldL}>{text}</Text>
);

const TituloBoldBase: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldBase}>{text}</Text>
);

const TituloBoldM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldM}>{text}</Text>
);

const TituloBoldSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldSM}>{text}</Text>
);

const TituloBoldXSM: React.FC<TextProps> = ({ text }) => (
  <Text style={styles.TituloBoldXSM}>{text}</Text>
);

const styles = StyleSheet.create({
  TituloBoldX9L: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 128,
    fontWeight: '700',
  },
  TituloBoldX8L: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 96,
    fontWeight: '700',
  },
  TituloBoldX7L: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 72,
    fontWeight: '700',
  },
  TituloBoldX6L: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 60,
    fontWeight: '700',
  },
  TituloBoldX5L: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 48,
    fontWeight: '700',
  },
  TituloBoldX4L: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 36,
    fontWeight: '700',
  },
  TituloBoldX3L: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 30,
    fontWeight: '700',
  },
  TituloBoldX2L: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 24,
    fontWeight: '700',
  },
  TituloBoldXL: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 20,
    fontWeight: '700',
  },
  TituloBoldL: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: '700',
  },
  TituloBoldBase: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 16,
    fontWeight: '700',
  },
  TituloBoldM: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 15,
    fontWeight: '700',
  },
  TituloBoldSM: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 14,
    fontWeight: '700',
  },
  TituloBoldXSM: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 12,
    fontWeight: '700',
  },
});

export default TituloBold;

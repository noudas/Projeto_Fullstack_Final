//PagTextPadrao.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface PagTextPadraoProps {
  title: string;
  description: string;
}

const PagTextPadrao: React.FC<PagTextPadraoProps> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 18,
  },
});

export default PagTextPadrao;

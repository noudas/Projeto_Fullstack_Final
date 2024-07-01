import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ListarPessoas from '../components/API/ListarTodos';



export default function ListaSobreviventes({ navigation }) {

  return (
    <View style={styles.container}>
      <ListarPessoas/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  Text:{
      fontSize:36,
      color:"white",
  }
});

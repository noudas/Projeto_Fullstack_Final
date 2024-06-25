// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Paginas/Home';
import NossaVinda from './Paginas/NossaVinda';
import NossaVindaYoutube from './Paginas/NossaVindaYoutube';
import Caminhos from './Paginas/Caminhos';
import HistoriadosSobreviventes from './Paginas/HistoriadosSobreviventes';
import ListaSobreviventes from './Paginas/ListaSobreviventes';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NossaVinda" component={NossaVinda} />
        <Stack.Screen name="NossaVindaYoutube" component={NossaVindaYoutube} />
        <Stack.Screen name="Caminhos" component={Caminhos} />
        <Stack.Screen name="HistoriadosSobreviventes" component={HistoriadosSobreviventes} />
        <Stack.Screen name="ListaSobreviventes" component={ListaSobreviventes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
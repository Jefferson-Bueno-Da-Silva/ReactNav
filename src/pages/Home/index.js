import React from 'react';
import {  Text, View, Button } from 'react-native';

export default function Home({ navigation }){
  return(
    <View>
      <Button
        title="Ir para Perfil"
        onPress={ () => navigation.navigate('Perfil') }
      />
    </View>
  );
}
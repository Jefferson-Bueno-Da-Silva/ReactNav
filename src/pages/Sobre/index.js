import React from 'react';
import {  Text, View } from 'react-native';

export default function Sobre({ route }){
  return(
    <View>
        {/* O "?" serve para quando um parametro não for opcional */}
        <Text> Meu nome é: {route.params?.Nome} </Text>
    </View>
  );
}
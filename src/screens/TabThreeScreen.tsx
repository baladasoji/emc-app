import * as React from 'react';
import {useState} from 'react';
import {styles} from './styles';
import {Button, View, Text, StyleSheet, ScrollView,FlatList } from 'react-native';
import { RootTabScreenProps } from '../types';
import {useAuth} from '../contexts/Auth';

export default function TabThree({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

import * as React from 'react';
import {useState} from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import { StyleSheet, ScrollView,FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AnnualSummary from './AnnualSummary';



export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  return (
    <AnnualSummary /> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    padding: 2,
    fontSize: 12,
    height: 20,
  },
  hi: {
    padding: 2,
    fontSize: 12,
    alignContent : 'flex-end',
  },
});

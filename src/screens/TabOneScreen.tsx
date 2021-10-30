import * as React from 'react';
import {useState} from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import {Text,View, StyleSheet, ScrollView,FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import WeeklySummary from './WeeklySummary';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <WeeklySummary /> 
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

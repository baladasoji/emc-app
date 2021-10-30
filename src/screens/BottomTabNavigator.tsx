import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import TabThreeScreen from './TabThreeScreen';
import { FontAwesome } from '@expo/vector-icons';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}> 
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Weekly Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-o" color={color} />, 
        })}
      />  
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Yearly Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />, 
        }}
      />  
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />, 
        }}
      /> 
    </BottomTab.Navigator>
  );  
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />; 
}


export default BottomTabNavigator;

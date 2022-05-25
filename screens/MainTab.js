import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedsScreen from './FeedsScreens'
import SearchScreen from './SearchScreen'
import CalenderScreen from './CalendarScreen'

const Tab = createBottomTabNavigator()

function MainTab () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Calendar" component={CalenderScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default MainTab
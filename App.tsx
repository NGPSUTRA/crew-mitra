import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import CrewScreen from './src/screens/CrewScreen';
import RecordsScreen from './src/screens/RecordsScreen';
import ReportsScreen from './src/screens/ReportsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Dashboard') iconName = focused ? 'home' : 'home-outline';
              else if (route.name === 'Crew') iconName = focused ? 'people' : 'people-outline';
              else if (route.name === 'Records') iconName = focused ? 'document-text' : 'document-text-outline';
              else if (route.name === 'Reports') iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1B365D',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Crew" component={CrewScreen} />
          <Tab.Screen name="Records" component={RecordsScreen} />
          <Tab.Screen name="Reports" component={ReportsScreen} />
        </Tab.Navigator>
      </SafeAreaProvider>
    </SafeAreaProvider>
  );
}

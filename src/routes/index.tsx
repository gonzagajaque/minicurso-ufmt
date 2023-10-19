import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivateRoutes from './PrivateRoutes';

const Stack = createNativeStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PrivateStack" component={PrivateRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

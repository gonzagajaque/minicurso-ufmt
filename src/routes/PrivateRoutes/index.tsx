import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Props } from '../../interfaces/routes.interface';
import Private from '../../screens/_layouts/Private';
import DrawerCustom from '../../components/DrawerCustom';
import Dashboard from '../../screens/Dashboard';

const Stack = createNativeStackNavigator();

const useLayout = (Component: React.FC<Props>) => (props: any) =>
(
  <Private>
    <Component {...props} />
  </Private>
);

const Drawer = createDrawerNavigator();

const DashboardStackRoutes = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <DrawerCustom {...props} />}
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: 'transparent',
        height: '90%',
        marginTop: 40,
      },
    }}
  >
    <Drawer.Screen name="Home" component={useLayout(Dashboard.Home)} />
    <Drawer.Screen name="Modulo1" component={useLayout(Dashboard.Modulo1)} />
    <Drawer.Screen name="Modulo2" component={useLayout(Dashboard.Modulo2)} />
    <Drawer.Screen name="Modulo3" component={useLayout(Dashboard.Modulo3)} />
    <Drawer.Screen name="Modulo4" component={useLayout(Dashboard.Modulo4)} />
    <Drawer.Screen name="Aulas" component={useLayout(Dashboard.Aulas)} />
  </Drawer.Navigator>
);

const PrivateRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={DashboardStackRoutes} />
  </Stack.Navigator>
);

export default PrivateRoutes;

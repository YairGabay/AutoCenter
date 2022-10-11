import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from '../Features/Auth/Pages/Login';
import { Clearance } from '../Features/Task/Pages/Clearance';
import { Dial } from '../Features/Task/Pages/Dial';
import { Improvement } from '../Features/Task/Pages/Improvement';

const StackNavigatorConfig = {};

export const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      login: {
        screen: Login,
        navigationOptions: () => ({
          headerShown: false,
        }),
      },
      dial: {
        screen: Dial,
        navigationOptions: () => ({
          headerShown: true,
          headerTitle: 'Dial screen',
        }),
      },
      improvement: {
        screen: Improvement,
        navigationOptions: () => ({
          headerShown: true,
          headerTitle: 'Improvement screen',
        }),
      },
      clearance: {
        screen: Clearance,
        navigationOptions: () => ({
          headerShown: true,
          headerTitle: 'Clearance screen',
        }),
      },
    },
    StackNavigatorConfig,
  ),
);

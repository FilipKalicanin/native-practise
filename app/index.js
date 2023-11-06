import CategoriesScreen from '../screens/CategoriesSreen';
import MealsOverview from '../screens/MealsOverview';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

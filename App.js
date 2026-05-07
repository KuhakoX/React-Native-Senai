import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Info from './screens/Info';
import Portal from './screens/Portal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={Info} options={{ headerShown: false }} />
        <Stack.Screen name="Portal" component={Portal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
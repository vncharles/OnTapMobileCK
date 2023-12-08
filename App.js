import { StatusBar } from 'expo-status-bar';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './screens/Login';
import TodoList from './screens/TodoList';
import todoReducer from './redux/reducers';

const store = createStore(todoReducer, applyMiddleware(thunk));
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='LOGIN'
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name='LOGIN' component={Login} />
          <Stack.Screen name='TODO' component={TodoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import Main from './src/Main';
import { useEffect, useState } from 'react';
import Auth from '@react-native-firebase/auth';
import SplashScreen from './src/SplashScreen';
import TabNavigator from './src/navigation/TabNavigator';
import Post from './src/Post';
import AddPost1 from './src/AddPost1';
import Adding from './src/Adding';
import DetailScreen from './src/DetailScreen';
import TabNavigator2 from './src/navigation/TabNavigator2';

const Stack = createNativeStackNavigator();


const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(false)
  Auth().onAuthStateChanged((user) => {
    if (user !== null) {
      setIsUserLogin(true);
    }
    console.log(user);
  })

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash Screen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Main2" component={TabNavigator2} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Adding" component={Adding} />
        <Stack.Screen name="AddPost1" component={AddPost1} />
        <Stack.Screen name="Detail" component={DetailScreen} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
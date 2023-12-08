import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Login = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([]);

  console.log({username});
  console.log({password});

  useEffect(async() => {
    try {
      const response = await axios.get(`https://6544b1a55a0b4b04436cc6ed.mockapi.io/api/v1/user`)

      if(response.status === 200) {
        const result = await response.data
        setUserData(result);s
      }
    } catch(error) {

    } 
  }, [])

  const handleLogin = () => {
    const user = userData.find((user) => user.username === username && user.password === password);
    if (user) {
      console.log('Login successful');
      navigation.navigate('TODO', {
        user: user
      });
    } else {
      Alert.alert('Invalid Credentials', 'Please check your username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <h2>Login</h2>
      <table>
        <tr>
          <td>
            <Text>Username</Text>
          </td>
          <td>
            <TextInput placeholder='input username' onChange={(event) => setUserName(event.target.value)} />
          </td>
        </tr>
        <tr>
          <td>
            <Text>Password</Text>
          </td>
          <td>
            <TextInput secureTextEntry placeholder='input password' onChange={(event) => setPassword(event.target.value)} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <TouchableOpacity onPress={handleLogin}>Login</TouchableOpacity>
          </td>
        </tr>
      </table>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff'
  }
})
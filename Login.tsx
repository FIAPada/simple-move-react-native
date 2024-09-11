import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import {getUserByEmail} from './api';

export interface ILoginProps {
  onLogin: () => void;
}

const Login = (props: ILoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = await getUserByEmail(email);

    if (!user) {
      console.log('User not found');
      return;
    }

    if (user.password !== password) {
      console.log('Invalid password');
    } else {
      console.log('Logged in successfully');
      props.onLogin();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Login;

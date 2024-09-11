import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Login from './Login';
import Register from './Register';

export interface ICredentialsProps {
  navigation: any;
}

const Credentials = ({navigation}: ICredentialsProps) => {
  const [activeTab, setActiveTab] = useState('Login');

  const renderComponent = () => {
    switch (activeTab) {
      case 'Login':
        return <Login onLogin={() => navigation.push('Home')} />;
      case 'Register':
        return <Register />;

      default:
        return null;
    }
  };
  return (
    <View style={styles.page}>
      <View style={styles.component}>{renderComponent()}</View>
      <View style={styles.tab}>
        <TouchableOpacity onPress={() => setActiveTab('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  component: {
    flex: 1,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});

export default Credentials;

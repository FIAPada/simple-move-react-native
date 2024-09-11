import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const App = () => {
  const [activeTab, setActiveTab] = useState('Login');

  const renderComponent = () => {
    switch (activeTab) {
      case 'Login':
        return <Login />;
      case 'Register':
        return <Register />;
      case 'Home':
        return <Home />;
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
        <TouchableOpacity onPress={() => setActiveTab('Home')}>
          <Text>Home</Text>
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

export default App;

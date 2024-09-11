import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>{renderComponent()}</View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 10,
        }}>
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

export default App;

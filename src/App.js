import React from 'react';
import { Button, Alert } from 'react-native';

function App() {
  const value = 'World';
  return (<><div>Hello the {value}</div><div><button title="Press me" color="#f194ff" onPress={() => Alert.alert('Button with adjusted color pressed')}/></div></>);
}

export default App;

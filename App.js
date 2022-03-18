import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Search from './Components/Search'
import { API_TOKEN } from '@env'

export default class App extends React.Component {
  render() {
    return <Search />
  }
}


/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bonjour</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const getApiToken = () => {
  return API_TOKEN
}

export { getApiToken }
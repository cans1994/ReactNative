import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Search extends React.Component {
    render() {
        return (
        <View style={{ marginTop: 20 }}>
                <TextInput
  style={{
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  }}
  placeholder="Titre du film"
/>
                <Button title='Rechercher' onPress={() => { }} />
            </View>
        )
    }
}

export default Search
import React from 'react'
import { FlatList, View, TextInput, Button, StyleSheet} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'




const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: 'pink',
    borderWidth: 3,
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
       <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
            <Button title="Rechercher" onPress={() => { }} />
            <FlatList data={films}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <FilmItem film={item} />} />

          </View>

        )
    }
}

export default Search
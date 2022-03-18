import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { getFilmDetailFromApi, getImageFromApi } from "../API/TMDBApi";

class FilmDetail extends React.Component {
  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.main_container}>
        <Text>Détail du film</Text>
      </View>
    );
  }
}

const SearchStackNavigator = createStackNavigator({
  // ...
  // le nom dans le StackNavigator n'est pas obligatoirement
  // identique au nom du Composant
  FilmDetail: {
    screen: FilmDetail,
  },
});

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
});

export default FilmDetail;

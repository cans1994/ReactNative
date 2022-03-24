import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { getFilmDetailFromApi } from "../API/TMDBApi";

class FilmDetail extends React.Component {
  componentDidMount() {
    console.log("Component FilmDetail monté");
    getFilmDetailFromApi(this.props.navigation.getParam("idFilm")).then(
      (data) => {
        this.setState({
          film: data,
          isLoading: false,
        });
      }
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component FilmDetail componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Component FilmDetail componentWillUnmount");
  }

  render() {
    const { idFilm } = this.props.navigation.state.params;
    console.log("Component FilmDetail rendu idFilm = " + idFilm);
    return (
      <View style={styles.main_container}>
        <Text>Détail du film</Text>
      </View>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      film: undefined, // Pour l'instant on n'a pas les infos du film, on initialise donc le film à undefined.
      isLoading: true, // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du film
    };
  }

  _displayLoading() {
    if (this.state.isLoading) {
      // Si isLoading vaut true, on affiche le chargement à l'écran
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
    const { idFilm } = this.props.navigation.getParam("idFilm");
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        <Text>Détail du film id {idFilm}</Text>
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
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FilmDetail;

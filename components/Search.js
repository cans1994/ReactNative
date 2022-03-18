import React from "react";
import { FlatList, View, TextInput, Button, StyleSheet } from "react-native";
import films from "../Helpers/filmsData";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = "";
    this.state = {
      films: [],
      height: 0, // ceci va devenir un state
      isLoading: false, // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    };
    this.page = 0;
    this.totalPages = 0;
  }

  _searchFilms() {
    this.page = 0;
    this.totalPages = 0;

    // setState est une fonction asychrone
    // Pour améliorer les performances React peut en différer les traitements
    // Elle prend un deuxième paramètre
    //      une fonction callback qui est appelée lorsque tout est prêt
    this.setState(
      {
        films: [],
      },
      () => {
        console.log(
          "Page : " +
            this.page +
            " / TotalPages : " +
            this.totalPages +
            " / Nombre de films : " +
            this.state.films.length
        );
        this._loadFilms();
      }
    );
  }

  render() {
    return (
      <SafeAreaView style={{ marginTop: 20, flex: 1 }}>
        <View style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <TextInput
            style={styles.textinput}
            placeholder="Titre du film"
            onChangeText={(text) => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._searchFilms()}
          />
          <Button title="Rechercher" onPress={() => this._searchFilms()} />
          <FlatList
            onLayout={(e) => {
              this.setState({ height: e.nativeEvent.layout.height });
              console.log(e.nativeEvent.layout.height);
            }}
            style={{
              flexGrow: 1,
              height: this.state.height,
            }}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (this.page < this.totalPages) {
                // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                this._loadFilms();
              }
            }}
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <FilmItem
                film={item}
                displayDetailForFilm={this.displayDetailForFilm}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }

  // Nouvelle méthode
  _searchTextInputChanged(text) {
    this.searchedText = text; // Modification du texte recherché à chaque saisie de texte, sans passer par setState
  }

  //   isLoading: True puis appel API puis lorsque l'API a répondu isLoading: False
  _loadFilms() {
    if (this.searchedText.length == 0 || this.state.isLoading) return;
    alert("loadfilms");
    this.setState({ isLoading: true });
    getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(
      (data) => {
        this.page = data.page;
        this.totalPages = data.total_pages;
        this.setState({
          // ... syntaxe Javascript ES6 qui permet de recopier
          // et de fusionner les deux tableaux
          // ⟺ films: this.state.films.concat(data.results)
          films: [...this.state.films, ...data.results],
          isLoading: false,
        });
      }
    );
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      );
    }
  }
  displayDetailForFilm = (idFilm) => {
    console.log("film.id=" + idFilm);
  };
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "pink",
    borderWidth: 3,
    paddingLeft: 5,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;

// Components/FilmItem.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import 'react-json-pretty/themes/adventure_time.css'
// import JSONPretty from 'react-json-pretty'
import { getImageFromApi } from "../API/TMDBApi";
import dayjs from "dayjs";
import { Pressable } from "react-native";

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    console.log("test:" + this.props.film.title);
    return (
      <View>
        {/*  <View>
          <JSONPretty data={film}></JSONPretty>
        </View> */}
        <View style={styles.film_main_container}>
          <Image
            style={styles.image}
            source={getImageFromApi(film.poster_path)}
          />
          <View style={styles.film_description}>
            <View style={styles.titreVote}>
              <Pressable onPress={() => displayDetailForFilm(film.id)}>
                 <Text style={styles.titreFilm}>{film.title}</Text>
              </Pressable>
              <Text style={styles.titreFilm}>{film.title}</Text>
              <Text>{film.vote_average}</Text>
            </View>
            <Text style={styles.OverviewFilm}>{film.overview}</Text>
            <Text style={styles.release_date_text}>
              {dayjs(film.release_date).format("DD/MM/YYYY")}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  film_main_container: {
    flexDirection: "row",
    margin: 20,
  },
  film_description: {
    flexDirection: "column",
    marginLeft: 20,
  },
  titreVote: {
    flexDirection: "row",
    fontSize: 16,
  },
  titreFilm: {
    marginRight: 50,
    fontSize: 20,
    minWidth: 300,
    fontWeight: "bold",
  },
  OverviewFilm: {
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 350,
    minHeight: 100,
  },
  Release_date_film: {
    fontSize: 16,
    marginLeft: 250,
  },
  image: {
    width: 120,
    height: 180,
    flexDirection: "column",
  },
});

export default FilmItem;

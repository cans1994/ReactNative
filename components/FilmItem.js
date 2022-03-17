//Components/FilmItem.js
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import 'react-json-pretty/themes/adventure_time.css'
import JSONPretty from 'react-json-pretty'



class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        console.log('test:' + this.props.film.title)
        return (
            <View>
                <JSONPretty data={film}></JSONPretty>
            <Text>{film.title}</Text>
                <Image style={styles.image}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} />
        </View>
        )
 }
}

const styles = StyleSheet.create ({
    image: {
        width: 20,
        height: 20,

    },
})

export default FilmItem
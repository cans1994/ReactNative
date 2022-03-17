// API/TMDBApi.js
import axios from 'axios';
import { API_TOKEN } from '@env'
import getFilmsFromApiWithSearchedText from '../API/TMDBApi'


const getFilmsFromApiWithSearchedText = async (text) => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=API_TOKEN' +
        API_TOKEN +
        '&language=fr&query=' +
        text
    const response = await axios.get(url)
  console.log('--getFilmsFromApiWithSearchedText--')
  console.log(url)
  console.log(response.data)
  console.log('--fin getFilmsFromApiWithSearchedText--')
  return response.data

}

const getImageFromApi = (name) => {
    if (name === null || name === undefined)
        return require('../assets/filmVide.jpg')
    // 'https://image.tmdb.org/t/p/original' + name
  // 'https://image.tmdb.org/t/p/w300' + name
  return { uri: 'https://image.tmdb.org/t/p/w300' + name }
}



export default getFilmsFromApiWithSearchedText
// API/TMDBApi.js
import axios from 'axios';
import { API_TOKEN } from '@env'


const getFilmsFromApiWithSearchedText = async (text) => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=API_TOKEN' +
        API_TOKEN +
        '&language=fr&query=' +
    text
    console.log(url)
    const response = await axios.get(url)
  console.log('--getFilmsFromApiWithSearchedText--')
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

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
//async function slowNetwork() {
 // await sleep(5000)
//}

//const getFilmsFromApiWithSearchedText = async (text) => {
  //  await slowNetwork()
//}



export { getFilmsFromApiWithSearchedText, getImageFromApi }
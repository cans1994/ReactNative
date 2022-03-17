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



export default getFilmsFromApiWithSearchedText
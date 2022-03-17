// API/TMDBApi.js
import axios from 'axios';
import { API_TOKEN } from '@env'

const getFilmsFromApiWithSearchedText = async (text) => {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=API_TOKEN' + API_TOKEN + '&language=fr&query=' + text

}

export default getFilmsFromApiWithSearchedText
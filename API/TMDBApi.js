// API/TMDBApi.js
import axios from 'axios';

const API_TOKEN = "719a59eafed2d5e7179715e901fc1d29";

const getFilmsFromApiWithSearchedText = async (text) => {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=719a59eafed2d5e7179715e901fc1d29' + API_TOKEN + '&language=fr&query=' + text

}

export default getFilmsFromApiWithSearchedText
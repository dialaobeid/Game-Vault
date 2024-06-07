//const url = 'https://rawg-video-games-database.p.rapidapi.com/games';
//const options = {
//	method: 'GET',
//	headers: {
//		'X-RapidAPI-Key': 'd1e0c52c1cmsh615ad3b8c909815p103232jsn3828439144da',
//		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
//	}
//};
//
//try {
//	const response = await fetch(url, options);
//	const result = await response.text();
//	console.log(result);
//} catch (error) {
//	console.error(error);
//}

// export const searchVideoGames = (query) => {
//  return fetch(`https://rawg-video-games-database.p.rapidapi.com/games${query}`);
// };

// export const searchVideoGames = (query) => {
//   return fetch(`https://api.rawg.io/api/games?key=192b63954c724fb7b71b565cf2c30c0f${query}`);
//  };



import axios from 'axios';

const API_KEY = import.meta.env.RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export const searchVideoGames = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/games?key=192b63954c724fb7b71b565cf2c30c0f`, {
      params: {
        key: API_KEY,
        search: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

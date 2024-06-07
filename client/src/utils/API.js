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

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

export const searchVideoGames = (query) => {
 return fetch(`https://rawg-video-games-database.p.rapidapi.com/games${query}`);
};
import axios from 'axios';

const marvelApi = axios.create({
  baseURL: 'http://localhost:8001/api/v1/',
  headers: {'Content-Type': 'application/json'}
});

const getFavouriteHeroes = () => marvelApi.get('heroes/favourites');

const fetchMasterData = () =>
  Promise.all([
    marvelApi.get('heroes'),
    getFavouriteHeroes()
  ]).then(apiData => ({
    heroes: apiData[0].data,
    favouriteHeroes: apiData[1].data
  }))

const addFavouriteHero = heroId =>
  marvelApi
    .post('heroes/favourites', heroId)
    .then(() => getFavouriteHeroes())
    .then(favouriteHeroes => favouriteHeroes.data);

const deleteFavouriteHero =  heroId =>
  marvelApi
    .delete(`heroes/favourites/${heroId}`)
    .then(() => getFavouriteHeroes())
    .then(favouriteHeroes => favouriteHeroes.data);

const getHeroData = heroId =>
  marvelApi.get(`heroes/${heroId}`).then(apiHero => apiHero.data);

const getComics = comicsIds =>
  Promise.all(
    comicsIds.map(comicsId => marvelApi.get(`comics/${comicsId}`))
  ).then(comicsData => comicsData.map(comics => comics.data))


export {
  fetchMasterData,
  addFavouriteHero,
  deleteFavouriteHero,
  getFavouriteHeroes,
  getHeroData,
  getComics
}

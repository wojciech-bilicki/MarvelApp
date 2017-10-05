'use strict';
const {getTable, getRecordBy, addRecord, removeRecordBy} = require("../db/db.js")
var url = require('url');
const port = require("../config.js").port
var Heroes = require('./HeroesService');


const makeHeroImagePath = imageName => `http://localhost:${port}/assets/portraits/${imageName}`
const withImage = hero => Object.assign({}, hero, {image: makeHeroImagePath(hero.image)})
const getHeroByFromDb = selector => {
  const hero = getRecordBy("heroes",selector)

  if(!hero) return hero

  return withImage(hero)
}
const getHeroesFromDb = () => getTable('heroes').map(withImage)

module.exports.addFavourite = function addFavourite (req, res, next) {
  const heroId = req.swagger.params.heroId.value
  const hero =  getHeroByFromDb(hero => hero.id === heroId)

  if(!hero) {
    res.statusCode = 404
    res.end()
    return
  }

  if(getTable('favourites').includes(heroId)) {
    res.statusCode = 409
    res.end()
    return
  }

  addRecord('favourites', heroId)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(hero, null, 2))
};

module.exports.deleteFavourite = function deleteFavourite (req, res, next) {
    const heroId = req.swagger.params.heroId.value

    const allFavouriteIds = getTable('favourites')
    if(!allFavouriteIds.includes(heroId)) {
      res.statusCode = 404
      res.end()
      return
    }

    removeRecordBy('favourites', id => id === heroId)
    res.statusCode = 204
    res.end()
};

module.exports.getFavourites = function getFavourites (req, res, next) {
  const favouritesIds = getTable('favourites')
  const allHeros = getHeroesFromDb()

  const favourites = allHeros.filter(hero => favouritesIds.includes(hero.id))
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(favourites, null, 2));
};

module.exports.getHeroById = function getHeroById (req, res, next) {
  const heroId = req.swagger.params.heroId.value

  const hero =  getHeroByFromDb(hero => hero.id === heroId)

  if(hero) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(hero, null, 2))
  }
  else {
    res.statusCode = 404
    res.end()
  }
};

module.exports.getHeroes = function getHeroes (req, res, next) {
  const heroes = getHeroesFromDb()

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(heroes, null, 2));
};

module.exports.getHeroesFromDb = getHeroesFromDb
module.exports.getHeroByFromDb = getHeroByFromDb

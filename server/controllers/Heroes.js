'use strict';
const {getTable, getRecordBy, addRecord, removeRecordBy} = require("../db/db.js")
var url = require('url');


var Heroes = require('./HeroesService');

const getHeroBy = getRecordBy.bind(null, "heroes")

module.exports.addFavourite = function addFavourite (req, res, next) {
  const heroId = req.swagger.params.heroId.value
  const hero =  getHeroBy(hero => hero.id === heroId)

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
  const allHeros = getTable('heroes')

  const favourites = allHeros.filter(hero => favouritesIds.includes(hero.id))
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(favourites, null, 2));
};

module.exports.getHeroById = function getHeroById (req, res, next) {
  const heroId = req.swagger.params.heroId.value

  const hero =  getHeroBy(hero => hero.id === heroId)

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
  const heroes = getTable('heroes')

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(heroes, null, 2));
};

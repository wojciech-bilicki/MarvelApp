'use strict';

var url = require('url');
const {getTable, getRecordBy, addRecord, removeRecordBy} = require("../db/db.js")
const {getHeroByFromDb} = require("./Heroes.js")
const port = require("../config.js").port

var Comics = require('./ComicsService');

const makeCoverPath = imageName => `http://localhost:${port}/assets/comics/${imageName}`
const withImage = comic => Object.assign({}, comic, {cover: makeCoverPath(comic.cover)})
const getComicBy = selector => {
  const comic = getRecordBy("comics",selector)

  if(!comic) return comic

  return withImage(comic)
}
const getComicsFromDb = () => getTable('comics').map(withImage)

const comicWithCharacters = comic => Object.assign(
  {},
  comic,
  {characters: comic.characters.map( id => getHeroByFromDb(hero => hero.id === id))}
)

module.exports.getComics = function getComics (req, res, next) {
  const comics = getComicsFromDb().map(comicWithCharacters)

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(comics, null, 2));
};

module.exports.getComicsById = function getComicsById (req, res, next) {
  const comicId = req.swagger.params.comicId.value
  const comic = getComicBy(comic => comic.id === comicId )

  if(!comic) {
    res.statusCode = 404
    res.end()
    return
  }

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(comicWithCharacters(comic), null, 2));
};

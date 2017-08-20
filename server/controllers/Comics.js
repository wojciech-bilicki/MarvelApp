'use strict';

var url = require('url');
const {getTable, getRecordBy, addRecord, removeRecordBy} = require("../db/db.js")

var Comics = require('./ComicsService');

const comicWithCharacters = comic => Object.assign(
  {},
  comic,
  {characters: comic.characters.map( id => getRecordBy('heroes', hero => hero.id === id))}
)

module.exports.getComics = function getComics (req, res, next) {
  const comics = getTable('comics').map(comicWithCharacters)

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(comics, null, 2));
};

module.exports.getComicsById = function getComicsById (req, res, next) {
  const comicId = req.swagger.params.comicId.value
  const comic = getRecordBy('comics', comic => comic.id === comicId )

  if(!comic) {
    res.statusCode = 404
    res.end()
    return
  }

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(comicWithCharacters(comic), null, 2));
};

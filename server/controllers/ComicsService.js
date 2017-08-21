'use strict';

exports.getComics = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "cover" : "aeiou",
  "characters" : [ {
    "place_of_birth" : "Stalingrad, U.S.S.R",
    "image" : "black_widow.jpg",
    "true_name" : "Natalia 'Natasha' Alianovna Romanova",
    "citizenship" : "Former U.S.S.R, U.S.A",
    "name" : "Black Widow",
    "description" : "There are varying accounts of Romanova's early life.",
    "id" : 1,
    "powers" : [ "slowed aging", "enahnced immune system", "martail arts", "pistols" ]
  } ],
  "editor" : "aeiou",
  "description" : "aeiou",
  "id" : 0,
  "title" : "The Call of the Mountain Thing!"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getComicsById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * comicId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "cover" : "aeiou",
  "characters" : [ {
    "place_of_birth" : "Stalingrad, U.S.S.R",
    "image" : "black_widow.jpg",
    "true_name" : "Natalia 'Natasha' Alianovna Romanova",
    "citizenship" : "Former U.S.S.R, U.S.A",
    "name" : "Black Widow",
    "description" : "There are varying accounts of Romanova's early life.",
    "id" : 1,
    "powers" : [ "slowed aging", "enahnced immune system", "martail arts", "pistols" ]
  } ],
  "editor" : "aeiou",
  "description" : "aeiou",
  "id" : 0,
  "title" : "The Call of the Mountain Thing!"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}


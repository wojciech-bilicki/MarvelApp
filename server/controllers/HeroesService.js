'use strict';

exports.addFavourite = function(args, res, next) {
  /**
   * parameters expected in the args:
  * heroId (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "place_of_birth" : "Stalingrad, U.S.S.R",
  "image" : "black_widow.jpg",
  "true_name" : "Natalia 'Natasha' Alianovna Romanova",
  "citizenship" : "Former U.S.S.R, U.S.A",
  "name" : "Black Widow",
  "description" : "There are varying accounts of Romanova's early life.",
  "id" : 1,
  "powers" : [ "slowed aging", "enahnced immune system", "martail arts", "pistols" ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteFavourite = function(args, res, next) {
  /**
   * parameters expected in the args:
  * heroId (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getFavourites = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "place_of_birth" : "Stalingrad, U.S.S.R",
  "image" : "black_widow.jpg",
  "true_name" : "Natalia 'Natasha' Alianovna Romanova",
  "citizenship" : "Former U.S.S.R, U.S.A",
  "name" : "Black Widow",
  "description" : "There are varying accounts of Romanova's early life.",
  "id" : 1,
  "powers" : [ "slowed aging", "enahnced immune system", "martail arts", "pistols" ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getHeroById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * heroId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "place_of_birth" : "Stalingrad, U.S.S.R",
  "image" : "black_widow.jpg",
  "true_name" : "Natalia 'Natasha' Alianovna Romanova",
  "citizenship" : "Former U.S.S.R, U.S.A",
  "name" : "Black Widow",
  "description" : "There are varying accounts of Romanova's early life.",
  "id" : 1,
  "powers" : [ "slowed aging", "enahnced immune system", "martail arts", "pistols" ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getHeroes = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "place_of_birth" : "Stalingrad, U.S.S.R",
  "image" : "black_widow.jpg",
  "true_name" : "Natalia 'Natasha' Alianovna Romanova",
  "citizenship" : "Former U.S.S.R, U.S.A",
  "name" : "Black Widow",
  "description" : "There are varying accounts of Romanova's early life.",
  "id" : 1,
  "powers" : [ "slowed aging", "enahnced immune system", "martail arts", "pistols" ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}


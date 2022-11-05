import {getRandomPositiveNumber,stringLenght} from './util.js';

let createPictureId = 0;
const PHOTOS_DESCRIPTION = [
  'Классная фотка!',
  'Это я вот на даче',
  'Это я в Тайланде',
  'Что за лев этот тигр...',
  'Тайлунг'
];
const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200
};

const getRandomArrayElement = function(elements) {
  return elements[getRandomPositiveNumber(0, elements.length - 1)];
};
const generatePictureId = function() {
  return ++createPictureId;
};

const createPicture = function () {

  return {
    id: generatePictureId(),
    url:`photos/${[generatePictureId()]}.jpg`,
    description: getRandomArrayElement(PHOTOS_DESCRIPTION),
    likes: getRandomPositiveNumber(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
    comments: getRandomPositiveNumber(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX)
  };
};
const similarPicture = Array.from({length:25}, createPicture);

// stringLenght();

export {similarPicture};

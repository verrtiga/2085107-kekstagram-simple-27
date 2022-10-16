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

function getRandomPositiveNumber (a, b) {
  if ( a < 0 || b < 0 ) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
function stringLenght (string, length) {
  return string.length <= length;
}

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


similarPicture();
getRandomPositiveNumber();
stringLenght();
createPicture();


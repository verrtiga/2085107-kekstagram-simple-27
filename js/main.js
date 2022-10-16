const PHOTOS_ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 , 20, 21, 22, 23, 24, 25];
const PHOTOS_DESCRIPTION = [
  'Классная фотка!',
  'Меня бабушка сфоткает лучше',
  'Палец на пол экрана...',
  'Что за лев этот тигр'
];

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

const createPicture = function () {

  return {
    id: getRandomArrayElement(PHOTOS_ID),
    url:`photos/${[getRandomArrayElement(PHOTOS_ID)]}.jpg`,
    description: getRandomArrayElement(PHOTOS_DESCRIPTION),
    likes: getRandomPositiveNumber(15,200),
    comments: getRandomPositiveNumber(0,200)
  };
};
const similarPicture = Array.from({length:25}, createPicture);

similarPicture();
getRandomPositiveNumber();
stringLenght();
createPicture();


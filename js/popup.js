import {createPicture} from './data.js';

const userPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').
  content.querySelector('.picture');

const pictureElement = pictureTemplate.cloneNode(true);
userPictures.appendChild(pictureElement);

const similarPictures = createPicture();

const similarListFtagment = document.createDocumentFragment();

similarPictures.forEach(({url, likes, comments}) => {

  const pictureElements = pictureTemplate.cloneNode(true);
  pictureElements.querySelector('.picture').src = url;
  pictureElements.querySelector('.picture__likes').textContent = likes;
  pictureElements.querySelector('.picture__comments').textContent = comments;
  userPictures.appendChild(pictureElements);

});

userPictures.appendChild(similarListFtagment);

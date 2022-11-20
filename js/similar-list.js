
const userPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').
  content.querySelector('.picture');

const pictureElement = pictureTemplate.cloneNode(true);
userPictures.appendChild(pictureElement);
const clearSimilarList = () => {
  userPictures.innerHTML = '';
};

const renderSimilarList = (somePictures) => {
  const similarListFragment = document.createDocumentFragment();

  somePictures.forEach(({url, likes, comments}) => {

    const pictureElements = pictureTemplate.cloneNode(true);
    pictureElements.querySelector('.picture').src = url;
    pictureElements.querySelector('.picture__likes').textContent = likes;
    pictureElements.querySelector('.picture__comments').textContent = comments;
    userPictures.appendChild(pictureElements);

  });

  userPictures.appendChild(similarListFragment);
};

export {renderSimilarList, clearSimilarList};

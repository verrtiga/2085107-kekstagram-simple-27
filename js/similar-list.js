
const userPicture = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').
  content.querySelector('.picture');


const clearSimilarList = () => {
  userPicture.innerHTML = '';
};

const renderSimilarList = (somePicture) => {
  const similarListFragment = document.createDocumentFragment();

  somePicture.forEach(({url, likes, comments}) => {

    const pictureElements = pictureTemplate.cloneNode(true);
    pictureElements.querySelector('.picture__img').src = url;
    pictureElements.querySelector('.picture__likes').textContent = likes;
    pictureElements.querySelector('.picture__comments').textContent = comments;
    userPicture.appendChild(pictureElements);

  });

  userPicture.appendChild(similarListFragment);
};

export {renderSimilarList, clearSimilarList};

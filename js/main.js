import './util.js';
import './data.js';
import './similar-list.js';
import './user-modal.js';
import './user-form.js';
import './scale.js';
import './effect.js';
import {renderSimilarList} from './similar-list.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((somePictures) => {
    renderSimilarList(somePictures);
  });

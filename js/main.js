import './util.js';
import './data.js';
import './similar-list.js';
import './user-modal.js';
import './user-form.js';
import './scale.js';
import './effect.js';
import {renderSimilarList} from './similar-list.js';
import { setUserFormSubmit } from './user-form.js';
import { closeUserModal } from './user-modal.js';
import {getData} from './api.js';

getData((somePictures) => {
  renderSimilarList(somePictures);
});

setUserFormSubmit(closeUserModal);

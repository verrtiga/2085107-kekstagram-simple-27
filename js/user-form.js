import { sendData } from './api';
import { showAlert } from './util';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form);

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      sendData(
        () => onSuccess(),
        () => showAlert('Не удалось отправить форму, попробуйте еще раз!'),
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};


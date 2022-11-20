import { showAlert } from './util';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form);

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch('https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
          } else {
            showAlert('Не удалось отправить форму, попробуйте еще раз!');
          }
        })
        .catch(() => {
          showAlert('Не удалось отправить форму, попробуйте еще раз!');
        });

    }
  });
};

export {setUserFormSubmit};


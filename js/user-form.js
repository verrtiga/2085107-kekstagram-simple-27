const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    evt.preventDefault();
  }
});


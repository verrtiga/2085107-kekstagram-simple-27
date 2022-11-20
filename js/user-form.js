const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form);

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
    );
  }
});


const getData = (onSucces) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((somePicture) => {
      onSucces(somePicture);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        onFail('Не удалось отправить форму, попробуйте еще раз!');
      }
      onSuccess();
    })
    .catch(() => {
      onFail('Не удалось отправить форму, попробуйте еще раз!');
    });
};

export {getData, sendData};

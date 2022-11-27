const getRandomPositiveNumber = (a, b) => {
  if ( a < 0 || b < 0 ) {
    return NaN;
  }

  const lowValue = Math.ceil(Math.min(a,b));
  const upValue = Math.floor(Math.max(a,b));
  const result = Math.random() * (upValue - lowValue + 1) + lowValue;
  return Math.floor(result);
};

const ALERT_TIME = 5000;
const isEscapeKey = (evt) => evt.key === 'Escape';
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.zIndex = '100';
  alertContainer.style.top = '0';
  alertContainer.style.width = '100%';
  alertContainer.style.height = '100%';
  alertContainer.style.padding = '55px';
  alertContainer.style.alignItems = 'center';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.lineHeight = '50px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_TIME);
};

const stringLenght = (string, length) => string.length <= length;

export {getRandomPositiveNumber,stringLenght, showAlert, isEscapeKey};

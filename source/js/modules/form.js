function inputFormTel() {
  const INPUT_TEL = document.querySelectorAll('input[type="tel"]');

  INPUT_TEL.forEach(function (item) {
    item.addEventListener('input', () => {
      const value = item.value.replace(/\D+/g, '');
      const numberLength = 18;

      const prefixNumber = (str) => {
        if (str === '9') {
          return '+7 (9';
        }
        return '+7 (';
      };

      let result = '';

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }
      item.value = result;
    });

    item.addEventListener('blur', () => {
      if (item.value.length < 18) {
        item.value = '';
      }
    });
  });
}

function inputFormName() {
  const INPUT_NAME = document.querySelectorAll('input[type="text"]');

  INPUT_NAME.forEach(function (item) {
    item.removeAttribute('pattern');
    item.addEventListener('input', () => {
      const value = item.value.replace(/[^a-zA-ZА-Яа-яЁё'-\s]/gi, '');
      const nameLength = 100;

      let result = '';

      for (let i = 0; i < value.length && i < nameLength; i++) {
        result += value[i];
      }
      item.value = result;
    });
  });
}

export {inputFormTel, inputFormName};

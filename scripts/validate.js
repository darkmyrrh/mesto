config =  {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const checkValidity = (formElement, inputElement) => { 
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      inputElement.classList.add(config.inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(config.errorClass);
    } else {
      inputElement.classList.remove(config.inputErrorClass);
      errorElement.classList.remove(config.errorClass);
      errorElement.textContent = '';
    }
  };
  const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

 const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
            buttonElement.setAttribute('disabled', 'disabled');
            evt.target.reset();
          });
          setEventListeners(formElement, config);
        });
        
  };
   
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  enableValidation(config);
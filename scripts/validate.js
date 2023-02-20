config =  {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};


 const getErrorElement = (formElement, inputElement) => {
  return formElement.querySelector(`.${inputElement.id}-error`);
 };

 const showError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = getErrorElement(formElement, inputElement);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideError = (formElement, inputElement, config) => {
  const errorElement = getErrorElement(formElement, inputElement);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

  const checkValidity = (formElement, inputElement, config) => {
      if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideError(formElement, inputElement, config);
    }
  };

  const getButtonElement = (formElement, config) => {
    return formElement.querySelector(config.submitButtonSelector);
  };

  const getInputList = (formElement, config) => {
    return Array.from(formElement.querySelectorAll(config.inputSelector));
  }
 

  const setEventListeners = (formElement, config) => {
    const inputList = getInputList(formElement, config);
    const buttonElement = getButtonElement(formElement, config);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  };

 const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));    
    formList.forEach((formElement) => {    
      const buttonElement = getButtonElement(formElement, config);  
      formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();          
          deactivateButton(buttonElement, config);
        });
      setEventListeners(formElement, config);
    });        
  };
   
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const deactivateButton = (buttonElement, config) => {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  };

  const activateButton = (buttonElement, config) => {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  };

  const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
      deactivateButton(buttonElement, config);
    } else {
      activateButton(buttonElement, config);
    }
  };

  
  enableValidation(config);
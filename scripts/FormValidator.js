export class FormValidator {
  constructor(formElement, config) {
    this.config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
  }
 _getErrorElement(formElement, inputElement) {  
  return formElement.querySelector(`.${inputElement.id}-error`);
 }
 _showError(inputElement, errorMessage) {
  const errorElement = this._getErrorElement(this._formElement, inputElement);
  inputElement.classList.add(this.config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this.config.errorClass);
 }

 _hideError(inputElement) {
    const errorElement = this._getErrorElement(this._formElement, inputElement);
    inputElement.classList.remove(this.config.inputErrorClass);
    errorElement.classList.remove(this.config.errorClass);
    errorElement.textContent = '';
 }
 _checkValidity(inputElement) {
  
      if (!inputElement.validity.valid) {
        this._showError(inputElement, inputElement.validationMessage);
    } else {
        this._hideError(inputElement);
    }
  }
  
 _setEventListeners() {    
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {      
      inputElement.addEventListener('input', () => {        
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {    
      this._setEventListeners();
  };

  resetErrorText() {
    this._inputList.forEach((inputElement) => {
    this._hideError(inputElement);
  });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _disableButton() {
      this._buttonElement.classList.add(this.config.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    };

  _enableButton() {
      this._buttonElement.classList.remove(this.config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    };
  

  _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._disableButton();
      } else {
        this._enableButton();
      }
    };
  }
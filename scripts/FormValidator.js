export class FormValidator {
  constructor(formElement, config) {
    this.config = config;
    this._formElement = formElement;    
  }
 _getErrorElement(formElement, inputElement) {  
  return formElement.querySelector(`.${inputElement.id}-error`);
 }
 _showError(formElement, inputElement, errorMessage) {
  const errorElement = this._getErrorElement(formElement, inputElement);
  inputElement.classList.add(this.config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this.config.errorClass);
 }

 _hideError(formElement, inputElement) {
    const errorElement = this._getErrorElement(formElement, inputElement);
    inputElement.classList.remove(this.config.inputErrorClass);
    errorElement.classList.remove(this.config.errorClass);
    errorElement.textContent = '';
 }
 _checkValidity(formElement, inputElement, config) {
      if (!inputElement.validity.valid) {
        this._showError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      this._hideError(formElement, inputElement);
    }
  }
  _getButtonElement(formElement) {
      return formElement.querySelector(this.config.submitButtonSelector);
  };

  _getInputList(formElement) {
      return Array.from(formElement.querySelectorAll(this.config.inputSelector));
  }
 _setEventListeners(formElement, config) {
    const inputList = this._getInputList(formElement, config);
    const buttonElement = this._getButtonElement(formElement, config);
    this._toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValidity(formElement, inputElement, config);
        this._toggleButtonState(inputList, buttonElement, config);
      });
    });
  };

  enableValidation() {    
      this._setEventListeners(this._formElement, this.config);
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _deactivateButton(buttonElement) {
      buttonElement.classList.add(this.config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    };

  _activateButton(buttonElement) {
      buttonElement.classList.remove(this.config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    };
  

  _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        this._deactivateButton(buttonElement);
      } else {
        this._activateButton(buttonElement);
      }
    };

  }
export class Validator {
  constructor(formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll('.form__input'));
    this._buttonElement = formElement.querySelector('.form__submit');
  }
 _getErrorElement() {
  return this._formElement.querySelector(`.${inputElement.id}-error`);
 }
 _showError() {
  this._inputList.forEach((inputElement) => { 
    this._getErrorElement();
    inputElement.classList.add('form__input_type_error');
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add('form__input-error_active');
  });
 }

 _hideError() {
  this._inputList.forEach((inputElement) => { 
    this._getErrorElement();
  inputElement.classList.remove('form__input_type_error');
  this._errorElement.textContent = '';
  this._errorElement.classList.remove('form__input-error_active');
  });
 }
 _checkValidity() {
  this._inputList.forEach((inputElement) => {
      if (!inputElement.validity.valid) {
      this._showError();
    } else {
      this._hideError();
    }
  });
  }

 _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValidity();
        this._toggleButtonState();
      })
    });
  };

  enableValidation() {    
      this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();          
          this._deactivateButton();
        });
      this._setEventListeners();
  };
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _deactivateButton() {
    this._buttonElement.classList.add('form__submit_inactive');
    this._buttonElement.setAttribute('disabled', 'disabled');
  };

  _activateButton() {
    this._buttonElement.classList.remove('form__submit_inactive');
    this._buttonElement.removeAttribute('disabled');
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._deactivateButton();
    } else {
      this._activateButton();
    }
  };
}

// export class EditProfileValidator extends Validator {

// }
// export class AddNewPlaceValidator extends Validator {

// }
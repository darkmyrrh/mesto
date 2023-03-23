import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({form, handleFormSubmit}, popupSelector) {
        super(popupSelector);
        this._form = form;        
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.form__input');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
      } 
    
    close() {
        super.close();
        this._form.reset();
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            e.stopImmediatePropagation(this._handleFormSubmit);   
            this.close();
        });
    }
}
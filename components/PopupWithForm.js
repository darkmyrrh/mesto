import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({form, handleFormSubmit}, popupSelector) {
        super(popupSelector);
        this._form = form;        
        this.handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {        
        this._inputValues = {};
        this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value
        });
        return this._inputValues;
    }
    
    close() {        
        super.close();
        this._form.reset();
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {            
            e.preventDefault();
            this.handleFormSubmit(this._getInputValues());
            e.stopImmediatePropagation(this.handleFormSubmit);   
            this.close();
        });
    }
}
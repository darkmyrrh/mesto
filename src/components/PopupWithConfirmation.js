import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({form, handleFormSubmit}, popupSelector) {
        super(popupSelector);
        this._form = form;        
        this._handleFormSubmit = handleFormSubmit;
        this._submitButton = this._form.querySelector('.form__submit');
        this._normalText = this._submitButton.textContent;
    }

    open(card) {
        super.open();
        this._card = card;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Сохранение..."
        }
        else {
            this._submitButton.textContent = this._normalText;
        }
    }
   
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._card); 
            this.close();
        });
    }
}
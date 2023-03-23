import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.figure__image');
        this._popupTitle = this._popup.querySelector('.figure__caption');
    }

    open(image, title) {        
        this._popupImage.src = image;
        this._popupImage.alt = title; 
        this._popupTitle.textContent = title;
        super.open();
    }
}
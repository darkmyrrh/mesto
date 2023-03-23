import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(image, title) {        
        this._popup.querySelector('.figure__image').src = image;
        this._popup.querySelector('.figure__caption').textContent = title;
        super.open();
    }
}
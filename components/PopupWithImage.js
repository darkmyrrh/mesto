import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor({image, title}, popupSelector) {
        super(popupSelector);        
        this.link = image;
        this.name = title;
    }

    open() {
        super.open();        
        this._popup.querySelector('.figure__image').src = this.link;
        this._popup.querySelector('.figure__caption').textContent = this.name;
    }
}
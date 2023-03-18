export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        
    }
    
    open() {
        super(open);

    }
}
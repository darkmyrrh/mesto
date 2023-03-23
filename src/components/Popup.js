export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose =  this._handleEscClose.bind(this)
    }
    open() {
        this._popup.classList.add('popup_opened');      
    }
    close() {        
        this._popup.classList.remove('popup_opened');
        this._popup.removeEventListener('keydown', this._handleEscClose);        
    }

    _handleEscClose(e) {        
        if (e.code === 'Escape') {            
            this.close();
         }
    }
    setEventListeners() {
        const buttonClosePopup = this._popup.querySelector('.popup__close');
        buttonClosePopup.addEventListener('click', () => {
            this.close();
        });
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup_opened')) {
                this.close();
            }
        });
    }
}
export class Card {
    constructor(data, templateSelector) {
        this._image = data.link;
        this._title = data.name;
        this._templateSelector = templateSelector;
    }
    _getTemplate() {
        const cardElement = document
          .querySelector('.element-template')
          .content
          .querySelector('.element')
          .cloneNode(true);

        return cardElement;
      }
    generateCard() {        
        this._element = this._getTemplate();
        this._setEventListeners();    
        this._element.querySelector('.element__image').src = this._image;
        this._element.querySelector('.element__title').textContent = this._title; 
        return this._element;
    }
    _deleteCard() {
        this._element.remove();
    }
    _handleLikeButton() {
        this._element.querySelector('.element__like-button').classList.toggle("element__like-button_active");
    }
    _handleOpenPopup() {
        document.querySelector('.popup_image').classList.add('popup_opened');
        document.querySelector('.figure__image').src = this._image;
        document.querySelector('.figure__caption').textContent = this._title;
      }      
    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._handleLikeButton();
          });
          this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteCard();
          });
          this._element.querySelector('.element__image').addEventListener('click', () => {
          this._handleOpenPopup();
        });
}
}
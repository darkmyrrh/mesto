import PopupWithImage from './PopupWithImage.js';

export class Card {
  constructor(data, templateSelector, handleCardClick) {
        this._image = data.link;
        this._title = data.name;
        this._templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
    }    
    
    _getTemplate() {
        const cardElement = document
          .querySelector('.element-template')
          .content
          .querySelector('.element')
          .cloneNode(true);

        return cardElement;
      }
    _getElementImage(element) {
      return element.querySelector('.element__image');
    }
    _getLikeButton(element) {
      return element.querySelector('.element__like-button');
    }
    generateCard() {
        this._element = this._getTemplate();
        const elementImage = this._getElementImage(this._element);
        this._setEventListeners();    
        elementImage.src = this._image;
        elementImage.alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title; 
        return this._element;
    }
    _deleteCard() {
        this._element.remove();
        this._element = null;
    }
    _handleLikeButton() {
      const likeButton = this._getLikeButton(this._element);
      likeButton.classList.toggle('element__like-button_active');
    }
    handleCardClick() {
      
    }

    _handleOpenPopup() {
      const largeImage = new PopupWithImage({image: this._image, title: this._title}, '.popup_image');
      largeImage.open();      
    }
    _setEventListeners() {      
      const likeButton = this._getLikeButton(this._element);
      const elementImage = this._getElementImage(this._element);
      likeButton.addEventListener('click', () => {
            this._handleLikeButton();
          });
      this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteCard();
          }); 
      elementImage.addEventListener('click', () => {
             this._handleOpenPopup();
          });
  }
}
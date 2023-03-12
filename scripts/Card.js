import { figureImage, figureCaption } from "./index.js";

//Еще один использованный мной вариант - прописать figureImage и figureCaption в аргументах конструктора и передать при создании экземпляра класса.
//Оба варианта работают. Поскольку в комментарии было указано "импортировать", я импортировала переменные сюда.

export class Card {
  constructor(data, templateSelector, openPopupFigure) {
        this._image = data.link;
        this._title = data.name;
        this._templateSelector = templateSelector;
        this.openPopupFigure = openPopupFigure;
        this.figureImage = figureImage;
        this.figureCaption = figureCaption;
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

    _handleOpenPopup() {
      this.figureImage.src = this._image;
      this.figureImage.alt = this._title;
      this.figureCaption.textContent = this._title;
      
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
             this.openPopupFigure();
             this._handleOpenPopup();
          });
  }
}
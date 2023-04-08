export class Card {
  constructor(data, userId, templateSelector, handleCardClick, handleLikeButtonClick, handleCardDelete) {
        this._image = data.link;
        this._title = data.name;
        this.id = data._id;     
        this._ownerId = data.owner._id;
        this._myId = userId;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.handleLikeButtonClick = handleLikeButtonClick;
        this._handleCardDelete = handleCardDelete;
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
        this.elementImage = this._element.querySelector('.element__image');
        this.likeButton = this._element.querySelector('.element__like-button')        
        this.deleteButton = this._element.querySelector('.element__delete-button');
        this.likesCounter = this._element.querySelector('.element__likes');
        this.likesCounter.textContent = this._likes.length;
        this._setEventListeners();    
        this.elementImage.src = this._image;
        this.elementImage.alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title;
        if (this._ownerId === this._myId) {
          this.deleteButton.style = 'visibility: visible;';
        };

        this.isLiked()
        
        return this._element;
    }

    isLiked() {
      if (this._likes.find((like) => like._id === this._myId)) {
        this.handleLikeAdded();
        return true;
      };
    }

    
    removeCard() {
        this._element.remove();
        this._element = null;        
    }
    handleLikeAdded() {
     this.likeButton.classList.add('element__like-button_active');
    }

    getLikesNumber(count) {
      this._likes = count;
      this.likesCounter.textContent = this._likes.length;
    } 
    
    handleLikeRemoved() {
      this.likeButton.classList.remove('element__like-button_active');      
    }

    _setEventListeners() {      
      this.likeButton.addEventListener('click', () => {
            this.handleLikeButtonClick(this);
          });
      this.deleteButton.addEventListener('click', () => {
            this._handleCardDelete(this);
          }); 
      
      this.elementImage.addEventListener('click', () => {
             this.handleCardClick(this._image, this._title);
          });
  }
}
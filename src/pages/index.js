import '../pages/index.css';
import Api from '../components/Api.js';
import {Card} from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {config,
        buttonOpenPopupProfile,
        buttonOpenPopupChangeAvatar,
        profileName,
        profileDescription,
        avatar,
        nameInput,
        jobInput,
        formEditProfile,
        formAddNewPlace,
        formConfirmDeleteCard,
        formChangeAvatar,
        buttonOpenPopupAddNewPlace} from '../utils/constants.js'
            
const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-63",
    headers: {
        "content-type": "application/json; charset=UTF-8",
        authorization: 'b94fdff7-1397-48ac-8fa6-b1bcc959d2d6'
    }
});

const userInfo = new UserInfo(profileName, profileDescription, avatar);
const popupImage = new PopupWithImage('.popup_image');
const validatorFormAddNewPlace = new FormValidator(formAddNewPlace, config);
const validatorFormEditProfile = new FormValidator(formEditProfile, config);
const validatorFormChangeAvatar = new FormValidator(formChangeAvatar, config);

const popupEditProfile = new PopupWithForm({form: formEditProfile, handleFormSubmit: (formData) => {
    popupEditProfile.renderLoading(true);
    api.changeUserDetails(formData)
    .then((data) => {
        userInfo.setUserInfo(data.name, data.about);
    })
    .catch((err) => {
        alert(err);
    })
    .finally(() => {
        popupEditProfile.renderLoading(false);
    });
    validatorFormEditProfile.disableButton();
}}, '.popup_edit');

const popupChangeAvatar = new PopupWithForm({form: formChangeAvatar, handleFormSubmit: (formData) => {
    popupChangeAvatar.renderLoading(true);
    api.changeUserAvatar(formData)
    .then((data) => {
        userInfo.setUserAvatar(data.avatar);
    })
    .catch((err) => {
        alert(err);
    })
    .finally(() => {
        popupChangeAvatar.renderLoading(false);
    });
    validatorFormChangeAvatar.disableButton();
}}, '.popup_change-avatar');

const popupAddNewPlace = new PopupWithForm({form: formAddNewPlace, handleFormSubmit: (formData) => {
    popupAddNewPlace.renderLoading(true);
    api.addNewCard(formData)
    .then((data) => {
        const cardElement = createCard(data, userInfo.getUserInfo().id);
        cardList.addItem(cardElement);
    })
    .catch((err) => {
        alert(err);
    })
    .finally(() => {
        popupAddNewPlace.renderLoading(false);
    });
    
    validatorFormAddNewPlace.disableButton();
}}, '.popup_add');

const popupConfirmDelete = new PopupWithConfirmation({form: formConfirmDeleteCard, handleFormSubmit: ((card) => {
    popupConfirmDelete.renderLoading(true);
    api.deleteCard(card.id)
    .then(() => {
        card.removeCard()
    })
    .catch((err) => {
        alert(err);
    })
    .finally(() => {
        popupConfirmDelete.renderLoading(false);
    })
})}, '.popup_confirm');

const userData = api.getUserDetails();
userData.then((data) => {
    userInfo.setUserInfo(
        data.name, data.about, data._id     
        );
    userInfo.setUserAvatar( 
        avatar.src = data.avatar
    )
    
})
.catch((err) => {
    alert(err);
});



let cardList;

const cards = api.getInitialCards();
cards.then((data) => {
    cardList = new Section({
        items: data.reverse(),
        renderer: item => {
            const cardElement = createCard(item, userInfo.getUserInfo().id);
            cardList.addItem(cardElement);            
        }
        
      }, '.elements');
    
    cardList.renderItems();
})
.catch((err) => {
        alert(err);
    });




Promise.all([api.getUserDetails(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData.name, userData.about, userData._id);
        cards.forEach((card) => createCard(card, userData._id));
    });

popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddNewPlace.setEventListeners();
popupChangeAvatar.setEventListeners();
popupConfirmDelete.setEventListeners();

validatorFormEditProfile.enableValidation();
validatorFormAddNewPlace.enableValidation();
validatorFormChangeAvatar.enableValidation();

function createCard(data, ownerId) {
    const card = new Card(data, ownerId, '.element-template', handleCardClick, handleLikeButtonClick, handleCardDelete);
    
    const cardElement = card.generateCard();
   
    return cardElement;    
}

function handleCardClick(image, title) {        
    popupImage.open(image, title);
}

function handleLikeButtonClick (card) {
    if (!card.isLiked()) {
        api.addLike(card.id)
        .then((data) => {            
            card.handleLikeAdded();
            card.getLikesNumber(data.likes);            
        })
    }
    else {
        api.deleteLike(card.id)
        .then((data) => {            
            card.handleLikeRemoved();
            card.getLikesNumber(data.likes);
        })
    }
}

function handleCardDelete(card) {
    popupConfirmDelete.open(card);
}


function openPopupEditUser() {
    popupEditProfile.open();
    const info = userInfo.getUserInfo();
    nameInput.value = info.user;
    jobInput.value = info.job;
    validatorFormEditProfile.resetValidation();
}

function openPopupChangeAvatar() {
    popupChangeAvatar.open();    
    validatorFormChangeAvatar.resetValidation();
}

function openPopupAddNewPlace() {     
    popupAddNewPlace.open();
    validatorFormAddNewPlace.resetValidation();
}


buttonOpenPopupProfile.addEventListener('click', openPopupEditUser);
buttonOpenPopupAddNewPlace.addEventListener('click', openPopupAddNewPlace);
buttonOpenPopupChangeAvatar.addEventListener('click', openPopupChangeAvatar);







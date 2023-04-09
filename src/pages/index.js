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
        popupEditProfile.close();
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
        popupChangeAvatar.close();
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
        popupAddNewPlace.close();
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
        card.removeCard();
        popupConfirmDelete.close();
    })
    .catch((err) => {
        alert(err);
    })
    .finally(() => {
        popupConfirmDelete.renderLoading(false);
    })
})}, '.popup_confirm');

const cardList =  new Section({renderer: createCard} ,'.elements');


Promise.all([api.getUserDetails(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData.name, userData.about, userData._id);
        userInfo.setUserAvatar(userData.avatar);
        cardList.renderItems(cards.reverse());
    })
    .catch((err) => {
        alert(err);
    });

popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddNewPlace.setEventListeners();
popupChangeAvatar.setEventListeners();
popupConfirmDelete.setEventListeners();

validatorFormEditProfile.enableValidation();
validatorFormAddNewPlace.enableValidation();
validatorFormChangeAvatar.enableValidation();

function createCard(data) {
    const card = new Card(data, userInfo.getUserInfo().id, '.element-template', handleCardClick, handleLikeButtonClick, handleCardDelete);
    
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
        .catch((err) => {
            alert(err);
        });
    }
    else {
        api.deleteLike(card.id)
        .then((data) => {            
            card.handleLikeRemoved();
            card.getLikesNumber(data.likes);
        })
        .catch((err) => {
            alert(err);
        });
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
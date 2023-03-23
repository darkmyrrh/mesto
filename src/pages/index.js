import '../pages/index.css';
import {Card} from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards,
        config,
        buttonOpenPopupProfile,
        profileName,
        profileDescription,
        nameInput,
        jobInput,
        formEditProfile,
        formAddNewPlace,
        buttonOpenPopupAddNewPlace} from '../utils/constants.js'



const userInfo = new UserInfo(profileName, profileDescription);
const popupImage = new PopupWithImage('.popup_image');
const validatorFormAddNewPlace = new FormValidator(formAddNewPlace, config);
const validatorFormEditProfile = new FormValidator(formEditProfile, config);
const popupEditProfile = new PopupWithForm({form: formEditProfile, handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.user, formData.job);
    validatorFormEditProfile.disableButton();
}}, '.popup_edit');
const popupAddNewPlace = new PopupWithForm({form: formAddNewPlace, handleFormSubmit: (formData) => {
    const cardElement = createCard(formData.name, formData.link);
    cardList.addItem(cardElement);
    validatorFormAddNewPlace.disableButton();
}}, '.popup_add');

popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddNewPlace.setEventListeners();

validatorFormEditProfile.enableValidation();
validatorFormAddNewPlace.enableValidation();


const cardList = new Section({
    items: initialCards.reverse(),
    renderer: (item) => {
        const cardElement = createCard(item.name, item.link);
        cardList.addItem(cardElement);        
    }
    
  }, '.elements');

  cardList.renderItems();



function createCard(name, link) {
    const card = new Card({name: name, link: link}, '.element-template', handleCardClick);
    const cardElement = card.generateCard();    
    return cardElement;
}

function handleCardClick(image, title) {        
    popupImage.open(image, title);
}


function openPopupEditUser() {
    popupEditProfile.open();
    const info = userInfo.getUserInfo();
    nameInput.value = info.user;
    jobInput.value = info.job;
    validatorFormEditProfile.resetValidation();
}

function openPopupAddNewPlace() {     
    popupAddNewPlace.open();
    validatorFormAddNewPlace.resetValidation();
}


buttonOpenPopupProfile.addEventListener('click', openPopupEditUser);
buttonOpenPopupAddNewPlace.addEventListener('click', openPopupAddNewPlace);







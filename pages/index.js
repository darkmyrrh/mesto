import {Card} from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const initialCards = [{name: 'Энгельс', link: 'images/elements-engels.jpg'},
{name: 'Сочи', link: 'images/elements-sochi.jpg'},
{name: 'Санкт-Петербург', link: 'images/elements-stpetersburg.jpg'},
{name: 'Хвалынск', link: 'images/elements-khvalynsk.jpg'},
{name: 'Воронеж', link: 'images/elements-voronezh.jpg'},
{name: 'Выборг', link: 'images/elements-vyborg.jpg'}];


const config =  {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

const buttonOpenPopupProfile = document.querySelector('.profile-info__edit-button');
const profileName = document.querySelector('.profile-info__name');
const profileDescription = document.querySelector('.profile-info__description');
const nameInput = document.querySelector('.form__input_el_name');
const jobInput = document.querySelector('.form__input_el_job');
const formEditProfile = document.forms.editprofile;
const formAddNewPlace = document.forms.addnew;
const buttonOpenPopupAddNewPlace = document.querySelector('.profile__add-button');

const elements = document.querySelector('.elements');
const placeName = document.querySelector('.form__input_el_place');
const placeLink = document.querySelector('.form__input_el_link');
const figure = document.querySelector('.figure');
export const figureImage = figure.querySelector('.figure__image');
export const figureCaption = figure.querySelector('.figure__caption');

const userInfo = new UserInfo(profileName, profileDescription);
const validatorFormAddNewPlace = new FormValidator(formAddNewPlace, config);
const validatorFormEditProfile = new FormValidator(formEditProfile, config);
const popupEditProfile = new PopupWithForm({form: formEditProfile, handleFormSubmit: submitFormEditUser}, '.popup_edit');
const popupAddNewPlace = new PopupWithForm({form: formAddNewPlace, handleFormSubmit: submitFormAddNewPlace}, '.popup_add');

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
    const popupImage = new PopupWithImage('.popup_image');    
    popupImage.open(image, title);
}


function openPopupEditUser() {
    popupEditProfile.open();
    validatorFormEditProfile.resetErrorText();
    userInfo.getUserInfo(nameInput, jobInput);
}

function openPopupAddNewPlace() {     
    popupAddNewPlace.open();
    validatorFormAddNewPlace.resetErrorText();
}



function submitFormEditUser() {
    userInfo.setUserInfo(nameInput, jobInput);
};

function submitFormAddNewPlace() {
    const cardElement = createCard(placeName.value, placeLink.value);
    cardList.addItem(cardElement);
    validatorFormAddNewPlace.disableButton();
};


buttonOpenPopupProfile.addEventListener('click', openPopupEditUser);
buttonOpenPopupAddNewPlace.addEventListener('click', openPopupAddNewPlace);
// formEditProfile.addEventListener('submit', submitFormEditUser);
// formAddNewPlace.addEventListener('submit', submitFormAddNewPlace);






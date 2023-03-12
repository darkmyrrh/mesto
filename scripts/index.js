import {Card} from './Card.js';
import { FormValidator } from './FormValidator.js';

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
const buttonsClosePopup = document.querySelectorAll('.popup__close');
const formEditProfile = document.forms.editprofile;
const formAddNewPlace = document.forms.addnew;
const buttonOpenPopupAddNewPlace = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_edit');
const popupAddNewPlace = document.querySelector('.popup_add');
const popupShowFigure = document.querySelector('.popup_image');
const elements = document.querySelector('.elements');
const placeName = document.querySelector('.form__input_el_place');
const placeLink = document.querySelector('.form__input_el_link');
const figure = document.querySelector('.figure');
export const figureImage = figure.querySelector('.figure__image');
export const figureCaption = figure.querySelector('.figure__caption');

const validatorFormAddNewPlace = new FormValidator(formAddNewPlace, config);
const validatorFormEditProfile = new FormValidator(formEditProfile, config);

validatorFormEditProfile.enableValidation();
validatorFormAddNewPlace.enableValidation();


initialCards.forEach((item) => {
    const cardElement = createCard(item.name, item.link);
    elements.append(cardElement);
});

function createCard(name, link) {
    const card = new Card({ name: name, link: link }, '.element-template', openPopupFigure);
    const cardElement = card.generateCard();
    return cardElement;
}


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);        
};


function editUser() {    
    openPopup(popupEditProfile);
    validatorFormEditProfile.resetErrorText();
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;    
}

function openPopupAddNewPlace() {     
    openPopup(popupAddNewPlace);
    validatorFormAddNewPlace.resetErrorText();  
    formAddNewPlace.reset();
}

function openPopupFigure() {
    openPopup(popupShowFigure);
    
}


function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape);
};

buttonsClosePopup.forEach((buttonClosePopup) => {
    buttonClosePopup.addEventListener('click', () => {
        const activePopup = buttonClosePopup.closest('.popup');
        closePopup(activePopup);
    });

});

function submitFormEditUser(e) {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEditProfile);
};

function submitFormAddNewPlace(e) {
    e.preventDefault();
    const cardElement = createCard(placeName.value, placeLink.value);
    elements.prepend(cardElement);
    closePopup(popupAddNewPlace);
    validatorFormAddNewPlace.disableButton(); 
    //добавила также блокировку кнопки здесь, 
    // т.к., если не заблокировать сразу после отправки, 
    // при быстром нажатии Enter могут добавляться пустые карточки 
    e.target.reset();
};

function closePopupByEscape(e) {
    if (e.code === 'Escape') {
       const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup_opened')) {
        closePopup(e.target);
    }
});


buttonOpenPopupProfile.addEventListener('click', editUser);
buttonOpenPopupAddNewPlace.addEventListener('click', openPopupAddNewPlace);
formEditProfile.addEventListener('submit', submitFormEditUser);
formAddNewPlace.addEventListener('submit', submitFormAddNewPlace);






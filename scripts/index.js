import {Card} from "./card.js";
import { Validator } from "./validator.js";

const initialCards = [{name: "Энгельс", link: "images/elements-engels.jpg"},
{name: "Сочи", link: "images/elements-sochi.jpg"},
{name: "Санкт-Петербург", link: "images/elements-stpetersburg.jpg"},
{name: "Хвалынск", link: "images/elements-khvalynsk.jpg"},
{name: "Воронеж", link: "images/elements-voronezh.jpg"},
{name: "Выборг", link: "images/elements-vyborg.jpg"}];

const editProfileButton = document.querySelector(".profile-info__edit-button");
const profileName = document.querySelector(".profile-info__name");
const profileDescription = document.querySelector(".profile-info__description");
const nameInput = document.querySelector(".form__input_el_name");
const jobInput = document.querySelector(".form__input_el_job");
const closePopupButtons = document.querySelectorAll(".popup__close");
const formEditProfile = document.querySelector(".popup__container_edit-form");
const formAddNewPlace = document.querySelector(".popup__container_add-form");
const addNewPlaceButton = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup_edit");
const popupAddNewPlace = document.querySelector(".popup_add");

const elements = document.querySelector(".elements");

const placeName = document.querySelector(".form__input_el_place");
const placeLink = document.querySelector(".form__input_el_link");
const inputs = Array.from(document.querySelectorAll(".form__input"));
const spanMessages = Array.from(document.querySelectorAll(".form__input-error"));

initialCards.forEach((item) => {
    const card = new Card(item, '.element-template');
    const cardElement = card.generateCard();
    elements.append(cardElement);
  });

const addNewPlace = new Validator(formAddNewPlace);


function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closePopupByEscape);
    resetErrorText();
};


function editUser() {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

function openPopupAddNewPlace() {
    openPopup(popupAddNewPlace);
    addNewPlace.enableValidation();
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closePopupByEscape);
};

closePopupButtons.forEach(function (closePopupButton) {
    closePopupButton.addEventListener("click", function () {
        const activePopup = closePopupButton.closest(".popup");
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
    const card = new Card({ name: placeName.value, link: placeLink.value }, '.element-template');
    const cardElement = card.generateCard();
    elements.prepend(cardElement);
    closePopup(popupAddNewPlace);
    e.target.reset();
};

function closePopupByEscape(e) {
    if (e.code === 'Escape') {
       const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
};

document.addEventListener("click", (e) => {
    if (e.target.classList.contains('popup_opened')) {
        closePopup(e.target);
    }
});

function resetErrorText() {
    spanMessages.forEach((spanMessage) => {
        spanMessage.textContent = "";
    });
    inputs.forEach((input) => { 
        input.classList.remove("form__input_type_error"); 
    });
}



editProfileButton.addEventListener("click", editUser);
addNewPlaceButton.addEventListener("click", openPopupAddNewPlace);
formEditProfile.addEventListener('submit', submitFormEditUser);
formAddNewPlace.addEventListener('submit', submitFormAddNewPlace);





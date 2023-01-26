let editProfile = document.querySelector(".profile-info__edit-button");
let popup = document.querySelector(".popup");
const formEdit = document.forms.editprofile;
const formAdd = document.forms.addnew;
let profileName = document.querySelector(".profile-info__name");
let profileDescription = document.querySelector(".profile-info__description");
let nameInput = document.querySelector(".form__item_el_name");
let jobInput = document.querySelector(".form__item_el_job");
let closeButton = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__container");
const addButton = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector("")

const elements = document.querySelector(".elements");
const initialCards = [{name: "Энгельс", link: "images/elements-engels.jpg"},
{name: "Сочи", link: "images/elements-sochi.jpg"},
{name: "Санкт-Петербург", link: "images/elements-stpetersburg.jpg"},
{name: "Хвалынск", link: "images/elements-khvalynsk.jpg"},
{name: "Воронеж", link: "images/elements-voronezh.jpg"},
{name: "Выборг", link: "images/elements-vyborg.jpg"}];

const elementTemplate = document.querySelector(".element-template").content;

function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
};

editProfile.addEventListener("click", openPopup);
addButton.addEventListener("click", openPopup);

function closePopup() {
    popup.classList.remove("popup_opened");
};

closeButton.addEventListener("click", closePopup);


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);

initialCards.forEach(function (element) {
    const cardElement = elementTemplate.cloneNode(true);
    cardElement.querySelector(".element__image").src = element.link;
    cardElement.querySelector(".element__title").textContent = element.name;
    cardElement.querySelector(".element__like-button").addEventListener("click", function(evt) {
        evt.target.classList.toggle("element__like-button_active");
    });

    const deleteButton = cardElement.querySelector(".element__delete-button").addEventListener("click", function() {
        const elementItem = deleteButton.closest(".element");
        elementItem.remove();
    });

    elements.append(cardElement);

});




let editProfile = document.querySelector(".profile-info__edit-button");
let popups = document.querySelectorAll(".popup");
let profileName = document.querySelector(".profile-info__name");
let profileDescription = document.querySelector(".profile-info__description");
let nameInput = document.querySelector(".form__item_el_name");
let jobInput = document.querySelector(".form__item_el_job");
let closeButtons = document.querySelectorAll(".popup__close");
let formElement = document.querySelector(".popup__container");
const addButton = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const elements = document.querySelector(".elements");
const deleteButtons = document.querySelectorAll(".element__delete-button");
const initialCards = [{name: "Энгельс", link: "images/elements-engels.jpg"},
{name: "Сочи", link: "images/elements-sochi.jpg"},
{name: "Санкт-Петербург", link: "images/elements-stpetersburg.jpg"},
{name: "Хвалынск", link: "images/elements-khvalynsk.jpg"},
{name: "Воронеж", link: "images/elements-voronezh.jpg"},
{name: "Выборг", link: "images/elements-vyborg.jpg"}];

const elementTemplate = document.querySelector(".element-template").content;

initialCards.forEach(function (element) {
    const cardElement = elementTemplate.cloneNode(true);
    cardElement.querySelector(".element__image").src = element.link;
    cardElement.querySelector(".element__title").textContent = element.name;
    cardElement.querySelector(".element__like-button").addEventListener("click", function(evt) {
        evt.target.classList.toggle("element__like-button_active");
    });

    elements.append(cardElement);

});

function openPopup(popup) {
    popup.classList.add("popup_opened");    
};


function editUser() {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

editProfile.addEventListener("click", editUser);

function addNew() {
    openPopup(popupAdd);
    
        /*const newCard = elementTemplate.cloneNode(true);
        newCard.querySelector(".element__image").src = document.querySelector(".form__item_el_link").value;
        newCard.querySelector(".element__title").textContent = document.querySelector(".form__item_el_place").value;
        elements.prepend(newCard);   */
} 



addButton.addEventListener("click", addNew);

function closePopup() {
    popups.forEach (function (popup) {
        popup.classList.remove("popup_opened");
    });
};

closeButtons.forEach(function (closeButton){
    closeButton.addEventListener("click", function() {
        const activePopup = closeButton.closest(".popup");
        closePopup(activePopup);
    });
});

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);

deleteButtons.forEach(function (deleteButton) {
    deleteButton.addEventListener("click", function() {
    const elementItem = deleteButton.closest(".element");
    elementItem.remove();
    
}); console.log('card deleted?');
});




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
const popupShowFigure = document.querySelector(".popup_image");
const elements = document.querySelector(".elements");
const elementTemplate = document.querySelector(".element-template").content;
const figure = document.querySelector(".figure");
const figureImage = figure.querySelector(".figure__image");
const figureCaption = figure.querySelector(".figure__caption");
const placeName = document.querySelector(".form__input_el_place");
const placeLink = document.querySelector(".form__input_el_link");
const inputs = Array.from(document.querySelectorAll(".form__input"));
const spanMessages = Array.from(document.querySelectorAll(".form__input-error"));

function renderInitialCards() {
    const cards = initialCards.map((createCard));
    elements.append(...cards);
}

function deleteCard(evt) {
    evt.target.closest(".element").remove();
}

function createCard(element) {
    const card = elementTemplate.cloneNode(true);
    const cardImage = card.querySelector(".element__image");
    cardImage.src = element.link;
    cardImage.alt = element.name;
    const cardTitle = card.querySelector(".element__title");
    cardTitle.textContent = element.name;
    cardImage.addEventListener("click", () => {
        openPopup(popupShowFigure);
        figureImage.src = cardImage.src;
        figureImage.alt = cardImage.alt;
        figureCaption.textContent = cardTitle.textContent;
    });
    card.querySelector(".element__like-button").addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__like-button_active");
    });
    card.querySelector(".element__delete-button").addEventListener("click", deleteCard);
    return card;
}

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
    placeName.value = "";
    placeLink.value = "";
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
    const card = createCard({ name: placeName.value, link: placeLink.value });
    elements.prepend(card);
    closePopup(popupAddNewPlace);
    e.target.reset();
    /* я оставила сброс только здесь вместо сабмита при валидации, 
    поскольку в противном случае также сбрасываюся значения 
    у формы редактирования профиля, а этого происходить не должно. */
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


renderInitialCards();
editProfileButton.addEventListener("click", editUser);
addNewPlaceButton.addEventListener("click", openPopupAddNewPlace);
formEditProfile.addEventListener('submit', submitFormEditUser);
formAddNewPlace.addEventListener('submit', submitFormAddNewPlace);





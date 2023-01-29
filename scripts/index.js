const editProfile = document.querySelector(".profile-info__edit-button");
const popups = document.querySelectorAll(".popup");
const profileName = document.querySelector(".profile-info__name");
const profileDescription = document.querySelector(".profile-info__description");
const nameInput = document.querySelector(".form__item_el_name");
const jobInput = document.querySelector(".form__item_el_job");
const closeButtons = document.querySelectorAll(".popup__close");
const formEdit = document.querySelector(".popup__container_edit-form");
const formAdd = document.querySelector(".popup__container_add-form");
const addButton = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupFigure = document.querySelector(".popup_image");
const elements = document.querySelector(".elements");
const initialCards = [{name: "Энгельс", link: "images/elements-engels.jpg"},
{name: "Сочи", link: "images/elements-sochi.jpg"},
{name: "Санкт-Петербург", link: "images/elements-stpetersburg.jpg"},
{name: "Хвалынск", link: "images/elements-khvalynsk.jpg"},
{name: "Воронеж", link: "images/elements-voronezh.jpg"},
{name: "Выборг", link: "images/elements-vyborg.jpg"}];
const elementTemplate = document.querySelector(".element-template").content;

function renderCards() {
    const cards = initialCards.map((element) => {
        return createCard(element);
    });
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
        openPopup(popupFigure);
        const figure = document.querySelector(".figure");
        figure.querySelector(".figure__image").src = cardImage.src;
        figure.querySelector(".figure__image").alt = cardImage.alt;
        figure.querySelector(".figure__caption").textContent = cardTitle.textContent;
    });
    card.querySelector(".element__like-button").addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__like-button_active");        
    });
    card.querySelector(".element__delete-button").addEventListener("click", deleteCard);
    return card;
}

function openPopup(popup) {
    popup.classList.add("popup_opened");    
};


function editUser() {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

function addNew() {
    openPopup(popupAdd);
} 

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

function handleFormEditSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
};

function handleFormAddSubmit (e) {
    e.preventDefault();
    const name = document.querySelector(".form__item_el_place").value;
    const link = document.querySelector(".form__item_el_link").value;
    const card = createCard({name, link});
    elements.prepend(card);    
    closePopup();
    e.target.reset();
};

renderCards();
editProfile.addEventListener("click", editUser);
addButton.addEventListener("click", addNew);
formEdit.addEventListener('submit', handleFormEditSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);




let editProfile = document.querySelector(".profile-info__edit-button");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile-info__name");
let profileDescription = document.querySelector(".profile-info__description");
let nameInput = document.querySelector(".form__item_el_name");
let jobInput = document.querySelector(".form__item_el_job");

function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
};

editProfile.addEventListener("click", openPopup);

let closeButton = document.querySelector(".popup__close");
function closePopup() {
    popup.classList.remove("popup_opened");
};

closeButton.addEventListener("click", closePopup);



let formElement = document.querySelector(".popup__container");
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popup.classList.remove("popup_opened");
};

formElement.addEventListener('submit', handleFormSubmit);


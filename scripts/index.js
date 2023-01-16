let editProfile = document.querySelector(".profile-info__edit-bitton");
let showPopup = document.querySelector(".popup");
function openPopup() {
    showPopup.classList.add("popup_opened");
};

editProfile.addEventListener("click", openPopup);

let closeButton = document.querySelector(".popup__close");
function closePopup() {
    showPopup.classList.remove("popup_opened");
};

closeButton.addEventListener("click", closePopup);

let profileName = document.querySelector(".profile-info__name");
let profileDescription = document.querySelector(".profile-info__description");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__description");
nameInput.value = profileName.textContent;
jobInput.value = profileDescription.textContent;

let formElement = document.querySelector(".popup__container");
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
};

formElement.addEventListener('submit', handleFormSubmit);


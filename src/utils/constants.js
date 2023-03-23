const engelsImage = new URL('../images/elements-engels.jpg', import.meta.url);
const sochiImage = new URL( '../images/elements-sochi.jpg', import.meta.url);
const stpetersburgImage = new URL('../images/elements-stpetersburg.jpg', import.meta.url);
const kvalynskImage = new URL('../images/elements-khvalynsk.jpg', import.meta.url);
const voronezhImage = new URL('../images/elements-voronezh.jpg', import.meta.url);
const vyborgImage = new URL('../images/elements-vyborg.jpg', import.meta.url);

export const initialCards = [{name: 'Энгельс', link: engelsImage},
{name: 'Сочи', link: sochiImage},
{name: 'Санкт-Петербург', link: stpetersburgImage},
{name: 'Хвалынск', link: kvalynskImage},
{name: 'Воронеж', link: voronezhImage},
{name: 'Выборг', link: vyborgImage}];


export const config =  {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

export const buttonOpenPopupProfile = document.querySelector('.profile-info__edit-button');
export const profileName = document.querySelector('.profile-info__name');
export const profileDescription = document.querySelector('.profile-info__description');
export const nameInput = document.querySelector('.form__input_el_name');
export const jobInput = document.querySelector('.form__input_el_job');
export const formEditProfile = document.forms.editprofile;
export const formAddNewPlace = document.forms.addnew;
export const buttonOpenPopupAddNewPlace = document.querySelector('.profile__add-button');
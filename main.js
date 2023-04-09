(()=>{"use strict";var t={902:(t,e,n)=>{t.exports=n.p+"3d6fa60dedda505491e5.jpg"},822:(t,e,n)=>{t.exports=n.p+"a01d69ba0858a638e09a.jpg"},581:(t,e,n)=>{t.exports=n.p+"34bd09e82314ac7424fc.jpg"},979:(t,e,n)=>{t.exports=n.p+"1db31596aff3d343e5e6.jpg"},733:(t,e,n)=>{t.exports=n.p+"42fec8648899e1510201.jpg"},252:(t,e,n)=>{t.exports=n.p+"0130ae7b254c87c89c51.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="",n.b=document.baseURI||self.location.href,(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_getData",value:function(t){return t.ok?t.json():Promise.reject("Произошла ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._getData)}},{key:"getUserDetails",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._getData)}},{key:"changeUserDetails",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.user,about:t.job})}).then(this._getData)}},{key:"changeUserAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._getData)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._getData)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._getData)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._getData)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getData)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._image=e.link,this._title=e.name,this.id=e._id,this._ownerId=e.owner._id,this._myId=n,this._likes=e.likes,this._templateSelector=r,this.handleCardClick=o,this.handleLikeButtonClick=i,this._handleCardDelete=u}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(".element-template").content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this.elementImage=this._element.querySelector(".element__image"),this.likeButton=this._element.querySelector(".element__like-button"),this.deleteButton=this._element.querySelector(".element__delete-button"),this.likesCounter=this._element.querySelector(".element__likes"),this.likesCounter.textContent=this._likes.length,this._setEventListeners(),this.elementImage.src=this._image,this.elementImage.alt=this._title,this._element.querySelector(".element__title").textContent=this._title,this._ownerId===this._myId&&(this.deleteButton.style="visibility: visible;"),this.isLiked(),this._element}},{key:"isLiked",value:function(){var t=this;if(this._likes.find((function(e){return e._id===t._myId})))return this.handleLikeAdded(),!0}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"handleLikeAdded",value:function(){this.likeButton.classList.add("element__like-button_active")}},{key:"getLikesNumber",value:function(t){this._likes=t,this.likesCounter.textContent=this._likes.length}},{key:"handleLikeRemoved",value:function(){this.likeButton.classList.remove("element__like-button_active")}},{key:"_setEventListeners",value:function(){var t=this;this.likeButton.addEventListener("click",(function(){t.handleLikeButtonClick(t)})),this.deleteButton.addEventListener("click",(function(){t._handleCardDelete(t)})),this.elementImage.addEventListener("click",(function(){t.handleCardClick(t._image,t._title)}))}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.code&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){t.close()})),document.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},p.apply(this,arguments)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".figure__image"),e._popupTitle=e._popup.querySelector(".figure__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=t,this._popupImage.alt=e,this._popupTitle.textContent=e,p(d(u.prototype),"open",this).call(this)}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.form,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=r,n._handleFormSubmit=o,n._submitButton=n._form.querySelector(".form__submit"),n._normalText=n._submitButton.textContent,n}return e=u,(n=[{key:"open",value:function(t){v(g(u.prototype),"open",this).call(this),this._card=t}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._normalText}},{key:"setEventListeners",value:function(){var t=this;v(g(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._card)}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var E=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=n,this._formElement=e,this._inputList=Array.from(e.querySelectorAll(n.inputSelector)),this._buttonElement=e.querySelector(n.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_getErrorElement",value:function(t,e){return t.querySelector(".".concat(e.id,"-error"))}},{key:"_showError",value:function(t,e){var n=this._getErrorElement(this._formElement,t);t.classList.add(this.config.inputErrorClass),n.textContent=e,n.classList.add(this.config.errorClass)}},{key:"_hideError",value:function(t){var e=this._getErrorElement(this._formElement,t);t.classList.remove(this.config.inputErrorClass),e.classList.remove(this.config.errorClass),e.textContent=""}},{key:"_checkValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideError(e),t.disableButton()}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this.config.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this.config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this._enableButton()}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var O=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.form,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=r,n._handleFormSubmit=o,n._inputList=n._form.querySelectorAll(".form__input"),n._submitButton=n._form.querySelector(".form__submit"),n._normalText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){T(B(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._normalText}},{key:"setEventListeners",value:function(){var t=this;T(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),e.stopImmediatePropagation(t._handleFormSubmit)}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var q=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=e,this._userInfo=n,this._avatar=r,this._id=o}var e,n;return e=t,n=[{key:"setUserInfo",value:function(t,e,n){this._userName.textContent=t,this._userInfo.textContent=e,this._id=n}},{key:"getUserInfo",value:function(){return{user:this._userName.textContent,job:this._userInfo.textContent,id:this._id}}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}},{key:"getUserAvatar",value:function(){return{avatar:this._avatar.src}}}],n&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=(new URL(n(902),n.b),new URL(n(581),n.b),new URL(n(979),n.b),new URL(n(822),n.b),new URL(n(733),n.b),new URL(n(252),n.b),{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"}),A=document.querySelector(".profile-info__edit-button"),V=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile-info__name"),N=document.querySelector(".profile-info__description"),J=document.querySelector(".profile__avatar"),G=document.querySelector(".form__input_el_name"),H=document.querySelector(".form__input_el_job"),M=document.forms.editprofile,z=document.forms.addnew,$=document.forms.confirm,K=document.forms.changeavatar,Q=document.querySelector(".profile__add-button");function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var X=new r({url:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{"content-type":"application/json; charset=UTF-8",authorization:"b94fdff7-1397-48ac-8fa6-b1bcc959d2d6"}}),Y=new q(F,N,J),Z=new h(".popup_image"),tt=new E(z,D),et=new E(M,D),nt=new E(K,D),rt=new R({form:M,handleFormSubmit:function(t){rt.renderLoading(!0),X.changeUserDetails(t).then((function(t){Y.setUserInfo(t.name,t.about),rt.close()})).catch((function(t){alert(t)})).finally((function(){rt.renderLoading(!1)})),et.disableButton()}},".popup_edit"),ot=new R({form:K,handleFormSubmit:function(t){ot.renderLoading(!0),X.changeUserAvatar(t).then((function(t){Y.setUserAvatar(t.avatar),ot.close()})).catch((function(t){alert(t)})).finally((function(){ot.renderLoading(!1)})),nt.disableButton()}},".popup_change-avatar"),it=new R({form:z,handleFormSubmit:function(t){it.renderLoading(!0),X.addNewCard(t).then((function(t){var e=lt(t,Y.getUserInfo().id);at.addItem(e),it.close()})).catch((function(t){alert(t)})).finally((function(){it.renderLoading(!1)})),tt.disableButton()}},".popup_add"),ut=new S({form:$,handleFormSubmit:function(t){ut.renderLoading(!0),X.deleteCard(t.id).then((function(){t.removeCard(),ut.close()})).catch((function(t){alert(t)})).finally((function(){ut.renderLoading(!1)}))}},".popup_confirm"),at=new O({renderer:lt},".elements");function lt(t){return new u(t,Y.getUserInfo().id,".element-template",ct,st,ft).generateCard()}function ct(t,e){Z.open(t,e)}function st(t){t.isLiked()?X.deleteLike(t.id).then((function(e){t.handleLikeRemoved(),t.getLikesNumber(e.likes)})).catch((function(t){alert(t)})):X.addLike(t.id).then((function(e){t.handleLikeAdded(),t.getLikesNumber(e.likes)})).catch((function(t){alert(t)}))}function ft(t){ut.open(t)}Promise.all([X.getUserDetails(),X.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(o.name,o.about,o._id),Y.setUserAvatar(o.avatar),at.renderItems(i.reverse())})).catch((function(t){alert(t)})),Z.setEventListeners(),rt.setEventListeners(),it.setEventListeners(),ot.setEventListeners(),ut.setEventListeners(),et.enableValidation(),tt.enableValidation(),nt.enableValidation(),A.addEventListener("click",(function(){rt.open();var t=Y.getUserInfo();G.value=t.user,H.value=t.job,et.resetValidation()})),Q.addEventListener("click",(function(){it.open(),tt.resetValidation()})),V.addEventListener("click",(function(){ot.open(),nt.resetValidation()}))})()})();
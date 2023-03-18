import {nameInput, jobInput} from "../pages/index.js"
export default class UserInfo {
    constructor(userName, userInfo) {
        this._userName = userName;
        this._userInfo = userInfo;
        this.nameInput = nameInput;
        this.jobInput = jobInput;
    }
    getUserInfo() {
        this._userName = nameInput.textContent;
        this._userInfo = jobInput.textContent;
    }
    setUserInfo() {
        nameInput.value = this._userName.textContent;
        jobInput.value = this._userInfo.textContent;
    }
}
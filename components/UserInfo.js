export default class UserInfo {
    constructor(userName, userInfo) {
        this._userName = userName;
        this._userInfo = userInfo;
    }
    setUserInfo(nameInput, jobInput) {
        this._userName.textContent = nameInput.value;
        this._userInfo.textContent = jobInput.value;
    }
    getUserInfo(nameInput, jobInput) {
        nameInput.value = this._userName.textContent;
        jobInput.value = this._userInfo.textContent;
    }
}
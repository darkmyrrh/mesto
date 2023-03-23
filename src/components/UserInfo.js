export default class UserInfo {
    constructor(userName, userInfo) {
        this._userName = userName;
        this._userInfo = userInfo;
    }
    setUserInfo(user, job) {
        this._userName.textContent = user;
        this._userInfo.textContent = job;
    }
    getUserInfo(user, job) {
        user.value = this._userName.textContent;
        job.value = this._userInfo.textContent;
    }
}
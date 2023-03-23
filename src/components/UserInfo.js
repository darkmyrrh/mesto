export default class UserInfo {
    constructor(userName, userInfo) {
        this._userName = userName;
        this._userInfo = userInfo;
    }
    setUserInfo(user, job) {
        this._userName.textContent = user;
        this._userInfo.textContent = job;
    }
    getUserInfo() {
        return {
            user: this._userName.textContent,
            job: this._userInfo.textContent
        }
    }
}
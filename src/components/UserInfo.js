export default class UserInfo {
    constructor(userName, userInfo, avatar, id) {
        this._userName = userName;
        this._userInfo = userInfo;
        this._avatar = avatar;
        this._id = id;
    }
    setUserInfo(user, job, id) {
        this._userName.textContent = user;
        this._userInfo.textContent = job;
        this._id = id;      
    }
    getUserInfo() {
        return {
            user: this._userName.textContent,
            job: this._userInfo.textContent,
            id: this._id
        }
    }
    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }
    getUserAvatar() {
        return {
            avatar: this._avatar.src
        }
    }
    
}
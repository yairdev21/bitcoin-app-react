import UserService from '../services/UserService';
import { observable, action } from 'mobx';

export default class UserStore {
    @observable
    user = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    fetchUser() {
        this.user = UserService.getUser();
    }

    @action
    signup(userName){
        UserService.signup(userName);
        this.fetchUser()
    }

}

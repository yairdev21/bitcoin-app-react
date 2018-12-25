import UserStore from './UserStore';
import ContactStore from './ContactStore';

export default class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.contactStore = new ContactStore(this);
  }
}

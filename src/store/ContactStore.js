import ContactService from '../services/ContactService';
import { observable, action } from 'mobx';

export default class ContactStore {
  @observable
  contacts = [];


  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  async fetchContacts(filter) {
    this.contacts = await ContactService.getContacts(filter);
  }
}

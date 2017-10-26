import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',
  isValid: Ember.computed('emailAddress', 'message', function () {
    let emailValid = Ember.computed.match('emailAddress', /^.+@.+\..+$/);
    let messageValid = this.get('message').length >= 5 ? true : false;
    return emailValid && messageValid;
  }),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    sendMessage() {
      alert(`email: ${this.get('emailAddress')}\nmessage: ${this.get('message')}`);
      this.set('responseMessage', 'We got your message!');
    }
  }
});

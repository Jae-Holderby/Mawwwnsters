import Ember from 'ember';

export default Ember.Component.extend({

actions: {

  setScary(){
      let monster = this.get("monster")
      this.get("setScary")(monster);
      },
      
  setNotScary(){
    let monster = this.get("monster")
    this.get("setNotScary")(monster);
    }
  }
});

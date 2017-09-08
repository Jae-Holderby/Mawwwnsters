import Ember from 'ember';

export default Ember.Controller.extend({
  leastEyes: false,
  mostEyes: false,
  alphabeticalAtoZ: false,
  alphabeticalZtoA: false,

  actions: {

    setScary(monster){
      this.get('store').findRecord("monster", monster.id).then(function(monster) {
        monster.get('scary')
        monster.set('scary', true)
        monster.save();
      })
      .catch(error => {
        console.log(error);
      })
    },

    setNotScary(monster){
      let record = this.get('store').findRecord("monster", monster.id).then((monster) => {
        monster.set('scary', false)
        monster.save();
      })
    }
  }
});

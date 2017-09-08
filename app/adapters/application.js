import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: "https://young-reef-44290.herokuapp.com",
  namespace: "api/v1"
});

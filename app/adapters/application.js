import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "https://young-reef-44290.herokuapp.com",
  namespace: "api/v1",
  defaultSerializer: 'application.js'
});

import DS from 'ember-data';
import Ember from 'ember';
var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);



export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return {
    data: payload.monsters.map(function(record){
        return {
          id: record.id,
          type: primaryModelClass.modelName,
          attributes: record
        };
      })
    }
  }
});

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  eyes: DS.attr('number'),
  scary: DS.attr("boolean")
});

import DS from 'ember-data';
import Publisher from './publisher';

export default Publisher.extend({
  books: DS.hasMany('book')
});


// export default DS.Model.extend({
//   name: DS.attr('string'),
//   books: DS.hasMany('book')
// });

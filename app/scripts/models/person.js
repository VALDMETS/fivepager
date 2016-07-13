import Bb from 'backbone';

const Person = Bb.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/benscoolpeeps',
  idAttribute: '_id',
  defaults: {
    timestamp: new Date()
  }
});

export default Person;

import Bb from 'backbone';

const Website = Bb.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/benscoolurls',
  idAttribute: '_id',
});

export default Website;

import Bb from 'backbone';

const WebsiteCollection = Bb.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/benscoolurls',
  idAttribute: '_id',
});

export default WebsiteCollection;

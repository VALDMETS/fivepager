import Bb from 'backbone';

const Blog = Bb.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/benscoolblog',
  idAttribute: '_id',
  defaults: {
    timestamp: new Date()
  }
});

export default Blog;

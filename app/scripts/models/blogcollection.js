import Bb from 'backbone';
import Blog from './blog';

const BlogCollection = Bb.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/benscoolblog',
  idAttribute: '_id',
});

export default BlogCollection;

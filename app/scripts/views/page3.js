import $ from 'jquery';
import _ from 'underscore';

import Blog from '../models/blog';
import BlogCollection from '../models/blogcollection';

function renderPage3() {
    $('main').empty().append(`
      <section class="page-three">
        <div class="bloglist">
        </div>
        <div class="blogreader">
        </div>
      </section>
      `);

    let blogList = new BlogCollection().fetch({
      success: function(pull){
        let blogList = _.toArray(pull.attributes);
        blogList.forEach(function(blogPost){
          // console.log(blogPost);
          $('.bloglist').append(`<h2 class="blogselect" data-id="${blogPost._id}">${blogPost.name}</h2>`);
        });
        $('.bloglist').click(function(evt){
          let selectedBlog = new Blog ({
            '_id': $(evt.target).data().id
          });
          selectedBlog.fetch({
            success: function(pull2) {
              console.log(pull2);
              $('.blogreader').empty().append(`
                <h1>${pull2.attributes.name}</h1>
                <p>${pull2.attributes.content}</p>
                `);
            }
          });
        });
      }
    });
}

export default renderPage3;

import $ from 'jquery';
import Blog from '../models/blog';

function renderPage1() {
    $('main').empty().append(`
      <section class="page-one">
        <form class="blogposter">
          <input type="text" id="blogtitle">
          <textarea id="blogwriter" rows="8" cols="40"></textarea>
          <input type="submit" id="blogsubmit" value="SUBMIT">
        </form>
      </section>
      `);

    $('#blogsubmit').click(function(evt){
      evt.preventDefault();
      let currentBlog = new Blog({
        content: $('textarea').val(),
        name: $('#blogtitle').val()
      });
      currentBlog.save(null, {
        success: function() {
          console.log('post successful');
          $('textarea').val('');
          $('#blogtitle').val('');
        }
      });
    });





}

export default renderPage1;

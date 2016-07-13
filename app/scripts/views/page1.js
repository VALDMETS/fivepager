import $ from 'jquery';

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





}

export default renderPage1;

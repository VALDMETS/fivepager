import $ from 'jquery';
import _ from 'underscore';

import Website from '../models/website';
import WebsiteCollection from '../models/websitecollection';

function renderPage4() {
    $('main').empty().append(`
      <section class="page-four">
        <h3>The Ultimate Compendium of Your Favorite Websites</h3>
        <form class="siteposter">
          <span>New Website</span>
          <input type="text" id="siteurl" placeholder="URL:">
          <input type="text" id="sitetags" placeholder="Write tags divided by commas ie: spooky, scary, ...">
          <input type="submit" id="sitesubmit" value="SUBMIT">
        </form>
        <ul class="sitelist">
        </ul>
      </section>
    `);

    let currentSiteList = new WebsiteCollection().fetch({
      success: renderSites
    });

    function renderSites (pull) {
      console.log(pull);
      let siteList = _.toArray(pull.attributes);
      siteList.forEach(function(website, i){
        $('.sitelist').append(`<div id="sitecontainer${i}"><a class="website" href="${website.weburl}">
        ${website.weburl}
        </a></div>`);
        let tagArray = website.tags.sort();
        tagArray.forEach(function(tag){
          $(('#sitecontainer' + i)).append(`<button class="tagbutton">${tag}</button>`);
        });
      });
      $('.tagbutton').click(function(evt){
        console.log('anything');
        // $(evt).parent().addClass('hidden');
      });
    }
    $('#sitesubmit').click(function(evt){
      evt.preventDefault();
      let arrBuilder = $('#sitetags').val().split(', ');
      let newSite = new Website ({
        weburl: $('#siteurl').val(),
        tags: arrBuilder
      });
      let renderObj = {
        attributes: [newSite.attributes]
      };
      // console.log(renderObj);
      newSite.save(null, {
        success: function (){
          renderSites(renderObj);
        }
      });
    });

}

export default renderPage4;

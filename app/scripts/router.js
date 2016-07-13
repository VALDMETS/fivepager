import $ from 'jquery';
import Bb from 'backbone';

import renderPage1 from './views/page1';
import renderPage2 from './views/page2';
import renderPage3 from './views/page3';
import renderPage4 from './views/page4';
import renderPage5 from './views/page5';

const Router = Bb.Router.extend({

  routes: {
    page1  : 'oneFunction',
    page2  : 'twoFunction',
    page3  : 'threeFunction',
    page4  : 'fourFunction',
    page5  : 'fiveFunction'
  },
  oneFunction: function(){
    renderPage1();
  },
  twoFunction: function() {
    renderPage2();
  },
  threeFunction: function() {
    renderPage3();
  },
  fourFunction: function() {
    renderPage4();
  },
  fiveFunction: function() {
    renderPage5();
  },
});

const router = new Router ();

export default router;

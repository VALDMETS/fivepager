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
    console.log('one!');
    renderPage1();
  },
  twoFunction: function() {
    console.log('two!');
    renderPage2();
  },
  threeFunction: function() {
    console.log('three!');
    renderPage3();
  },
  fourFunction: function() {
    console.log('four!');
    renderPage4();
  },
  fiveFunction: function() {
    console.log('five!');
    renderPage5();
  },
});

const router = new Router ();

export default router;

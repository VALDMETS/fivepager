import $ from 'jquery';
import Bb from 'backbone';
import router from '../router';

function navSystem (){

  // Lord knows I tried to make this work:
  //
  // for (var i = 1; i <= 5; i++) {
  //   $(String('#page' + i)).click(function(){
  //     router.navigate(String('page' + i), {trigger: true});
  //   });
  // }
  
  $('#page1').click(function(){
    router.navigate('page1', {trigger: true});
  });
  $('#page2').click(function(){
    router.navigate('page2', {trigger: true});
  });
  $('#page3').click(function(){
    router.navigate('page3', {trigger: true});
  });
  $('#page4').click(function(){
    router.navigate('page4', {trigger: true});
  });
  $('#page5').click(function(){
    router.navigate('page5', {trigger: true});
  });
}

export default navSystem;

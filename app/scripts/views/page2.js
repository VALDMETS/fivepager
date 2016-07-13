import $ from 'jquery';
import Person from '../models/person';

function renderPage2() {
    $('main').empty().append(`
      <section class="page-two">
				<form class="personposter">
          <h3>The Ultimate Compendium of Persons</h3>
					<input type="text" id="personfirst" placeholder="First Name">
					<input type="text" id="personlast" placeholder="Last Name">
					<input type="text" id="personaddress" placeholder="Address">
					<input type="text" id="personphone" placeholder="Phone Number">
					<input type="submit" id="personsubmit" value="SUBMIT">
				</form>
			</section>
      `);

      $('#personsubmit').click(function(evt){
        evt.preventDefault();
        let currentNumber = $('#personphone').val().replace(/\D/g,'');
        if (currentNumber[0] === '1') {
          currentNumber = currentNumber.slice(1);
        }
        currentNumber = '(' + currentNumber.slice(0,3) + ') ' + currentNumber.slice(3,6)+ '-' + currentNumber.slice(6,10);
        let currentPerson = new Person({
            firstName: $('#personfirst').val(),
            lastName: $('#personlast').val(),
            address: $('#personaddress').val(),
            phone: currentNumber
        });
        currentPerson.save(null, {
          success: function() {
            console.log('post successful');
            $('#personfirst').val('');
            $('#personlast').val('');
            $('#personaddress').val('');
            $('#personphone').val('');
          }
        });
      });

}

export default renderPage2;

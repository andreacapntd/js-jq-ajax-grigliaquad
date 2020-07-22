// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato

function gameListenerClick() {

  $(document).on('click', '.square', function(){

    var squareSelected = $(this);

    changeColorSquare(squareSelected);

  })

};

function changeColorSquare(squareSelected) {

  $.ajax({

    url: 'https://flynn.boolean.careers/exercises/api/random/int',
    method: 'GET',
    success: function(data, state) {

      var squareTarget = squareSelected;

      var success = data["success"];
      var value = data["response"];
      console.log(value);

      if (success) {

        if (value <= 5) {

          squareTarget.html(value);
          squareTarget.addClass('yellow');
          squareTarget.removeClass('green');


        } else {

          squareTarget.html(value);
          squareTarget.addClass('green');
          squareTarget.removeClass('yellow');





        }

      } else {

        console.log('error');

      }
    },
    error: function(request, state, error) {

      console.log(request);
      console.log(state);
      console.log(error);

    }
  })
}


function init() {

  gameListenerClick();

};



$(document).ready(init);

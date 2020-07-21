function gameListenerClick() {

  var target = $('.square');
  target.click(function() {

    $.ajax({

      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',
      success: function(data, state) {

        

      },
      error: function(request, state, error) {

        console.log(request);
        console.log(state);
        console.log(error);

      }
    })
  });
};


























function init() {

  gameListenerClick();

};








$(document).ready(init);

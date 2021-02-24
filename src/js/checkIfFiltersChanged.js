$(function() {
    var $form = $('form');
    var initialState = $form.serialize();
    
    $form.submit(function (e) {
      if (initialState === $form.serialize()) {
        console.log('Form is unchanged!');
      } else {
        console.log('Form has changed!');
      }
      e.preventDefault();
    });
});
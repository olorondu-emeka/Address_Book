$(document).ready(function(){
  //general variables
  var mainAdd = $('#add-contact');
  var overlay = $('#overlay');

  //modal window variables
  var modalWindow = $('#modal-contact-form');



  //event for adding contacts
  mainAdd.on('click', function(e){
    overlay.fadeIn(500);
    modalWindow.fadeIn(500);

  });

  //event listener for modal modal window
  modalWindow.on('click', function(e){
    if ($(e.target).is('.fa-close')) {
      $(this).fadeOut(400);
      overlay.fadeOut(400);
    }

    if ($(e.target).is('#modal-cancel-button')){
      e.preventDefault();
      $(this).fadeOut(400);
      overlay.fadeOut(400);
    }

    if($(e.target).is('#modal-add-button')){
      
    }
  });//end modal window event listener











});

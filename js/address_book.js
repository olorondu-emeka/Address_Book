$(document).ready(function(){
  //general variables
  var mainAdd = $('#add-contact');
  var overlay = $('#overlay');
  var contact_group = $('#contact-group div');

  //modal window variables
  var modalWindow = $('#modal-contact-form');
  var firstName = $('#first-name');
  var lastName = $('#last-name');
  var email = $('#email');
  var phoneNo = $('#phone-no');


  //event for adding contacts
  mainAdd.on('click', function(e){
    overlay.fadeIn(400);
    modalWindow.fadeIn(400);

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
      e.preventDefault();
      var contact_header = "<header><input type='checkbox'>" + "<div class='header-group'><p></p><span class='fa fa-angle-down'></span></div></header>";
      var contact_body = "<main><div class='input-section'><p>First Name</p><input type='text'><p></p></div>" + "<div class='input-section'><p>Last Name</p><input type='text'><p></p></div>" + "<div class='input-section'><p>Email</p><input type='email'><p></p></div>" + "<div class='input-section'><p>Phone Number</p><input type='phone'><p></p></div>"  + "</main>";
      var contact_footer = "<footer>" + "<div class='button-group'><button id='contact-edit-button'><span class='fa fa-edit'></span> Edit</button></div>" + "<div class='button-group'><button id='contact-delete-button'><span class='fa fa-trash'></span> Delete</button></div>" + "</footer>";
      var contact_div = "<div class='contact'>" + contact_header + contact_body + contact_footer + "</div>";

      //append elements
      contact_group.append(contact_div);
      //reference elements
      $('.contact header p').text(firstName.val() + " " + lastName.val());
      $('.input-section:nth-child(1) input ~ p').text(firstName.val());
      $('.input-section:nth-child(2) input ~ p').text(lastName.val());
      $('.input-section:nth-child(3) input ~ p').text(email.val());
      $('.input-section:nth-child(4) input ~ p').text(phoneNo.val());



    }
  });//end modal window event listener











});

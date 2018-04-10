$(document).ready(function(){
  //general variables
  var mainAdd = $('#add-contact');
  var deleteMultiple = $('#delete-contacts');
  var overlay = $('#overlay');
  var contact_group_div = $('#contact-group > div');
  var contact_group = $('#contact-group');



  //modal window variables
  var modalWindow = $('#modal-contact-form');
  var firstName = $('#first-name');
  var lastName = $('#last-name');
  var email = $('#email');
  var phoneNo = $('#phone-no');
  var addCounter = 0;


  //event for adding contacts
  mainAdd.on('click', function(e){
    overlay.fadeIn(400);
    modalWindow.fadeIn(400);

  });

  //event listener for multiple delete button
  deleteMultiple.on('click', function(e){
    var contactArray = document.querySelectorAll("input[type='checkbox']");

    contactArray.forEach(function(theContact){
      if (theContact.checked === true){
        //delete selected contacts
        $(theContact).parents('.contact').remove();
      }
    });

  });//end multiple delete event listener

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
      var contact_body = "<main><div class='input-section'><p>First Name</p><input type='text' class='first-name-edit'><p></p></div>" + "<div class='input-section'><p>Last Name</p><input type='text' class='last-name-edit'><p></p></div>" + "<div class='input-section'><p>Email</p><input type='email' class='email-edit'><p></p></div>" + "<div class='input-section'><p>Phone Number</p><input type='phone' class='phone-edit'><p></p></div>"  + "</main>";
      var contact_footer = "<footer>" + "<div class='button-group'><button class='contact-edit-button'><span class='fa fa-edit'></span> Edit</button><button class='done'><span class='fa fa-check'></span> Done</button></div>" + "<div class='button-group'><button class='contact-delete-button'><span class='fa fa-trash'></span> Delete</button></div>" + "</footer>";
      var contact_div = "<div class='contact'>" + contact_header + contact_body + contact_footer + "</div>";

      //append elements
      contact_group_div.append(contact_div);
      //read values of modal window
      $($('.contact header p')[addCounter]).text(firstName.val() + " " + lastName.val());
      $($('.input-section:nth-child(1) input ~ p')[addCounter]).text(firstName.val());
      $($('.input-section:nth-child(2) input ~ p')[addCounter]).text(lastName.val());
      $($('.input-section:nth-child(3) input ~ p')[addCounter]).text(email.val());
      $($('.input-section:nth-child(4) input ~ p')[addCounter]).text(phoneNo.val());

      //clear input fields
      firstName.val(" ");
      lastName.val(" ");
      email.val(" ");
      phoneNo.val(" ");

      //fade-out animation of thee modal window
      $(this).fadeOut(400);
      overlay.fadeOut(400);
      addCounter++;
    }//end modal-add-button event listener
  });//end modal window event listener


//event listeners for contact elements
  contact_group.on('click', function(e){
    //event listener for contact header drop-down
    if ($(e.target).is('.header-group > p')) {
      $(e.target).parents('header').next().toggleClass('open');
      $(e.target).parents('header').next().next().toggleClass('open')
      $(e.target).next().toggleClass('fa-angle-up');

      //toggle arrow direction depending on open or close state of contact
      if($(e.target).next().hasClass('fa-angle-up')){
        $(e.target).next().removeClass('fa-angle-down');
      }
      else{
        $(e.target).next().addClass('fa-angle-down');
      }
    }//end header drop-down event listener

    //event listener for delete button
    if ($(e.target).is('.contact-delete-button')) {
      $(e.target).parents('.contact').remove();
    }

    //event listener for edit button
    if ($(e.target).is('.contact-edit-button')){
      var first_name_edit = $(e.target).parents('.contact').find('.first-name-edit');
      var last_name_edit = $(e.target).parents('.contact').find('.last-name-edit');
      var email_edit = $(e.target).parents('.contact').find('.email-edit');
      var phone_edit = $(e.target).parents('.contact').find('.phone-edit');

      //read values from the paragraph and display them in the input boxes
      first_name_edit.val(first_name_edit.next().text());
      first_name_edit.css("display", "inline-block");
      first_name_edit.next().css("display", "none");

      last_name_edit.val(last_name_edit.next().text());
      last_name_edit.css("display", "inline-block");
      last_name_edit.next().css("display", "none");

      email_edit.val(email_edit.next().text());
      email_edit.css("display", "inline-block");
      email_edit.next().css("display", "none");

      phone_edit.val(phone_edit.next().text());
      phone_edit.css("display", "inline-block");
      phone_edit.next().css("display", "none");

      //remove edit button and add done button
      $(e.target).css("display", "none");
      $(e.target).next().css("display", "inline-block");
    }//end edit event listener

    //event listener for done button
    if ($(e.target).is('.done')){
      var first_name_edit = $(e.target).parents('.contact').find('.first-name-edit');
      var last_name_edit = $(e.target).parents('.contact').find('.last-name-edit');
      var email_edit = $(e.target).parents('.contact').find('.email-edit');
      var phone_edit = $(e.target).parents('.contact').find('.phone-edit');

      //read values from input boxes and display them in the paragraph
      first_name_edit.next().text(first_name_edit.val());
      first_name_edit.next().css("display", "inline-block");
      first_name_edit.css("display", "none");

      last_name_edit.next().text(last_name_edit.val());
      last_name_edit.next().css("display", "inline-block");
      last_name_edit.css("display", "none");

      email_edit.next().text(email_edit.val());
      email_edit.next().css("display", "inline-block");
      email_edit.css("display", "none");

      phone_edit.next().text(phone_edit.val());
      phone_edit.next().css("display", "inline-block");
      phone_edit.css("display", "none");

      //remove done button and add edit button
      $(e.target).css("display", "none");
      $(e.target).prev().css("display", "inline-block");


    }//end done event listener
  });//end contact_group event listener

});

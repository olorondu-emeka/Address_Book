$(document).ready(function(){
  //general variables
  var mainAdd = $('#add-contact');
  var overlay = $('#overlay');
  var contact_group_div = $('#contact-group > div');
  var contact_group = $('#contact-group');
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
      var contact_body = "<main><div class='input-section'><p>First Name</p><input type='text' class='first-name-edit'><p></p></div>" + "<div class='input-section'><p>Last Name</p><input type='text' class='last-name-edit'><p></p></div>" + "<div class='input-section'><p>Email</p><input type='email' class='email-edit'><p></p></div>" + "<div class='input-section'><p>Phone Number</p><input type='phone' class='phone-edit'><p></p></div>"  + "</main>";
      var contact_footer = "<footer>" + "<div class='button-group'><button id='contact-edit-button'><span class='fa fa-edit'></span> Edit</button><button class='done'><span class='fa fa-check'></span> Done</button></div>" + "<div class='button-group'><button id='contact-delete-button'><span class='fa fa-trash'></span> Delete</button></div>" + "</footer>";
      var contact_div = "<div class='contact'>" + contact_header + contact_body + contact_footer + "</div>";

      //append elements
      contact_group_div.append(contact_div);
      //reference elements
      $('.contact header p').text(firstName.val() + " " + lastName.val());
      $('.input-section:nth-child(1) input ~ p').text(firstName.val());
      $('.input-section:nth-child(2) input ~ p').text(lastName.val());
      $('.input-section:nth-child(3) input ~ p').text(email.val());
      $('.input-section:nth-child(4) input ~ p').text(phoneNo.val());

      $(this).fadeOut(400);
      overlay.fadeOut(400);
    }//end modal-add-button event listener
  });//end modal window event listener

  //Event listener for contact_group
  contact_group.on('click', function(e){
    if ($(e.target).is('.header-group > p')) {
      $(e.target).parents('header').next().toggleClass('open');
      $(e.target).parents('header').next().next().toggleClass('open')
    }

    //event listener for delete button
    if ($(e.target).is('#contact-delete-button')) {
      $(e.target).parents('.contact').remove();
    }

    //event listener for edit button
    if ($(e.target).is('#contact-edit-button')) {
      var first_name_edit = $('.first-name-edit');
      var last_name_edit = $('.last-name-edit');
      var email_edit = $('.email-edit');
      var phone_edit = $('.phone-edit');
      var done = $('.done');

      first_name_edit.css("display", "inline-block");
      first_name_edit.val(firstName.val());
      first_name_edit.next().css("display", "none");

      last_name_edit.css("display", "inline-block");
      last_name_edit.val(lastName.val());
      last_name_edit.next().css("display", "none");

      email_edit.css("display", "inline-block");
      email_edit.val(email.val());
      email_edit.next().css("display", "none");

      phone_edit.css("display", "inline-block");
      phone_edit.val(phoneNo.val());
      phone_edit.next().css("display", "none");

      //hide edit button and show done button
      $(e.target).css("display", "none")
      done.css("display", "inline-block");
    }

    //event handler for done button
    if ($(e.target).is('.done')) {
      var first_name_edit = $('.first-name-edit');
      var last_name_edit = $('.last-name-edit');
      var email_edit = $('.email-edit');
      var phone_edit = $('.phone-edit');
      var edit = $('.done').prev();

      first_name_edit.next().css("display", "inline-block");
      first_name_edit.next().text(first_name_edit.val());
      first_name_edit.hide();

      last_name_edit.next().css("display", "inline-block");
      last_name_edit.next().text(last_name_edit.val());
      last_name_edit.hide();

      email_edit.next().css("display", "inline-block");
      email_edit.next().text(email_edit.val());
      email_edit.hide();

      phone_edit.next().css("display", "inline-block");
      phone_edit.next().text(phone_edit.val());
      phone_edit.hide();

      //hide done button and show edit button
      $(e.target).css("display", "none")
      edit.css("display", "inline-block");  
    }
  });//end contact_group event listener












});

$(document).ready(function() {

  var profileCard = $('.profile-card');
  var profileImage = $('.profile-image');
  $('body').append('<div class="darken"></div>');

  $('.profile-image').click(function() {
    $(this).addClass('active');
    $(profileCard).addClass('active');
    $('.darken').fadeIn(300);
  });
  $('.button-card-profile-close').click(function() {
    $(profileImage).removeClass('active');
    $(profileCard).removeClass('active');
    $('.darken').fadeOut(300);
  });
  $('.darken').click(function() {
    if ($(profileCard).hasClass('active')) {
        if ($(profileCard).hasClass('settings')) {
          $(profileCard).removeClass('settings');
          $(profileImage).removeClass('settings');
          $('.info').fadeIn(300);
          $('.button-card-profile-close').fadeIn(300);
          $('#button-settings-open').fadeIn(300);
          $('#button-settings-close,#button-settings-save').fadeOut(100);
          $(profileCard).children('.form-basic').fadeOut(200);
        }
        $(profileCard).removeClass('active');
        $(profileImage).removeClass('active');
        $(this).fadeOut(300);
    }
  });
  $('#button-settings-open').click(function() {
    $(profileCard).addClass('settings');
    $(profileImage).addClass('settings');
    $('.info').fadeOut(0);
    $('.button-card-profile-close').fadeOut(100);
    $(this).fadeOut(300, function() {
      $('#button-settings-close,#button-settings-save').fadeIn(300);
      $(this).siblings('.form-basic').fadeIn(200);
    });
  });
  $('#button-settings-close,#button-settings-save').click(function() {
    $(profileCard).removeClass('settings');
    $(profileImage).removeClass('settings');
    $('.info').fadeIn(300);
    $('.button-card-profile-close').fadeIn(300);
    $('#button-settings-open').fadeIn(300);
    $('#button-settings-close,#button-settings-save').fadeOut(100);
    $(this).siblings('.form-basic').fadeOut(200);
  });



  var e = $('.card');
  for (var i = 0; i < 10; i++) {
    e.clone().insertAfter(e);
  }

});

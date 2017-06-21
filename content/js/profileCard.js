$(document).ready(function() {

  var profileCard = $('.profile-card');
  var profileImage = $('.profile-image');
  $('body').append('<div class="darken"></div>');

  $('.profile-image').click(function() {
    $(this).addClass('active');
    $(profileCard).addClass('active');
    $('.darken').fadeIn('300');
  });
  $('.button-card-profile-close').click(function() {
    $(profileImage).removeClass('active');
    $(profileCard).removeClass('active');
    $('.darken').fadeOut('300');
  });
  $('.darken').click(function() {
    if ($(profileCard).hasClass('active')) {
        $(profileCard).removeClass('active');
        $(profileImage).removeClass('active');
        $(this).fadeOut('300');
    }
  });

});

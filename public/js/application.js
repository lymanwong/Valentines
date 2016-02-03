$(document).ready(function() {
  $('.wrapper_bottom').hide();
  $('.add_button').prop('title','Click me to send Marss some love <3');
  $('.add_button').click(function(){
    $('.wrapper_bottom').fadeToggle("slow");
  });
  $('#fader').fadeIn(1000);
  $('.next_button').click(function(){
    location.reload();
  });
  $('.add_button').mouseover(function(){
    $(this).addClass('hovering');
  }).mouseleave(function(){
    $(this).removeClass('hovering');
  });
  $('.submit_button').mouseover(function(){
    $(this).addClass('hovering');
  }).mouseleave(function(){
    $(this).removeClass('hovering');
  });

});

$(document).ready(function() {
  $('#fader').fadeIn(1000);
  $('.next_button').click(function(){
    location.reload();
  });
  $('.next_button').mouseover(function(){
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

setTimeout(function(){
   window.location.reload(1);
}, 5000);

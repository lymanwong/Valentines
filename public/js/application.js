$(document).ready(function() {
  $(this).scrollTop(0);
  $('#form').hide();
  $('.add_button').prop('title','Click me to send Marss some love <3');
  $('.add_button').click(function(){
    $('#form').fadeToggle("slow");
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
    //Capture the browser event
  $('.submit_button').click(function(event){
    //Prevent the default action
    event.preventDefault();
    //Capture the link path or destiation on server
    var data = $('#myform').serialize();
    //Make the AJAX request including path, type, dataType, and data
    $.ajax({
      url: '/',
      type: 'POST',
      data: data,
      success: function(result) {
        $("#mysuccessalert").show();
        $(".submit_button").hide();
      },
      error: function(result){
        $("#myfailalert").show();
        $(".submit_button").hide();
      }
    });
  });
});


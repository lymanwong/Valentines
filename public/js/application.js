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
    //Capture the browser event
  $('#myform').submit(function(event){
    //Prevent the default action
    event.preventDefault();
    //Capture the link path or destiation on server
    var data = $(this).serializeArray();
    var path = $(this).parent().attr("action");
    //Make the AJAX request including path, type, dataType, and data
    $.ajax({
      url: path,
      type: 'POST',
      dataType: 'json',
      data: data
    })

    .done(function(response){
      //do something with response
    })
      window.alert("Thanks for sharing your love via AJAX!");
  });
});

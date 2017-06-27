$(document).ready(function() {
  scaleVideoContainer();

  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
  });
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
    window.alert("Thanks for sharing your love via AJAX!");
  });
});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }

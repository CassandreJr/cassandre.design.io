$(document).ready(function(){


  $('#vidpause').on('click',function(){
    if($("#vid")[0].paused){
      $('#vid')[0].play();
      $(this).text("pause")
      $('.skip-btn').addClass('showPlay');
      $('#vidpause').hide();

    }
    else{
      $('#vid')[0].pause();

      $('.skip-btn').removeClass('showPlay');

    }
  })

  var vid = document.getElementById("vid");
vid.onended = function() {
    window.location.href = "index.html";

};

});

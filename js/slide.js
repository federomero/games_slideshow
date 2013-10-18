$(function(){
  $('#maximage').maximage({
    cycleOptions: {
      // Show a new image every 10 minutes
      timeout: 10*60*1000
    }
  });

  $( document ).keydown(function(e) {
    if (e.keyCode == 37) {
      // Left
      $('#maximage').cycle('prev')
    }
    if (e.keyCode == 39) {
      // Right
      $('#maximage').cycle('next')
    }
    if (e.keyCode == 32) {
      // Spacebar
      $('#maximage').cycle('toggle')
    }
    return false;
  });
});

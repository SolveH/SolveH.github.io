$(document).ready(function(){
// Add smooth scrolling to all links
//Found on https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

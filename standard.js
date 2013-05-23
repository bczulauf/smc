$(document).ready(function () {
  $('li').click(function () {
    $('li').removeClass('sel');
    $(this).addClass('sel')
})
  
  var aboutPosition = jQuery('#aboutPosition').offset().top - 146 + 'px';
  jQuery('#scrollAbout').click(function(){
  	jQuery('html, body').animate({scrollTop:aboutPosition}, 'slow');
  	// Stop the link from acting like a normal anchor link
  	return false;
  });
  
  var teamPosition = jQuery('#teamPosition').offset().top - 116 + 'px';
  jQuery('#scrollTeam').click(function(){
  	jQuery('html, body').animate({scrollTop:teamPosition}, 'slow');
  	// Stop the link from acting like a normal anchor link
  	return false;
  });
  
  var examplePosition = jQuery('#examplePosition').offset().top - 116 + 'px';
  jQuery('#scrollExample').click(function(){
  	jQuery('html, body').animate({scrollTop:examplePosition}, 'slow');
  	// Stop the link from acting like a normal anchor link
  	return false;
  });
  
  var advisorsPosition = jQuery('#advisorsPosition').offset().top - 116 + 'px';
  jQuery('#scrollAdvisors').click(function(){
  	jQuery('html, body').animate({scrollTop:advisorsPosition}, 'slow');
  	// Stop the link from acting like a normal anchor link
  	return false;
  });
  
/*  $(window).scroll(function() {
    var aboutPos = 40
    var teamPos = jQuery('#teamPosition').offset().top - 146
    var examplePos = jQuery('#examplePosition').offset().top - 146
    var yPos = $('body').scrollTop();
    if(yPos < aboutPos) {
       $('li').removeClass('sel');
       $('#scrollAbout').addClass('sel');
    }
    else if(yPos > teamPos && yPos < examplePos) {
       $('li').removeClass('sel');
       $('#scrollTeam').addClass('sel');
    }
    else if(yPos > examplePos) {
       $('li').removeClass('sel');
       $('#scrollTeam').addClass('sel');
    }
  })*/
  
})
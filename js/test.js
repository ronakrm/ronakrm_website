var main = function() {
  $('.projects p').click(function() {
	$(this).toggleClass('selected');
	});
  $(document).keypress(function(event) {
    if(event.which === 103) {
   		
    }
    else if(event.which === 110) {
    }
    else {
    }
  });
};

$(document).ready(main);
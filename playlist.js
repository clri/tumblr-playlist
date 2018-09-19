
$(document).ready(function() {
	
	function playing() {
		var activelem = document.getElementById("active-song");
		var activesong = $(activelem).find("audio");
		var as2 = activesong.get(0);
		
		as2.onended = function() {
			var temp = $(activelem).next();
			$(activelem).removeAttr('id');
			temp.attr('id', "active-song");
			activelem = temp;
			activesong = $(activelem).find("audio");
			as2 = activesong.get(0);
			as2.play();
			playing();
		};
	}
	
	playing();
	
});


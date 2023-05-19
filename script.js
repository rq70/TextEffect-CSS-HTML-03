(function(){
	var addEvent = function(object, type, callback) {
	    if (object == null || typeof(object) == 'undefined') return;
	    if (object.addEventListener) {	object.addEventListener(type, callback, false);
	    } else if (object.attachEvent) {	object.attachEvent("on" + type, callback);
	    } else {	object["on"+type] = callback;	}	};
	function detectMouseMove() {	var containerWidth = $('.container').outerWidth();
		document.addEventListener('mousemove', function(e) {	$('.hover').css({	left:  e.pageX	});
			$('.left-side').css({	left: e.pageX + 75	});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({	right: rightSideLeft	});
		})	}
	detectMouseMove();
	function detectTouch() {	var containerWidth = $('.container').outerWidth();
		document.addEventListener('mousemove', function(e) {	$('.hover').css({	left:  e.pageX	});
			$('.left-side').css({	left: e.pageX + 75	});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({	right: rightSideLeft	});
		})	}
	detectMouseMove();
	function touchMove(){
		var containerWidth = $('.container').outerWidth();
		document.addEventListener('touchmove', function(e) {	$('.hover').css({	left:  e.pageX	});
			$('.left-side').css({	left: e.pageX + 75	});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({	right: rightSideLeft	});
		})	}
	touchMove();
	function detectInput(inputType){
		addEvent(window, "resize", function(event) {
			var containerWidth = $('.container').outerWidth();
			$(document).bind(inputType, function(e){	$('.hover').css({	left:  e.pageX	});
				$('.left-side').css({	left: e.pageX + 75	});
				var rightSideLeft = containerWidth - e.pageX;
				$('.right-side').css({	right: rightSideLeft	});
			});
		});
	}
	detectInput('mousemove');
	detectInput('touchmove');
})();
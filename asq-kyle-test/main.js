// $(document).ready(function(){
//   var x = $("#reg").html()
//   $("#rev").html(x)
//   var y = $('#rev').html(x);
//   var z = '<div class"col">'+y+'</div>'
	
// 	$(window).scrollTop(1);

// 	$(window).scroll(function() {
// 		if ( $(window).scrollTop() >= ($('body').height() - $(window).height()) ) {
// 			$(".col").last().after(z);
// 			if ($(".col").length > 2) {
// 				$(".col").last().prev().remove();
// 				$(window).scrollTop($(window).scrollTop() - $(".col").first().height());
			
// 		} else if ($ (window).scrollTop() == 0) {
// 			$(".col").first().before(z);
// 			$(window).scrollTop($(".col").first().height());
// 			if ($(".col").length > 2) {
// 				$(".col").last().remove();
// 			}
// 		  }	
// 	   };
//     });
//   });

var content = $("#reg").html()


	$("#rev").html(content)
	$(".col").scroll(function() {

		$(".col").not($(this) ).scrollTop($(this).scrollTop())

		console.log(typeof this)

		if ( $(this).scrollTop() >= $(this)[0].scrollHeight - $(window).height()) {
				 $(this).scrollTop(0)

		// } else if ( $(this).scrollTop() >= $(this)[99].scrollHeight - $(window).height()) { 
		// 		$(this).scrollTop(99)
		}
	})

	
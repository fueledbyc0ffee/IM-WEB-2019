var students = ["Lina", "Karlo", "Sophia", "Adrienne", "Yasmin", "Katherine", "Oleg", "Jaywhy", "Mikayla", "Siwoo", "Justine", "Andrea", "Kyle", "Alleesa", "Oanh", "Sabrina", "Jillian", "Allison", "Cole", "Christine",]


var rS = Math.floor(Math.random()*students.length)
// console.log(students.length)

randomColor();

var i = 0;
while (i < students.length) {
	// console.log(students[i])
	

	$("<div class='greeting'></div>")
		.attr("id", students[i])
		.text("Hello, " +students[i])
		.appendTo("body")
		.css ({
			"background": randomColor()
		})
		.keyDown(function() {
			moveRandomly($(this).attr("id"));
			randomColor($(this).attr("id"));
		})

	i = i+1;
}


//how RANDOM works.

$(document).keyDown(function() {
	moveRandomly();
})

$(document).keyDown(function() {
	randomColor();
})
	
// 	// console.log(eventInfo.keyCode)



moveRandomly();


function moveRandomly(studentID) {

	var randomX = Math.floor(Math.random() * $(window).width()) 
	var randomY = Math.floor(Math.random() * $(window).height()) 


	$("#"+studentID).css({
		"position": "fixed",
		"top":randomY,
		"left":randomX

	})


}


function randomColor() {

	//rgb(255, 43, 243)

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	var rgb = "rgb("+r+", "+g+", "+b+")";

	return rgb;
}

console.log(randomColor)
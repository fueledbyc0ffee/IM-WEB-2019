var students = ["Lina", "Karlo", "Sophia", "Adrienne", "Yasmin", "Katherine", "Oleg", "Jaywhy", "Mikayla", "Siwoo", "Justine", "Andrea", "Kyle", "Alleesa", "Oanh", "Sabrina", "Jillian", "Allison", "Cole", "Christine",]


var rS = Math.floor(Math.random()*students.length)
console.log(students.length)

var i = 0;
while (i < students.length) {
	console.log(students[i])
	i = i+1;

	$("<div class='greeting'></div>")
		.attr("id", students[i])
		.text(students[i])
		.appendTo("body")

		.click(function() {
			moveRandomly($(this).attr("id"));
		})
}


//how RANDOM works.

$(document).click(function() {
	moveRandomly();
})



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





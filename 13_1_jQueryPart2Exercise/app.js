// Part Two - Movies App!

// Build an application that uses jQuery to do the following:
// Contains a form with two inputs for a title and rating along with a button to submit the form.

$('body').prepend(
	'<form><input type= "text" id= "title"> <input type= "text" id="rating"> <input type= "submit" id="submit"></form>'
);

// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

$('form').on('submit', function(e) {
	e.preventDefault();
	$('body')
		.append(`<p id="p1">  ${$('#title').val()}</p>`)
		.append(`<p id="p2">  ${$('#rating').val()}</p>`)
		.append(`<button id= "b1"> Delete Title </button>`)
		.append(`<button id= "b2"> Delete Rating </button>`);
});

// When the button to remove is clicked, remove each title and rating from the DOM.

$('body').on('click', $('#b1'), function() {
	$('#p1').remove();
});
$('body').on('click', $('#b2'), function() {
	$('#p2').remove();
});

// $('#b2').on('click', function() {
// 	$('#p2').append('eee');
// });

// Further Study
// Ensure that the rating of a movie can only be between 0 and 10.
// Ensure that a title has at least 2 characters in it.
// Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

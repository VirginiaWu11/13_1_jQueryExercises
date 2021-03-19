// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log('Let’s get ready to party with jQuery!');

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

$('article img').attr('class', 'image-center');

// Remove the last paragraph in the article.
$('article p:last-child').remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
$('h1').css('font-size', `${Math.ceil(Math.random() * 100)}px`);

// Add an item to the list; it can say whatever you want.
$('ol').append('<li>"lalallala"</li>');

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('li').remove();
$('ol').append('<p>silly list</p>');

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// $('body').css('background-color', `rgb(${$('input').eq(0).val()},${$('input').eq(1).val()},${$('input').eq(2).val()})`);

$('body').on('input', function() {
	$(this).css(
		'background-color',
		`rgb(${$('input').eq(0).val()},${$('input').eq(2).val()},${$('input').eq(1).val()})`
	);
});

// $('body').css('background-color', `rgb(20,255,255)`);

// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function() {
	$(this).remove();
});

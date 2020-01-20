//destructure the hash property from window.location to access the
//encrypted string
const { hash } = window.location;

//remove hash symbol from hash  property string and
//save decoded message string, to new message variable
const message = atob(has.replace('#', ''));

//if there is a message, toggle the visibility between the message-form
//and message-show
if (message) {
}
//add event listener for when user clicks create on the form
document.querySelector('form').addEventListener('submit', (event) => {
	//as the second argument on event listener, pass in a callback
	//function to run anytime the user submits the form.  The callback
	//function is called with the event object.
	//default for form submission=browser automatically tries to
	//submit input field to some backend server.  This callback
	//function prevents that automatic browser response to form
	//submission because I don't have a backend server.  It also
	//stops page from refreshing upon submit
	event.preventDefault();
	//select the first message input card div and added the hide class
	//which will cause it to disapear once the user clicks create/submits
	//message
	document.querySelector('#message-form').classList.add('hide');
	//select the link card and remove hide class so that card shows
	//as soon as user clicks create/submits message
	document.querySelector('#link-form').classList.remove('hide');
	//grab and store the message input text to the input variable
	const input = document.querySelector('#message-input');
	//encrypt string and save to new variable
	const encrypted = btoa(input.value);
	//take the encrypted value created above and throw it into
	//the link-input
	//updated then encrypted value to a template literal referencing
	//window.location, plus the encrypted message
	//document.querySelector(
	//	'#link-input'
	//).value = `${window.location}#${encrypted}`;
	//Rewriting query Selector above so that I can add code
	//to autoselect link input text for easier copying by user
	//Save link input to variable constant
	const inputLink = document.querySelector('#link-input');
	//set the value of the inputLink using template literal
	//create full url
	inputLink.value = `${window.location}#${encrypted}`;
	//Use the select method to auto select the inputLink text/url
	inputLink.select();
});

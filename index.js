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
	//grab and store the message input text to the input variable
	const input = document.querySelector('#message-input');
	//encrypt string and save to new variable
	const encrypted = btoa(input.value);
	//take the encrypted value created above and throw it into
	//the link-input
	document.querySelector('#link-input').vlaue = encrypted;
});

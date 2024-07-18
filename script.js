// Add JavaScript code here

const submitRequest = (event) => {
	event.preventDefault();

	const fName = document.getElementById("fname").value;
	const lName = document.getElementById("lname").value;
	const email = document.getElementById("email-box").value;

	console.log(`${fName} ${lName} @ ${email} has signed the form!`);
	const submission = `${fName} ${lName} has signed the form!`
	
	console.log(submission + " <- Thing to put in <p>");
	
	return submission
}

const form = document.getElementById('signature-form');

console.log(form.innerText + " <-- The things from the signature form.")

form.addEventListener("submit", submitRequest);

//grab signature's div
const signatures = document.getElementById("signatures");

// console.log(submitRequest());

// create new p tag

const sigContainer = document.createElement("p");

// add new p tag to the div


// add console.log message to p tag


//
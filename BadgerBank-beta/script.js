

let isPaperless = false;

function addBeneficiary() {
	alert("Please contact us to add a new beneficiary!");
}

function logout() {
	alert("You have been logged out of the system. Please close out of all tabs.");
}

function togglePaperlessEnrollment() {
	isPaperless = !isPaperless;
	document.getElementById("paperlessEnrollment").innerHTML = isPaperless;
}

function submitQuestion() {
	var text = document.getElementById("questionField").value
	alert("Message received! Our representative will contact you in 7 business days")
	console.log(text);
}

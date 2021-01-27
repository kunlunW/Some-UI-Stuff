// TODO Complete this file as described by the README.md
// Do NOT modify any files outside of this.

let hasLoadedFriendsAndFamilyData = false;

function askQuestion() {

	var t = document.getElementById('questionArea');
	t.style.visibility = 'visible';

	// var text1 = document.createElement("input");
	// var t = document.createTextNode("Hello");
	// text1.appendChild(t);
	// document.getElementById("questionArea").appendChild(text1);
	// var txtNewInputBox = document.createElement('div');
	// txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";
	// document.getElementById('questionField').appendChild(txtNewInputBox);
	// TODO Complete this function as described by the README.md
	

}

function submitQuestion() {
	var text = document.getElementById("questionField").value
	console.log(text);
}

function addPizzazz() {

	document.getElementsByName('sayingOfTheDay')[0].style.color = "red";
	document.getElementsByName('sayingOfTheDay')[0].style.font = "italic bold 25px arial,serif"
	document.getElementsByName('sayingOfTheDay')[0].style.fontVariant = "small-caps";
}

function saveBalance() {

	var userText = document.getElementById('balanceInput').value

	// var letters = /^[A-Za-z]/; --> this checks for letters
	// And this is the proper way to check for digits, including 
	// the negative ones 
	let isnum = (/^[-+]?[0-9]+$/).test(userText)
	let isFloat = (/^[-+]?[0-9]+\.[0-9]+$/).test(userText)

	if (isnum || isFloat) {
		document.getElementById('balance').innerHTML = userText;
	}
	else {
		console.log("Cannot update balance, syntax error!")
	}
}

function printBalance() {

	var userBalance = document.getElementById('balance').innerText
	console.log("You have " + userBalance + " in your account!")

}

function alertBalance() {

	var userBalance = document.getElementById('balance').innerText

	if (userBalance < 0) {
		alert(":(");
	}

	if (userBalance >=0 && userBalance <= 100) {
		alert(":)");
	}

	if (userBalance > 100) {
		alert(":D");
	}
}

function loadFriendsAndFamilyData() {

	if (hasLoadedFriendsAndFamilyData) {
		return;
	} else {
		hasLoadedFriendsAndFamilyData = true;
	}

	let friendsAndFamilyAccounts = [
		{
			name: "Jane McCain",
			balance: 7262.71
		},
		{
			name: "Bill Phil",
			balance: 9830.02
		},
		{
			name: "Tod Cod",
			balance: 0.03
		},
		{
			name: "Karen Marin",
			balance: 72681.01
		}
	];

	obj = friendsAndFamilyAccounts;

	var i;
	for (i =0; i< obj.length; i++) {
		let name = obj[i].name;
		let balance = obj[i].balance;

		if (balance < 1) {
		 	let tr = '<tr style="color:'+'red'+';">' + "<td>" + name+ "</td>"   + "<td>" + balance+ "</td>"  + "</tr>"
		 	$("#friendsAndFamilyBalances").append(tr);
		}
		else{
			let tr = "<tr>" + "<td>" + name+ "</td>"   + "<td>" + balance+ "</td>"  + "</tr>"
			$("#friendsAndFamilyBalances").append(tr);
		}
	}

}

function addPersonalTransactionRows() {

	var url = 'http://mysqlcs639.cs.wisc.edu:53706/api/badgerbank/transaction';

	var i;

	for (i=0; i<4; i++) {
	fetch(url)
		  .then(response => response.json())
		  .then(data => {
			
			// console.log(data)
			
			let date = data.date;
			let company = data.company;
			let amount = data.amount;
			// let rowCount = 0 
			// console.log(date)
			// console.log(company)
			// console.log(amount)

			let tr = '<tr>' + "<td>" + date+ "</td>"   + "<td>" + company+ "</td>" + "<td>" + amount+ "</td>" + "</tr>"
			 $("#personalTransactions").append(tr);
		  })
		  
		  .catch(error => console.error(error))
	} 
}

function clearPersonalTransactionRows() {
	
	const table = document.getElementById("personalTransactions");
	const len = table.rows.length;

	for (let i = 0; i<len; i++){
		table.deleteRow(0);
	}
	
}

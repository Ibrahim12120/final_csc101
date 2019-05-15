
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');

const calcul = document.getElementById('calcul');
const res = document.getElementById('res');

calcul.onclick = function(){

	const num1 = Number(document.getElementById('num1').value);
	const num2 = Number(document.getElementById('num2').value);

	if(num1 == ''){
		message1.innerHTML = 'Invalid input';
		message1.style.display = 'block';
	}

	if(num2 == ''){
		message2.innerHTML = 'Invalid input';
		message2.style.display = 'block';
	}

	const add = document.getElementById('add');
	const subtract = document.getElementById('subtract');
	const multiply = document.getElementById('multiply');
	const divide = document.getElementById('divide');

	if(add.checked){
		res.innerHTML = num1 + num2;
	}else if (subtract.checked){
		res.innerHTML = num1 - num2;
	}else if(multiply.checked){
		res.innerHTML = num1 * num2;
	}else if(divide.checked){
		res.innerHTML = num1 / num2;
	}

	console.log('Clicked');
};

function showHide(id) {
	//console.log(id)
	const div = document.getElementById(id);
	console.log(div.style.display);
	if (div.style.display === "none") {
		//console.log("true");
		div.style.display = "block";
	} else {
		//console.log("false");
		div.style.display = "none";
	}
}
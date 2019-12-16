

function generatePassword() {
	var a = parseInt(document.getElementsByName("character_length")[0].value)

	// var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()-_=+[]{}<>/?;:"
	var list = ""
	var uppercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var lowercase_characters = "abcdefghijklmnopqrstuvwxyz"
	var numerical_characters = "1234567890"
	var special_characters = "~!@#$%^&*()-_=+[]{}<>/?;:"

	if(document.getElementById("numerical_characters").checked){
		list += numerical_characters
	}
	if(document.getElementById("special_characters").checked){
		list += special_characters
	}
	if(document.getElementById("uppercase_characters").checked){
		list += uppercase_characters
	}
	if(document.getElementById("lowercase_characters").checked){
		list += lowercase_characters
	}

	var exclude_characters = document.getElementById("exclude_characters").value
	var pattern = new RegExp("[" + exclude_characters + "]+", "g")

	list = list.replace(pattern, '')	

	var generated = ""
	var minimum = 0
	var maximum = list.length - 1


	if(maximum != -1){
		for(i = 0; i < a; i++){

			generated += list[Math.floor(Math.random() * (maximum - minimum + 1)) + minimum]
		}
		document.getElementById("password").value = generated
	}
	else{
		document.getElementById("password").value = "no possible combinations"
	}
} 



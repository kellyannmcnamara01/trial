window.onload = function() {
    //1. check user input
    //2. create an onclick submit function
    //3. check user input to the answer
    //4. if user input is correct display entered number if user input is wrong display wrong letters in a different div
    //5. add correct user letters to correct letters array and display array
    //6. add wrong user letters to wrong letters array and display

    //vars
    var userinput = document.getElementById("userinput");
    var output = document.getElementById("output");
    var submitbtn = document.getElementById("submit");
	var wrongdiv = document.getElementById("wrong");
	var rightdiv = document.getElementById("correct");
	var rightLetters = [];
	var wrongLetters = [];
	var answer = "G";
	
	console.log(answer);

    //check user input to regex
    function checkInput() {
        var userinputReg = /^([A-Za-z]{1})$/;
		if(userinputReg.test(userinput.value)) {
            output.innerHTML = userinput.value;
            return false;
        } else {
            output.innerHTML = "Must be a letter";
            return false;
        }
    }; //end checkInput
	
    //call checkinput on submitbtn click
    submitbtn.onclick = function() {
        checkInput();
		if(userinput.value == answer){
			rightLetters.push(userinput.value);
			rightdiv.innerHTML = rightLetters;
			console.log(rightLetters);
			
        } else {
			wrongLetters.push(userinput.value);
			wrongdiv.innerHTML = wrongLetters;
			console.log(wrongLetters);
        }
    }; //end submitbtn

}; //end onload

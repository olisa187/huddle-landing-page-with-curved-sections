// This source code will validated the user entries into the input box

const val = document.querySelectorAll('input[type="email"]');
const errorMessage = document.getElementsByClassName("display-message");


// note: the convention here are 
// x = individual elements in the nodelist 
// i = the index value of the individual elements in the node list. 
//     using the index value the code can be able to access the right element tag for the errorMessage display. 

val.forEach((x, i) => x.addEventListener("blur", () => {
	const str = x.value.toLowerCase();
	
	// run checks
	const check1 = !str.includes("@");
	const check2 = !(str.slice(str.length -4).toLowerCase() === '.com');
	const check3 = !(str.indexOf("@") < str.indexOf(".com"));
	const check4 = (str[str.lastIndexOf(".") - 1] === ".");
	const check5 = (str.indexOf("@") !== str.lastIndexOf("@"));
	
	if (str == ""){
		x.classList.remove('error-border');
		errorMessage[i].textContent = "";	
	}else 
		if (check1  || check2 || check3 || check4 || check5){
		x.classList.add('error-border');
		errorMessage[i].textContent = "Check your email please";
	}else{
		x.classList.remove('error-border');
		errorMessage[i].textContent = "";
	}
}, false))
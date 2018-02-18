var deptHolder = document
.getElementById("dept-holder");
var yearHolder = document
.getElementById("year-holder");
var numHolder = document
.getElementById("num-holder");

function handleClick(){

	resetAll();

	var regno = document
	.getElementById("regno");
	var regnoValue = regno.value;

	var year = regnoValue[2] + regnoValue[3];
	var dept = regnoValue[8];
	var num = regnoValue[12] 
	+ regnoValue[13] + regnoValue[14];

	// console.log(year, dept, num);

	year = parseInt(year);

	deptHolder.innerHTML += getDept(dept);
	yearHolder.innerHTML += getYear(year);
	numHolder.innerHTML += num;

}

function getDept(dept){

	switch(dept){
		case "1": return "Mech"; break;
		case "2": return "CSE"; break;
		case "3": return "ECE"; break;
		case "4": return "EEE"; break;
		case "5": return "CIVIL"; break;
		case "6": return "BArch"; break;
		case "7": return "Bio"; break;
		case "8": return "IT"; break;
	}
}

function getYear(year){
	var calculatedYear = 
	(new Date().getYear() % 100) - year;

	if(new Date().getMonth() > 5){
		console.log("IN")
		calculatedYear += 1;
	}

	return calculatedYear;
}

function resetAll(){
	deptHolder.innerHTML = "Dept: ";
	yearHolder.innerHTML = "Year: ";
	numHolder.innerHTML = "Num: ";
}
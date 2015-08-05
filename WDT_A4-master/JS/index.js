/*
//VARIABLES

//#1
var name = "jared";
var data = typeof(name);

console.log(name);

//#2
var z = 325;
var a = 12325;
var answer = z * a

console.log(answer);

//VARIABLES
*/
//---------------------------------------------------------------------------------
/*
//ALERTS

//#1
alert("Welcome to my javascript page");

//#2
var x = 244;
var y = 3215;
var ans = x * y;

alert("x * y = " + ans + " :when x = 244 and y 3215");

// ALERTS
*/
//---------------------------------------------------------------------------------
/*
//CONSOLE

var name = "jared";
var greeting = "How are you";

console.log(greeting + " " + name + "?");

//CONSOLE
*/
//---------------------------------------------------------------------------------
//COMMENTS

//Single line = // (Shortcut = command /)

// Multi line = /* */ (Shortcut = command  option /)

//COMMENTS
//---------------------------------------------------------------------------------
//DATA TYPES

//String = words | you put a string in ""
	// alert("Hey whats up?");

//Number = number | 5.57 , 6 , 5473
	// var x = 12467;
	// var y = 23156790.21;

//Boolean = true or false

//Identifying
// 1
	// yourData = "data";
	// var type = typeof(yourData);
// 2
	// yourData = 13;
	// var type = typeof(yourData);
// 3
	// yourData = true;
	// var type = typeof(yourData);

	// console.log(type);

//DATA TYPES
//---------------------------------------------------------------------------------
//ARRAYS
//#1 will console.log jake because computer start from 0
// var names = ["bob", "jake", "kevin"];

// console.log(names[1]);

//#2
// var bauer = ["apx", "nexus", "nxg"];
// var easton = ["stealth", "mako", "sengery"];
// var company = [easton , bauer];

// console.log("Bauer makes " + company[1][0])
// console.log("Easton makes " + company[0][1])
//#3
//ARRAYS
//---------------------------------------------------------------------------------
//TESTING (test in console) (my answer is after the ;)

//equal?
// 5==“5”; true
// 7===“7”; false

//not equal?
// 5!==6; true
// 5!==5; false

//greater than?
// 5>10; false
// 37235<4236542332; true
// 2>=2; true
// 34<=39; true

//TESTING
//---------------------------------------------------------------------------------
//FUNCTIONS

//1
// function add(x){
// 	return x + 132
// };
// console.log(add(10));

//2
// var bd = "10/23";
// if(bd == "10/16"){
// 	console.log("Happy Birthday!")
// }else{
// 	console.log("It is not your Birdthday :( Your birthday is: " + bd)
// }

//3
// var name = prompt("Enter your name?")
// function alertName(username){
// 	alert("Hey " + username)
// }

// alertName(name);


//FUNCTIONS
//---------------------------------------------------------------------------------



function win(){
	var numberInput = prompt("Guess the number! From 1-1000");
	if(numberInput == 347){
		alert("You are correct! " + numberInput + " was the number!");
	}else if(numberInput<1 || numberInput>1000){
		alert("Your number is out of the range! " + numberInput + " is not from 1-1000! STUPID");
		win();
	}else if(typeof(numberInput) !== "number"){
		alert("You didn't guess a number!");
		win();
	}else if(numberInput-10 || numberInput+10){
			alert("Your number:" + numberInput + " is with in 10 of the number!");
			win();
		}else{alert("Your number " + numberInput + ". Is wrong");
			win();
	}
}

win();

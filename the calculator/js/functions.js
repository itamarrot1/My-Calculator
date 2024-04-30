var clean = false // a var for cleaning the input
var firstNumner = 0 // a var to store the first number 
var oper = ""// a var to store the opers
//
//
//
//add number
// 1. function  check if there is already value in the input if there is ,she cleans .
// 2. function will display the number the user click on him  and console him/
function addNumber() {
    if (cal.value == '0' || clean == true) {
        cal.value = "";
        clean = false

    }
    cal.value += event.target.innerText;
    console.log(cal.value);
}

// clean function
function cleandisplay() {
    cal.value = ""
    firstNumner = ''
}
//opers
// 1.function take the value of the button that the user clicked on him and store it in "oper"
// 2.function store the cal.value in a empty var that called firstnumner 
function anyOper() {
    oper = event.target.innerText
    firstNumner = cal.value
    clean = true
    console.log(oper);

}
//calculate
//1. the function take the cal.value and put it in a new var "second"
//2. the function check witch operation nedd to be carried out
function calculate() {
    var second = cal.value
    if (oper == "-") {
        cal.value = firstNumner - cal.value
    }
    if (oper == "+") {
        cal.value = (+firstNumner + + cal.value)
    }
    if (oper == "*") {
        cal.value = firstNumner * cal.value
    }
    if (oper == "/") {
        cal.value = firstNumner / cal.value
    }
}



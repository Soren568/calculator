
var current_display_num = ''
// var num1 = parseFloat(current_display_num);
var numArr = [];
var termsArr = [];
var opArr = [];

function press(num){
    current_display_num += num;
    document.querySelector('#display').innerText = current_display_num;
    numArr.push(current_display_num);
}

function setOP(op){
    var num1 = parseFloat(numArr[numArr.length-1]);
    termsArr.push(num1);
    current_display_num = '0';
    document.querySelector('#display').innerText = current_display_num;
    if(op=="+"){
        opArr.push("+")
    }
    else if(op=="-"){
        opArr.push('-')
    }
    else if(op=='/'){
        opArr.push('/')
    }
    else{
        opArr.push('*')
    }
}

function calculate(){
    var num2 = parseFloat(numArr[numArr.length-1]);
    termsArr.push(num2);
    var lastOperator = opArr[opArr.length-1]
    if(lastOperator == '+'){
        output = termsArr[termsArr.length-2] + termsArr[termsArr.length-1]
    }
    if(lastOperator == '-'){
        output = termsArr[termsArr.length-2] - termsArr[termsArr.length-1]
    }
    if(lastOperator == '/'){
        output = termsArr[termsArr.length-2] / termsArr[termsArr.length-1]
    }
    if(lastOperator == '*'){
        output = termsArr[termsArr.length-2] * termsArr[termsArr.length-1]
    }
    document.querySelector('#display').innerText = output
}

function clr(){
    current_display_num = '0';
    document.querySelector('#display').innerText = current_display_num;
    numArr = [];
    termsArr = [];
    opArr = [];
}



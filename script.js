$(document).ready(function() {
    $('button.number_keys').click(addNumber);
    $('button.decimal_key').click(addDecimal);
    $('button.operator_keys').click(addOperator);
    $('button.clear_whole').click(clearAllText);
    $('button.clear_recent').click(clearMostRecent);
    $('button.equal_key').click(equalButton);
});

var calcArray = [""];
var i = 0;
var results = null;


function addNumber(input){
    calcArray[i] += $(this).html();
    $('.display_area_text').html(calcArray);
}

function addDecimal(input){
    var firstDecimal = calcArray[i].includes(".");
    if (firstDecimal === true) {
    } else {
        calcArray[i] += $(this).html();
        $('.display_area_text').html(calcArray);
    }
}

function addOperator(input) {
    if (calcArray.length === 1 && calcArray[0] === "") {
        return;
    }
    if (calcArray.length === 3) {
        if (calcArray[2] === ""){
            calcArray[1] = $(this).html();
            $('.display_area_text').html(calcArray);
            return;
        }
        calcArray = [doMath()];
        i = 0;
        $('.display_area_text').html(calcArray);
    }
    var input = $(this).html();
    calcArray.push(input);
    calcArray.push("");
    i += 2;
    $('.display_area_text').html(calcArray);

    if (calcArray.length === 8){
        return;
    }
}

function clearAllText(){
    if (calcArray.length > 0) {
        calcArray = [""];
        results = null;
        i = 0;
    }
    $('.display_area_text').html(calcArray);
}

function clearMostRecent(){
    calcArray.pop();
    calcArray.push("");
    i = calcArray.length - 1;
    $('.display_area_text').html(calcArray);
}

function doMath() {
    var num1 = parseFloat(calcArray[0]);
    var num2 = parseFloat(calcArray[2]);
    var operator = calcArray[1];

    if (operator === '+') {
        results = num1 + num2;
    } else if (operator === '-') {
        results =  num1 - num2;
    } else if (operator === 'x') {
        results =  num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            return "error";
        }
        results = num1 / num2;
    } else if (operator === undefined){
        results = calcArray[calcArray.length-1];
    }
    return results;
}

function equalButton(){
    if (calcArray[0] === "") {
        $('.display_area_text').text("Ready");
        return;
    } else if (calcArray.length === 3 && calcArray[2] === "") {
        calcArray[2] = calcArray[0];
        $('.display_area_text').html(doMath());
        calcArray[0] = results;
        calcArray[2] = "";
        return;
    }
    $('.display_area_text').html(doMath());
    calcArray[0] = results;
}
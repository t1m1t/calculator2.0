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
        console.log("addNumber function called");
        calcArray[i] += $(this).html();
        console.log("input is ", input);
        console.log("pushing number to array ", calcArray);
        $('.display_area_text').html(calcArray);
    }

    function addDecimal(input){
        console.log("addDecimal function called");
        var firstDecimal = calcArray[i].includes(".");
        if (firstDecimal === true) {
            console.log("can't add another decimal");
        } else {
            calcArray[i] += $(this).html();
            console.log("input is ", input);
            console.log("pushing decimal to array ", calcArray);
            $('.display_area_text').html(calcArray);
        }
    }

    function addOperator(input) {
        console.log("addOperator function called");
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
        console.log("input is ", input);
        calcArray.push(input);
        console.log("after pushing operator to array ", calcArray);
        calcArray.push("");
        i += 2;
        console.log("after pushing empty string ", calcArray);
        $('.display_area_text').html(calcArray);
    }

    function clearAllText(){
        console.log("clear button working");
        if (calcArray.length > 0) {
            calcArray = [""];
            results = null;
            console.log("calcArray becomes an empty string");
            i = 0;
        }
        console.log("new array to start with i reset to 0 ", calcArray);
        $('.display_area_text').html(calcArray);
    }

    function clearMostRecent(){
        console.log("clear recent button working");
        calcArray.pop();
        console.log("after removal of last input ", calcArray);
        calcArray.push("");
        i = calcArray.length - 1;
        console.log("after inclusion of new string ", calcArray);
        $('.display_area_text').html(calcArray);
    }

    function doMath() {
        var num1 = parseFloat(calcArray[0]);
        var num2 = parseFloat(calcArray[2]);
        var operator = calcArray[1];

        if (operator === '+') {
            console.log("addition operator used");
            results = num1 + num2;
        } else if (operator === '-') {
            console.log("subtraction operator used");
            results =  num1 - num2;
        } else if (operator === 'x') {
            console.log("multiplication operator used");
            results =  num1 * num2;
        } else if (operator === '/') {
            console.log("division operator used");
            if (num2 === 0) {
                console.log("1 cannot be divided by 0");
                return "error";
            }
            results = num1 / num2;
        } else if (operator === undefined){
            results = calcArray[calcArray.length-1];
        }
        return results;
    }

    function equalButton(){
        console.log("equal button is working");
        if (calcArray[0] === "") {
            console.log("calcArray is empty");
            console.log("Calculator is Ready");
            $('.display_area_text').text("Ready");
            return;
            console.log("current array ", calcArray);
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


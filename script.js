$(document).ready(function(){
    $('.number_keys').click(function(){
        console.log("click is working");
    });

    var i = 0;
    var calcArray =[""];

    function addNumber(input){
        calcArray[i] += input;
    }

    function addOperator(input){
        calcArray.push(input);
        calcArray.push("");
        i += 2;
    }
});








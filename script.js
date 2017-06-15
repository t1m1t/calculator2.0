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
















































// //callBack function defined
//
// function callBack (type, value, item){
//     //type - string equal to "itemAdded", "calculated", "error"
//     //value - either a string or a number
//     //item - only use for adv functionality Object or different types
//     if (value = undefined){
//         $('#display_area').html("");
//     } else {
//         $('#display_area').html(value);
//     }
// }
//
// //my_calculator - creates a new calculator object
//
// var my_calculator = new calculator(callBack);
//
// //after DOM load, add click handlers to all buttons
//
// $(document).ready(function(){
//     $('button').on('click', function(){
//         var val = $(this).text();
//
//         if (val === "C"){
//             my_calculator.allClear();
//             $('#display_area').html(0);
//         } else {
//             my_calculator.addItem($(this).text(val));
//         }
//         if (val === "1"){
//             my_calculator.allClear();
//             $('#display_area').html(1);
//         } else {
//             my_calculator.addItem($(this).text(val));
//         }
//     })
// });


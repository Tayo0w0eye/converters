//==============liter box function==============
$(".liters").on("click", function(){
$(".box1").css("background-color", "#a5ecd7");
$(".literHeader").animate({opacity:0.5});

var input1 = $(".literValue").val();
var input1x = input1 * 3.78541;
var result1 = (input1x).toFixed(2);

if(input1 == ""){
  $(".literConvert").text("Enter a value");
}else{
  $(".literConvert").text(input1 + " Gallons is " + result1 + " liters");
}


});

$(".clear1").on("click", function(){
$(".box1").css("background-color", "");
$(".literHeader").animate({opacity:1});
$(".literConvert").text("");
$(".literValue").val("");

});

//==============fahrenheit box function==============
$(".fahrenheit").on("click", function(){
$(".box2").css("background-color", "#e8ffc1");
$(".fahrenheitHeader").animate({opacity:0.5});

var inputF = $(".fahrenheitValue").val();
var inputFx = (inputF - 32) * 5/9;
var result2 = (inputFx).toFixed(2);
if(inputF == ""){
  $(".fahrenheitConvert").text("Enter a value");
}else{
  $(".fahrenheitConvert").text(inputF + " fahrenheit is " + result2 + " Celsius");
}

});

$(".clear2").on("click", function(){
$(".box2").css("background-color", "");
$(".fahrenheitHeader").animate({opacity:1});
$(".fahrenheitConvert").text("");
$(".fahrenheitValue").val("");
});

//==============Yard box function==============
$(".yard").on("click", function(){
$(".box3").css("background-color", "#51adcf");
$(".yardHeader").animate({opacity:0.5});

var input2 = $(".yardValue").val();
var input2x = input2 * 36;
var result3 = (input2x).toFixed(2);
if(input2 == ""){
  $(".yardConvert").text("Enter a value");
}else{
  $(".yardConvert").text(input2 + " yard is " + result3 + " inches");
}

});

$(".clear3").on("click", function(){
$(".box3").css("background-color", "");
$(".yardHeader").animate({opacity:1});
$(".yardConvert").text("");
$(".yardValue").val("");
});


//==============miles to km box function==============
$(".miles").on("click", function(){
$(".box4").css("background-color", "#a5ecd7");
$(".milesHeader").animate({opacity:0.5});

var inputM = $(".milesValue").val();
var inputMx = inputM * 1.60934;
var resultM1 = (inputMx).toFixed(2);

if(inputM == ""){
  $(".milesConvert").text("Enter a value");
}else{
  $(".milesConvert").text(inputM + " Miles is " + resultM1 + " Km");
}


});

$(".clear4").on("click", function(){
$(".box4").css("background-color", "");
$(".milesHeader").animate({opacity:1});
$(".milesConvert").text("");
$(".milesValue").val("");

});

//==============lbs to kg box function==============
$(".pounds").on("click", function(){
$(".box5").css("background-color", "#e8ffc1");
$(".poundsHeader").animate({opacity:0.5});

var inputP = $(".poundsValue").val();
var inputPx = (inputP / 2.205);
var resultP2 = (inputPx).toFixed(2);
if(inputP == ""){
  $(".poundsConvert").text("Enter a value");
}else{
  $(".poundsConvert").text(inputP + " lbs is " + resultP2 + " kg");
}

});

$(".clear5").on("click", function(){
$(".box5").css("background-color", "");
$(".poundsHeader").animate({opacity:1});
$(".poundsConvert").text("");
$(".poundsValue").val("");
});

//==============cm to inches box function==============
$(".cm").on("click", function(){
$(".box6").css("background-color", "#51adcf");
$(".cmHeader").animate({opacity:0.5});

var inputC2 = $(".cmValue").val();
var inputCx = inputC2 / 2.54;
var resultC3 = (inputCx).toFixed(2);
if(inputC2 == ""){
  $(".cmConvert").text("Enter a value");
}else{
  $(".cmConvert").text(inputC2 + " Cm is " + resultC3 + " inches");
}

});

$(".clear6").on("click", function(){
$(".box6").css("background-color", "");
$(".cmHeader").animate({opacity:1});
$(".cmConvert").text("");
$(".cmValue").val("");
});

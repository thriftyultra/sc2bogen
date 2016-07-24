var value1 = 'build1';
var value2 = 'build2';
var chosenValue = Math.random() < 0.5 ? value1 : value2;
var chosenDiv = document.getElementById(chosenValue);
chosenDiv.display = "block";

var divide = document.getElementsByClassName("divide")[0];
var product = document.getElementsByClassName("multiply")[0];
var plus = document.getElementsByClassName("sum")[0];
var minus = document.getElementsByClassName("subtract")[0];
var ac = document.getElementsByClassName("AC")[0];
var no1 = document.getElementsByClassName("no1")[0];
var no2 = document.getElementsByClassName("no2")[0];
var ans = document.getElementsByClassName("ans")[0];

divide.addEventListener("click", function(){
    var number1 = parseFloat(no1.value);
    var number2 = parseFloat(no2.value);

    if (number2 !== 0) {
        ans.innerHTML = number1 / number2;
    } else {
        ans.innerHTML = "Cannot divide by zero";
    }
});

product.addEventListener("click", function(){
    var number1 = parseFloat(no1.value);
    var number2 = parseFloat(no2.value);

    ans.innerHTML = number1 * number2;
});

plus.addEventListener("click", function(){
    var number1 = parseFloat(no1.value);
    var number2 = parseFloat(no2.value);

    ans.innerHTML = number1 + number2;
});

minus.addEventListener("click", function(){
    var number1 = parseFloat(no1.value);
    var number2 = parseFloat(no2.value);

    ans.innerHTML = number1 - number2;
});

ac.addEventListener("click", function(){
    location.reload();
});

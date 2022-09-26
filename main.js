// FIZZBUZZ FOR OF BILAN UY ISHI 

var elFizzBuzz = document.querySelector(".formfizzbuzz");
var elInput = elFizzBuzz.querySelector(".form-control");
var elOutputF = document.querySelector(".outputf");
var elOutputB = document.querySelector(".outputb");
var elOutputFB = document.querySelector(".outputfb");
var fizzlength = document.querySelector(".fizzlength");
var buzzlength = document.querySelector(".buzzlength");
var fizzbuzzlength = document.querySelector(".fizzbuzzlength");
// console.log(fizzbuzzlength);

var fizbuz = [];
var fiz = [];
var buz = [];


elFizzBuzz.addEventListener("submit", function (evt) {

    evt.preventDefault();

    var inputValue = elInput.value;


    if (inputValue % 3 == 0 && inputValue % 5 == 0) {
        fizbuz.push(inputValue);
        elOutputFB.textContent = fizbuz;
        fizzbuzzlength.textContent = fizbuz.length;

    } else if (inputValue % 3 == 0) {
        fiz.push(inputValue);
        elOutputF.textContent = fiz;
        fizzlength.textContent = fiz.length;


    } else if (inputValue % 5 == 0) {
        buz.push(inputValue);
        elOutputB.textContent = buz;
        buzzlength.textContent = buz.length;

    } else {
        alert("Bu son 3 va 5 ga bo'linmaydi !")
    }

    elInput.value = "";
})
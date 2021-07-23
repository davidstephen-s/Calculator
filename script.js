let inputBox = document.getElementById("calculation");

let userClickbutton = ((input) =>
{
let oldInput = inputBox.value;
let newInput = oldInput+input;
inputBox.value = newInput;
});

let calValue = () =>
{
let input = inputBox.value;
let result = eval(input);
inputBox.value=result;
}

let clearData = () =>
{
    inputBox.value = " ";
}


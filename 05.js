//Victor Hugo Favaro Moreira RA 2503581

const display = document.getElementById("display");
let firstValue = 0;
let secondValue = 0;
function appendToDisplay(value){
    const valorAt =  display.value;
    display.value = display.value + value;
}
const clearDisplay = () => {
    display.value = "";
}
function calculateResult() {
    const textValue = display.value;

    for (i=0; i<textValue.length; i++) {
        switch (textValue[i]){
            case "-":
                setStateValues(i)
                subt();
                break;
            case "+":
                setStateValues(i);
                soma();
                break;
            case "/":
                setStateValues(i);
                divisao();
                break;
            case "*":
                setStateValues(i);
                mult();
                break;
        }
    }
}

function setStateValues(indexOf) {
    firstValue = parseFloat(display.value.slice(0, indexOf));
    secondValue = parseFloat(display.value.slice(indexOf+1));
}

function soma(){
    clearDisplay();
    appendToDisplay(parseFloat(firstValue+secondValue))
}

function subt() {
    clearDisplay();
    appendToDisplay(parseFloat(firstValue-secondValue))
}

function divisao() {
    clearDisplay();
    appendToDisplay(parseFloat(firstValue/secondValue));
}

function mult() {
    clearDisplay();
    appendToDisplay(parseFloat(firstValue*secondValue));
}
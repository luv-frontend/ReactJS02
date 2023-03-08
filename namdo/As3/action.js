const result = document.getElementById("result");
const calculating = document.getElementById("calculating");
let resultReset = '';

function append(value) {
    if (resultReset == true || calculating.innerHTML == 0){
        calculating.innerHTML = '';
        calculating.innerHTML += value;
        resultReset = false;
    }else {
        calculating.innerHTML += value;
    }
}
function backSpace() {
    calculating.innerHTML = calculating.innerHTML.slice(0,-1)
}
function calculate() {
    result.innerHTML = eval(calculating.innerHTML);
    resultReset = true;

}
function clearResult() {
    calculating.innerHTML = 0;
    result.innerHTML = 0;
    resultReset = true;
}
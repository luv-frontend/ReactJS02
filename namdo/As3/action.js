const result = document.getElementById("result");
const calculating = document.getElementById("calculating");
const times = document.getElementById("times");
let resultReset = '';
timeHistory();
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
    if (sessionStorage.getItem('times')){
        sessionStorage.setItem('times',Number(sessionStorage.getItem('times')) + 1);
    }else {
        sessionStorage.setItem('times',1);
    }
    times.innerHTML = sessionStorage.getItem('times');

}
function clearResult() {
    calculating.innerHTML = 0;
    result.innerHTML = 0;
    resultReset = true;
}
function timeHistory(){
    if (sessionStorage.getItem('times') == null){
        times.innerHTML = 0;
    }else {
        times.innerHTML = sessionStorage.getItem('times');
    }
}
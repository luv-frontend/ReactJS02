
const number = document.getElementsByClassName('item');
const input = document.getElementById("input");
var result = document.getElementById("result");

const loghistory = document.getElementById("his-value");
var resultData = "";
var logHistory = "";
var history = [];
for (var num of number){
    num.addEventListener('click', function(){
        input.innerHTML += this.value
    });
}

function equal(){
    var res = input.innerHTML
    var output = eval(res)
   result.innerHTML = output
    resultData = output

    history.pushState({result: resultData});
    showHistory()
    result.innerHTML = output
}

function showHistory(){
    var log  = ""
    for(var key in history){
        log += history[key].result
    }
    logHistory.innerHTML = log
}


var indexHistory = document.getElementsByClassName("his-img")
indexHistory[0].addEventListener("click", function () {
    logHistory.classList.toggle("indexHistory")
})

function change(){
    input.innerHTML = input.innerHTML*(-1)
}
function percent(){
    var res = input.innerHTML;
    input.innerHTML = res / 100}
function clean(){
    result.innerHTML = " "
    input.innerHTML = " "
}

function undo(){
    var res = input.innerHTML
    input.innerHTML = res.substring(0, res.length - 1);
}
//lich su kq




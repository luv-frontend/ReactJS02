let gt1;
let gt2;
let tam;
let pheptoan;



var input = document.querySelector(".input");
var inputbefore = document.querySelector(".input-before");
var item = Array.from(document.querySelectorAll(".item"));
item.forEach(function (btn) {
    btn.addEventListener("click", function () {

        switch (btn.innerHTML) {
            case 'AC':
                input.innerHTML = "0";
                inputbefore.innerHTML = "0";
                break;
            case '+':
                gt1 = Number(input.innerHTML);
                pheptoan = "+"
                inputbefore.innerHTML = input.innerHTML + "+";
                input.innerHTML = "";
                break;
            case '-':
                gt1 = Number(input.innerHTML);
                pheptoan = "-"
                inputbefore.innerHTML = input.innerHTML + "-";
                input.innerHTML = "";
                break;
            case 'X':
                gt1 = Number(input.innerHTML);
                pheptoan = "X"
                inputbefore.innerHTML = input.innerHTML + "x";
                input.innerHTML = "";
                break;
            case '/':
                gt1 = Number(input.innerHTML);
                pheptoan = "/"
                inputbefore.innerHTML = input.innerHTML + "/";
                input.innerHTML = "";
                break;
            case '%':
                gt1 = Number(input.innerHTML);
                pheptoan = "%"
                inputbefore.innerHTML = input.innerHTML + "%";
                input.innerHTML = "";
                break;
            case '+/-':
                tam = Number(input.innerHTML);
                input.innerHTML = -tam;
                break;
            case '=':
                switch (pheptoan) {
                    case '+':
                        gt2 = Number(input.innerHTML);
                        input.innerHTML = gt2 + gt1;
                        inputbefore.innerHTML = gt1 + "+" + gt2 + "=";
                        break;
                    case '-':
                        gt2 = Number(input.innerHTML);
                        input.innerHTML = gt1 - gt2;
                        inputbefore.innerHTML = gt1 + "-" + gt2 + "=";
                        break;
                    case 'X':
                        gt2 = Number(input.innerHTML);
                        input.innerHTML = gt1 * gt2;
                        inputbefore.innerHTML = gt1 + "x" + gt2 + "=";
                        break;
                    case '/':
                        gt2 = Number(input.innerHTML);
                        input.innerHTML = gt1 / gt2;
                        inputbefore.innerHTML = gt1 + "/" + gt2 + "=";
                        break;
                    case '%':
                        gt2 = Number(input.innerHTML);
                        input.innerHTML = gt1 % gt2;
                        inputbefore.innerHTML = gt1 + "%" + gt2 + "=";
                        break;

                    default:
                        break;
                }
                break;
            default:
                break;
        }
    })
})


item.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (btn.innerHTML == "0" || btn.innerHTML == "1"
            || btn.innerHTML == "2" || btn.innerHTML == "3"
            || btn.innerHTML == "4" || btn.innerHTML == "5" ||
            btn.innerHTML == "6" || btn.innerHTML == "7" ||
            btn.innerHTML == "8" || btn.innerHTML == "9" ||
            btn.innerHTML == ".") {
            input.innerHTML += btn.innerHTML;
        }
    })

})






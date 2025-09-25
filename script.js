
const pantalla = document.getElementById("pantalla");


let total = 0;
let newNum = 0;
let newNum2 = 0;
let operacion = null;
let reset = false;

function addNum(num) {
    if (reset == true) {
        pantalla.innerHTML="";
        reset = false;
    }
    if (pantalla.innerText=="0") {
        pantalla.innerText =num;
    } else {
        pantalla.innerText +=num;
        }
    newNum = parseInt(pantalla.innerHTML);
}

function opSelect(op) {
    total = parseInt(pantalla.innerHTML);
    operacion = op;
    pantalla.innerText = 0;
}

function opExect() {
    newNum = parseInt(pantalla.innerHTML);
    switch(operacion){
        case "suma":
            total = total+newNum;
            break;
        case "resta":
            total = total-newNum;
            break;
        case "mult":
            total = total*newNum;
            break;
        case "div":
            total = total/newNum;
            break;
    }
    pantalla.innerText = total;
    reset = true;
    document.cookie="total="+total;
}
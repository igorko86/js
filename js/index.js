function showMessage(message){
    alert(message);
}
function checkNum(num){
    if(isNaN(num)){
        return false;
    }else{
        return true;
    }
}
function result(a,b,c){
    if(a != 0 && checkNum(parseInt(a))&&checkNum(parseInt(b))&&checkNum(parseInt(c))){
        showMessage(sum(a,b,c));
    }else{
        showMessage("Вибачте ви ввели не коректне значення!");
    }
}
function sum(a,b,c){
    return b*b - 4 * a * c;
}
let a = parseInt(prompt("введіть число більше нуля"));
let b = parseInt(prompt("введіть число більше нуля"));
let c = parseInt(prompt("введіть число більше нуля"));
result(a,b,c);
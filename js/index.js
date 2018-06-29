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
let a = prompt("введіть число більше нуля");
let b = prompt("введіть число більше нуля");
let c = prompt("введіть число більше нуля");
result(a,b,c);


/*  codewarse.com 
1. The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

function century(year) {
  return Math.ceil(year/100);
}
2.Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0

Можна використати Math.min(),Math.min();
var min = function(list){
		let min = list[0];
		for(let i = 1; i < list.length;i++){
			if(list[i] < min){
				min = list[i];
			}
		}
		return min;
}

var max = function(list){
		let max = list[0];
		for(let i = 1; i < list.length;i++){
			if(list[i] > max){
				max = list[i];
			}
		}
		return max;
}

*/
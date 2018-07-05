const userNum = parseInt(prompt("Введіть число більше 0"));
function getNumFibo(userNum){
    let n1 = 1;
    let n2 = 1;
    if(userNum < 1){
        return false;
    }else{
        for(let i = 0; i < userNum; i++){
            const result = n1 + n2;
            n1 = n2;
            n2 = result;
        }
    }
    
    return n2;
}
console.log(getNumFibo(userNum));

/*Array*/
function getNumFibo1(userNum){
    const numArr = [1,1];
    if(userNum < 1){
        return false;
    }else{
        for( let i = 0; i < userNum; i++){
          numArr.push(numArr[numArr.length - 1] + numArr[numArr.length - 2]);
        } 
    }
   
    return numArr[numArr.length - 1];
} 
//console.log(getNumFibo1(userNum));

/*recursion*/

function getFibonachi3(userNum){
    if (userNum == 0){
        return 0;
    }
    if (userNum == 1){
        return 1;
    }
    else{
        return getFibonachi3(userNum - 1) + getFibonachi3(userNum - 2);
    }
}
 //console.log(getFibonachi3(userNum));
 
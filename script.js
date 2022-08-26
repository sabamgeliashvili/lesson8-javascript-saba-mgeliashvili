// //  Task 1

let reversed = "";
function ispalindrome(txt){
for(let char of txt){
    reversed = char + reversed;
}
return reversed === txt;
}
console.log(ispalindrome('madam'))


//  Task 2


let txt = "adsasdoasd"
for( let i = 0 ; i < txt.length ; i++){
    if(txt.indexOf(txt.charAt(i)) == txt.lastIndexOf(txt.charAt(i))){
        console.log(txt.charAt(i))
    }
}




// // Task 4


function suffix(x){
    if(x === 1){
        return  x + "st"
    }else if(x === 2){
        return x + "nd"
    }else if(x === 3){
        return x + "rd"
    }else if(x === x){
        return x + "th"
    }
}
let num1 = suffix(1)
console.log(num1)



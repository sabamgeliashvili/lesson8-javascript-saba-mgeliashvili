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


// let txt = "adsasdoasd"
// for( let i = 0 ; i < txt.length ; i++){
//     if(txt.indexOf(txt.charAt(i)) == txt.lastIndexOf(txt.charAt(i))){
//         console.log(txt.charAt(i))
//     }
// }


//  // task 3

const txt = "sad midis matarebeli"
console.log(txt.split(" "));
function firstCharupper(t){
    return t[0].toUpperCase() + t.substring(1);
}
function camelize(x) {
    let splittedArr = txt.split(" ");
    let result = '';
    splittedArr.forEach((val,index ) => {
        if(index == 0 ) result = result + val;
        else result = result + firstCharupper(val)
    });
    return result
}
console.log(camelize(txt))



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


  const users = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]; 
 const x = users.map((users) => {
let fullinfo = "<h1>" + users.name + "</h1>" + "<h2>" + users.age + "</h2>";
return fullinfo
 });
 console.log(x)



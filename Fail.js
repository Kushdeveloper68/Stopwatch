// let userInput = "Kushprajapati";
// const specialChar = true;
// const capitalLetter = true;
// const number = true;
// const specialCharactors = "@#$_&-+{|×÷£¢€¥%}/!?;:'";
// const numbers = "1234567890";
// let n = "";
// function passwordCreate(userI) {
//   if (!userI) {
//     console.log("Enter your input");
//     return;
//   }

//   for (let i = 0; i < userI.length; i++) {
//     let char = userI[i];

//     // Add capital letter
//     if (capitalLetter && Math.random() > 0.5) {
//       char = char.toUpperCase();
//     }

//     // Add special character
//     if (specialChar) {
//       const randomSpecial = specialCharactors[Math.floor(Math.random() * specialCharactors.length)];
//       char += randomSpecial;
//     }

//     // Add number
//     if (number) {
//       const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
//       char += randomNumber;
//     }

//     n += char;
//   }

// return n;
// }

// Stop watch 
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let millisecond = document.getElementById("millisecond");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let s = 0;
let mil = 0;
let min = 0;
function minuteFuction() {
 minut = setInterval(function() {
    minute.innerText = min += 1;
  }, 60000);
 secon  =  setInterval(function() {
    if(s == 60) {
      s = 0;
    }
    second.innerText = s += 1;
  }, 1000);
 millisecon =  setInterval(function() {
    if(mil == 100) {
     mil = 0;
    }
    millisecond.innerText = mil += 1;
  }, 10);
}
function stopFuntion() {
  clearInterval(minut);
  clearInterval(secon);
  clearInterval(millisecon);
}
function resetFuntion()  {
  stopFuntion();
  minute.innerText = 0;
  second.innerText = 0;
  millisecond.innerText = 0;
  min = 0;
  s = 0;
  mil = 0;
}
start.addEventListener("click", () => minuteFuction());
stop.addEventListener("click", () => stopFuntion());
reset.addEventListener("click", () => resetFuntion() );
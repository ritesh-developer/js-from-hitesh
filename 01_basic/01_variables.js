const accountId = 12345

let accountEmail = "niet@gmail.com"

var accountPassword = "123456789" /* please don't use var */

accountCity = "Noida" /* variable will decleard by this way just because javaScript all this thing allocate the variable in the memory without define them is javaScript thing 😄😄*/

let accountState; /* if we not define the variable then javascript print undefine becasuse you not define the value in the variable ("kucch samajh me aaya kaya ")*/

//accountId = 2 // not allowed

accountEmail="ritesh@gmail.com"

accountPassword="987654321"

accountCity = "delhi"


console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope

***Acodding the ChatGpt***

{People avoid var because it has issues with scope and hoisting,
leading to unpredictable behavior. Instead, let and const offer
block-scoping, reducing errors and improving code readability.
const also ensures constants stay unchanged,
making modern JavaScript code cleaner and more reliable.}

******

*/


console.table([accountId,accountEmail,,accountPassword,accountCity,accountState])

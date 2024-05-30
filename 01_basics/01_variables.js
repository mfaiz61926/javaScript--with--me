const accountId=12341
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="jaipur"

// accountId=2 not allowed

/*
prefer not to use var 
because of issue in block scope and functional scope
 */

accountEmail="hitjj@gmailcom"
accountPassword="5678"
accountCity="mumbai"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])
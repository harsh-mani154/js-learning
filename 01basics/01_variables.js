const accountId = 144553
let accountEmail = "htdsnjashvd@jhsdjsdh.com"
var accountPassword = "hfdhjsj2444"
accountCity = 'New Delhi'
let accountState = "Delhi"

// accountId = 2 // not allowed

/* 
Prefer not to use var
Because of issue in the block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
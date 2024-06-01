//stack(primitive)   ,   heap(non-primitive)

let myYoutubename="hitesh"
let anothername=myYoutubename
anothername="chai"

console.log(myYoutubename)
console.log(anothername)
 
let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne
userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
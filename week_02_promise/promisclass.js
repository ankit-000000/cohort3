/*
// promis class gives a promis that it will return  something in the future.
function fn() {
  console.log("ankit");
}
// this promises us that it will call the fn function after 3seconds

setTimeout(fn, 3000);

// promises are the easier way to implement this

*/

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve=>setTimeout{resolve,ms});
// }

// function callback(){
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

function random() {}
function callback() {
  console.log("Promis succeded");
}

let p = new Promise(random);
p.then(callback);
console.log(p);

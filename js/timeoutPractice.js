//setTimeout.pdf activities

//ACTIVITY 1
console.log("Start");
setTimeout(() => console.log("Timeout executed!"), 2000);
console.log("End");

//setTimeout delays execution because the console.log is inside of it.

//ACTIVITY 2
// setTimeout(console.log("Hello!"), 2000);
//This does not work because setTimeout takes parameter of a function.

setTimeout(() => console.log("Hello!"), 2000);

//**ACTIVITY 3 IN FUN.HTML**

//ACTIVITY 4
setTimeout(() => console.log("First message after 2s"), 2000);
setTimeout(() => console.log("Second message after 3s"), 3000);
setTimeout(() => console.log("Third message after 7s"), 7000);
//If two setTimeouts have the same delay, then they will execute at the same time.
//To continuously loop, we would make a setInterval with an arrow function that points to these three setTimeouts.

//**ACTIVITY 5 IN FUN.HTML**
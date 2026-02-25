console.log("Hello World!");

//First and last slide example
const buttonA = document.querySelector("#buttonA");
const headingA = document.querySelector("#headingA");
buttonA.addEventListener("click", (function() {
    const name = prompt("What is your name?");
    if (name == null || name === ""){
        alert("You couldn't even bother to type something?");
        headingA.textContent = "Try again!";
        pA.textContent = "Maybe you should try typing something this time.";
    }else{
        alert(`Hello ${name}, nice to see you!`);
        headingA.textContent = `Welcome, ${name}!`;
        pA.textContent = "Take your coat off, stay a while!";
    }
}));

//Second slide example
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keypress", (event => {
    output.textContent = `You pressed ${event.key}.`;
}));
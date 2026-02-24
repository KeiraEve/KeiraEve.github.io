console.log("Hello World!");

const buttonA = document.querySelector("#buttonA");
const headingA = document.querySelector("#headingA");

buttonA.addEventListener("click", (function() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
    //SET HEADER TEXT WITH USER INPUT
    headingA.textContent = `Welcome, ${name}!`;
}));
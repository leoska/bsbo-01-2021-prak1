"use strict";

const button = document.querySelector(".form__button");
const inputs = document.querySelectorAll(".form__input");
const text = document.querySelector(".text");

const sayHello = (event) => {
    event.preventDefault();
    text.textContent = `Здравствуйте, ${inputs[0].value} ${inputs[1].value}`;
    inputs[0].value = "";
    inputs[1].value = "";
}

button.addEventListener("click", sayHello);
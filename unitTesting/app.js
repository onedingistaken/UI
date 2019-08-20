// const { generateText, createOutput } = require('./util');
import { generateText, createOutput } from './util.js';

const initApp = () => {
    const addUserBtn = document.querySelector("#btnAddUser");
    addUserBtn.addEventListener("click", addUser);
}

const addUser = () => {
    // fetch user input
    // create a new HTML element based on fetched user input
    // append the element to DOM
    const newUserNameInput = document.querySelector("input#name");
    const newUserAgeInput = document.querySelector("input#age");

    const outputText = generateText(newUserNameInput.value, newUserAgeInput.value);
    // console.log(outputText);
    const userList = document.querySelector(".user-list");
    const newElement = createOutput(outputText);
    userList.appendChild(newElement);
}

initApp();   
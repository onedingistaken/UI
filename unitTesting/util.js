// exports.generateText = (name, age) => {
//     return `${name} (${age} years old)`;
// }

// exports.createOutput = (text) => {
//     const newElement = document.createElement("li");
//     newElement.classList.add("user-item");
//     newElement.textContent = text;
//     return newElement;
// }

export const generateText = (name, age) => {
    return `${name} (${age} years old)`;
}

export const createOutput = (text) => {
    const newElement = document.createElement("li");
    newElement.classList.add("user-item");
    newElement.textContent = text;
    return newElement;
}

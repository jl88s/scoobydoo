
/* 1. Use the images, HTML, CSS, and JavaScript to  create a page with the following: 
onload open a dialog that displays the text "My name is Scooby-Doo!" 
*/
let onLoadMessage;

onLoadMessage = window.alert("My name is Scooby-Doo!");

/*
2. Create an object literal named "Dog" or "Scooby", and associated methods to display the dialog boxes. Have one box display on page load, and then other display when the user clicks on the image of Scooby. 
*/
let dog = {
    "name": "Scoobert Doobert",
    "nickName": "Scooby-Doo",
    "color": "brown with black spots",
    "breed": "I'm a Great Dane",
    "catchphrases": "Scooby-Dooby-Doo!"
}

function displayInfo() {
    window.alert(`Hello World! You may know me as ${dog.nickName}, but my real name is ${dog.name}. ${dog.breed} and the color of my fur is ${dog.color}. That's all for now.... ${dog.catchphrases}!`);
}


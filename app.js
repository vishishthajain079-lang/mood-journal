const quotes = {

    happy: [
        "Keep smiling! Your happiness makes the world brighter 🌸",
        "Happiness is a choice. Enjoy every moment ✨",
        "Your smile is your superpower 💗"
    ],

    calm: [
        "Stay calm and enjoy the peaceful moments 🌿",
        "A peaceful mind creates beautiful thoughts ✨",
        "Breathe in peace, breathe out stress 💙"
    ],

    sad: [
        "Better days are coming. Keep moving forward 💙",
        "Every new day brings a new hope 🌈",
        "You are stronger than your bad moments ✨"
    ],

    stressed: [
        "Take a deep breath. You can do this 🌸",
        "One step at a time. Everything will be okay 💗",
        "Relax your mind and believe in yourself ✨"
    ]

};


const images = {

    happy: "./icons/happy.png",
    calm: "./icons/calm.png",
    sad: "./icons/sad.png",
    stressed: "./icons/stressed.png"

};


let moodButtons = document.querySelectorAll(".moodButton");

let quotePopup = document.getElementById("quotePopup");

let popupQuote = document.getElementById("popupQuote");

let popupImage = document.getElementById("popupImage");

let closePopup = document.getElementById("closePopup");



moodButtons.forEach(function(button){

    button.onclick = function(){

        let mood = button.getAttribute("data-mood");


        let randomNumber = Math.floor(
            Math.random() * quotes[mood].length
        );


        popupQuote.innerHTML = quotes[mood][randomNumber];

        popupImage.src = images[mood];

        quotePopup.style.display = "flex";

    };

});



closePopup.onclick = function(){

    quotePopup.style.display = "none";

};



document.getElementById("saveButton").onclick = function(){

    document.getElementById("message").innerHTML =
    "Your mood has been saved 💗";

};

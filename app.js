```javascript
const quotes = {

    happy: [
        "Keep smiling! Your happiness makes the world brighter 🌸",
        "Happiness looks beautiful on you ✨",
        "A happy heart creates a happy life 💗",
        "Enjoy the little moments, they become the best memories 🌈",
        "Your smile can brighten someone's day ☀️"
    ],


    calm: [
        "A calm mind brings peace and positive thoughts 🌿",
        "Slow down, breathe, and enjoy the present moment 🍃",
        "Peace begins with a peaceful mind ✨",
        "Stay calm and trust the journey 🌸",
        "Relax, everything will work out beautifully 💙"
    ],


    sad: [
        "It's okay to feel sad sometimes. Better days are coming 💙",
        "Storms don't last forever. Keep going 🌧️",
        "Your feelings are valid. Tomorrow is a new beginning 🌅",
        "Small steps can lead to brighter days ✨",
        "Remember, even the darkest night ends with sunrise 🌞"
    ],


    stressed: [
        "Take a deep breath. You can handle everything ✨",
        "One step at a time. You don't have to do everything at once 🌿",
        "Believe in yourself and take a small break 💗",
        "Your peace is more important than perfection 🌸",
        "Relax your mind and focus on what you can control 🌈"
    ]

};



const images = {

    happy: "./icons/happy.png",

    calm: "./icons/calm.png",

    sad: "./icons/sad.png",

    stressed: "./icons/stressed.png"

};



const moodButtons = document.querySelectorAll(".moodButton");

const quotePopup = document.getElementById("quotePopup");

const popupQuote = document.getElementById("popupQuote");

const popupImage = document.getElementById("popupImage");

const closePopup = document.getElementById("closePopup");



moodButtons.forEach(button => {

    button.addEventListener("click", function(){

        let mood = this.dataset.mood;


        // Picks a random quote from that mood
        let randomQuote =
        quotes[mood][Math.floor(Math.random() * quotes[mood].length)];


        popupQuote.innerHTML = randomQuote;

        popupImage.src = images[mood];


        quotePopup.style.display = "flex";

    });

});



closePopup.addEventListener("click", function(){

    quotePopup.style.display = "none";

});



document.getElementById("saveButton").addEventListener("click", function(){

    document.getElementById("message").innerHTML =
    "Your mood has been saved 💗";

});
```

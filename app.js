const moodButtons = document.querySelectorAll(".moodButton");
const feelingsBox = document.getElementById("feelings");
const saveButton = document.getElementById("saveButton");
const quoteButton = document.getElementById("quoteButton");
const message = document.getElementById("message");

const quotePopup = document.getElementById("quotePopup");
const popupQuote = document.getElementById("popupQuote");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

let chosenMood = "";

const moodInfo = {
  happy: {
    quotes: [
      "Keep noticing the small good moments today.",
      "Your smile can make a small moment feel brighter.",
      "Enjoy this feeling and carry a little of it with you."
    ],
    icon: "./icons/happy.png"
  },

  calm: {
    quotes: [
      "You can carry this quiet moment with you.",
      "A peaceful moment can be small and still matter.",
      "You are allowed to move gently through your day."
    ],
    icon: "./icons/calm.png"
  },

  sad: {
    quotes: [
      "It is okay to have a difficult day. You deserve kindness.",
      "You do not have to handle every feeling all at once.",
      "A hard feeling can change; give yourself some care today."
    ],
    icon: "./icons/sad.png"
  },

  stressed: {
    quotes: [
      "One small task at a time is still progress.",
      "You can focus on the next small step, not everything at once.",
      "Resting for a moment can help you begin again."
    ],
    icon: "./icons/stressed.png"
  }
};

const savedEntry = localStorage.getItem("latestMoodEntry");

if (savedEntry) {
  const oldEntry = JSON.parse(savedEntry);
  chosenMood = oldEntry.mood;
  feelingsBox.value = oldEntry.feelings;
  message.textContent = "Welcome back. Your last mood was: " + oldEntry.mood;
}

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chosenMood = button.dataset.mood;
    message.textContent = "You chose: " + chosenMood;
  });
});

saveButton.addEventListener("click", () => {
  if (chosenMood === "") {
    message.textContent = "Please choose a mood first.";
    return;
  }

  const journalEntry = {
    mood: chosenMood,
    feelings: feelingsBox.value,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem("latestMoodEntry", JSON.stringify(journalEntry));
  message.textContent = "Your mood and note are saved.";
});

quoteButton.addEventListener("click", () => {
  if (chosenMood === "") {
    message.textContent = "Choose a mood first.";
    return;
  }

  const chosenInfo = moodInfo[chosenMood];

  const randomNumber = Math.floor(
    Math.random() * chosenInfo.quotes.length
  );

  popupQuote.textContent = chosenInfo.quotes[randomNumber];
  popupImage.src = chosenInfo.icon;

  quotePopup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  quotePopup.style.display = "none";
});

quotePopup.addEventListener("click", (event) => {
  if (event.target === quotePopup) {
    quotePopup.style.display = "none";
  }
});

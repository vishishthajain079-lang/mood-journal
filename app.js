const moodButtons = document.querySelectorAll(".moodButton");
const feelingsBox = document.getElementById("feelings");
const saveButton = document.getElementById("saveButton");
const allowButton = document.getElementById("allowButton");
const quoteButton = document.getElementById("quoteButton");
const message = document.getElementById("message");

let chosenMood = "";

// Each mood has many quotes now.
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

// This wakes up the notification helper.
navigator.serviceWorker.register("./sw.js");

// When someone clicks a mood button.
moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chosenMood = button.dataset.mood;
    message.textContent = "You chose: " + chosenMood;
  });
});

// Save mood and note on this computer.
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

// Ask browser permission for notifications.
allowButton.addEventListener("click", async () => {
  const answer = await Notification.requestPermission();

  if (answer === "granted") {
    message.textContent = "Kind reminders are allowed.";
  } else {
    message.textContent = "Notifications are not allowed yet.";
  }
});

// Show one random quote for the chosen mood.
quoteButton.addEventListener("click", async () => {
  if (chosenMood === "") {
    message.textContent = "Choose a mood first.";
    return;
  }

  if (Notification.permission !== "granted") {
    message.textContent = "First click Allow kind reminders.";
    return;
  }

  const helper = await navigator.serviceWorker.ready;
  const chosenInfo = moodInfo[chosenMood];

  // Pick one random quote from the chosen mood.
  const randomNumber = Math.floor(
    Math.random() * chosenInfo.quotes.length
  );

  const randomQuote = chosenInfo.quotes[randomNumber];

  helper.showNotification("A little note for you", {
    body: randomQuote,
    icon: chosenInfo.icon
  });
});
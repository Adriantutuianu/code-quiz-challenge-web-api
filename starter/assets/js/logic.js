let timer;
let seconds = 60;

function startQuiz() {
  // Hide start screen and show questions
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
  // Start the timer
  startTimer();
}

function startTimer() {
  // Set up an interval to update the timer every second
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  // Decrement the timer and update the display
  if (seconds > 0) {
    seconds--;
    document.getElementById("time").textContent = seconds;
  } else {
    // If time reaches 0, clear the interval (stop the timer)
    clearInterval(timer);
  }
}

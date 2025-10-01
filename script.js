// script.js

let timer;
let ms = 0, seconds = 0, minutes = 0, hours = 0;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

// Format time -> HH:MM:SS.ms
function formatTime(h, m, s, ms) {
  return (
    String(h).padStart(2, "0") + ":" +
    String(m).padStart(2, "0") + ":" +
    String(s).padStart(2, "0") + "." +
    String(ms).padStart(2, "0")
  );
}

// Update display
function updateDisplay() {
  display.textContent = formatTime(hours, minutes, seconds, ms);
}

// Start function
function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      ms++;
      if (ms === 100) {
        ms = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10); // update every 10ms
  }
}

// Stop function
function stopTimer() {
  running = false;
  clearInterval(timer);
}

// Reset function
function resetTimer() {
  running = false;
  clearInterval(timer);
  ms = 0; seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
  laps.innerHTML = ""; // clear laps
}

// Lap function
function recordLap() {
  if (running) {
    const li = document.createElement("li");
    li.textContent = formatTime(hours, minutes, seconds, ms);
    laps.appendChild(li);
  }
}

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);

// Initialize
updateDisplay();

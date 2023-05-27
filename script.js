let timerId;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerId = setInterval(updateTimer, 10);
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timerId);
    isRunning = false;
  }
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  document.getElementById("timer").textContent = "00:00:00";
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("timer").textContent = formattedTime;
}

function formatTime(time) {
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, "0");
}

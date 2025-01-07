const countdownDate = new Date("Mar 12, 2025 00:00:00").getTime();

const interval = setInterval(function () {
  const now = new Date().getTime();

  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  const progress = (1 - (distance / (countdownDate - new Date().getTime()))) * 100;
  document.getElementById("countdown-progress").style.width = `${progress}%`;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown-timer").innerHTML = "Event Started!";
  }
}, 1000);

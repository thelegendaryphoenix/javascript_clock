const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  // Move seconds
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90; //add offset for change of axis in .hand
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  // Move minutes
  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;
  // Move hours
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
// Update every 1 second
setInterval(setDate, 1000);

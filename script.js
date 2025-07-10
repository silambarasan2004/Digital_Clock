const clock = document.getElementById("clock");
const ampm = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggle-format");

let is24Hour = false;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampmText = "";

  if (!is24Hour) {
    ampmText = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
  }

  // Format to 2-digits
  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  // Make colon blink every second
  const colon = seconds % 2 === 0 ? ":" : " ";

  clock.innerText = `${hh}${colon}${mm}${colon}${ss}`;
  ampm.innerText = is24Hour ? "" : ampmText;

  // Format date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.innerText = now.toLocaleDateString(undefined, options);
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.innerText = is24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
  updateClock();
});

// Initial call
updateClock();
setInterval(updateClock, 1000);

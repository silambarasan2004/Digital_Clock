# Digital_Clock
## Date: 10/7/2025
## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>TimeTrack - Live Clock</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>TimeTrack</h1>
    <p class="subtitle">Live Digital Clock</p>
    
    <div id="clock-container">
      <div id="clock"></div>
      <div id="ampm"></div>
    </div>
    
    <div id="date"></div>
    <button id="toggle-format">Switch to 24-hour</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #463b3b;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1rem;
  color: #888;
  margin-bottom: 30px;
}

#clock-container {
  background-color: #1e1e1e;
  padding: 25px 35px;
  border-radius: 15px;
  font-size: 48px;
  position: relative;
}

#clock {
  font-weight: bold;
  letter-spacing: 3px;
  transition: opacity 0.3s;
}

#ampm {
  font-size: 0.5em;
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: #aaa;
}

#date {
  margin-top: 15px;
  font-size: 1.1rem;
  color: #ccc;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #0056b3;
}
```
## Javascript:
```
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
```
## Output:
<img width="1919" height="963" alt="Screenshot 2025-07-10 210522" src="https://github.com/user-attachments/assets/dc9e650b-d68f-472a-a3c3-be18983c8d28" />

## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.

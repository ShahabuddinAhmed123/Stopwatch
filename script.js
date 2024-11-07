const display = document.getElementById("timeDisplay")
let timer = null;
let startTime = 0;
let stopTime = 0;
let isRunning = false;
const ball = document.getElementById("ball");

function start(){

    if(!isRunning){
        startTime = Date.now() - stopTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer)
        stopTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
startTime = 0;
stopTime = 0;
isRunning = false;
display.textContent = '00:00:00.00'
}
function update(){
    const currentTime = Date.now()
    stopTime = currentTime - startTime;

    let hr = Math.floor(stopTime / (1000 * 60 * 60))
    let min = Math.floor(stopTime / (1000 * 60 ) % 60)
    let sec = Math.floor(stopTime / (1000) % 60)
    let milisec = Math.floor((stopTime % 999)/100)

    display.textContent = `${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}.${formatTime(milisec)}`;

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}




const duration = 10; 
const radius = 247; 

function animateBall() {
  let startTime = null;

  function updatePosition(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) / 1000;

    // Calculate angle in radians based on elapsed time
    const angle = (elapsed / duration) * 2 * Math.PI;

    // Calculate new X and Y positions
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    // Update ball position
    ball.style.transform = `translate(${x}px, ${y}px)`;

    // Repeat animation every 60 seconds
    if (elapsed < duration) {
      requestAnimationFrame(updatePosition);
    } else {
      startTime = null;
      requestAnimationFrame(updatePosition);
    }
  }

  requestAnimationFrame(updatePosition);
}

// Start the animation
animateBall();

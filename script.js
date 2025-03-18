function updateClock() {
    const now = new Date();
    
    // Convert to Kenyan time (UTC+3)
    const options = { timeZone: 'Africa/Nairobi', hour12: false };
    const timeString = now.toLocaleTimeString('en-GB', options); 

    // Extract hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(':');

    // Update the HTML elements
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Initialize clock immediately and update every second
updateClock();
setInterval(updateClock, 1000);

function updateTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const period = hour >= 12 ? 'PM' : 'AM';
    const hourDisplay = hour % 12 || 12;
  
    document.querySelector('.hour').textContent = hourDisplay.toString().padStart(2, '0');
    document.querySelector('.minute').textContent = minute.toString().padStart(2, '0');
    document.querySelector('.second').textContent = second.toString().padStart(2, '0');
    document.querySelector('.period').textContent = period;
  
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = dayNames[now.getDay()];
    const month = monthNames[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
  
    document.querySelector('.day').textContent = day;
    document.querySelector('.month').textContent = month;
    document.querySelector('.number').textContent = date;
    document.querySelector('.year').textContent = year;
  }
  
  setInterval(updateTime, 1000);
  updateTime();
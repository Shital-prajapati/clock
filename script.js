function updateTime() {
    const timeElement = document.getElementById('time');
    
   
    const now = new Date();
    
    
    const utcOffsetInMillis = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istOffsetInMillis = 5.5 * 60 * 60 * 1000; // IST is UTC + 5:30
    const istTime = new Date(utcOffsetInMillis + istOffsetInMillis);
  
    let hours = istTime.getHours();
    let minutes = istTime.getMinutes();
    let seconds = istTime.getSeconds();
  
   
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  

  setInterval(updateTime, 1000);
  
 
  updateTime();
  
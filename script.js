window.addEventListener('scroll', function() {
    var header = document.getElementById('title');
    if (window.pageYOffset > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  

window.addEventListener('DOMContentLoaded', function() {
    var datetimeElement = document.getElementById('datetime');
  
 
    function formatDateTime(date) {
      var options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric' 
      };
      return date.toLocaleString('en-US', options);
    }
  

    setInterval(function() {
      var currentDate = new Date();
      var formattedDateTime = formatDateTime(currentDate);
      datetimeElement.textContent = formattedDateTime;
    }, 1000);
  });
  
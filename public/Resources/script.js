var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Golden gate bridge", "Fisherman's Wharf", "Alcatraz Island", "Cable Cars", "Painted Ladies", "Lombard Street", "Union square", "Twin peaks"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [28, 22, 12, 18, 8, 25, 20, 17]
    }]
  },
  options: {
    responsive: false, // Prevents resizing of the chart
    maintainAspectRatio: false // Prevents maintaining the aspect ratio
  }
});


//graph

var options = {
    type: 'line',
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
          {
            // label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 5, 9],
            borderWidth: 1
          },	
              {
                  // label: '# of Points',
                  data: [7, 11, 5, 8, 3, 7, 4, 2],
                  borderWidth: 1
              }
          ]
    },
    options: {
        scales: {
          yAxes: [{
          ticks: {
                      reverse: false
          }
        }]
      }
    }
  }
  
  var ctx = document.getElementById('chartJSContainer').getContext('2d');
  new Chart(ctx, options);

  //Google Translate Script 
  // Function to initialize the Google Translate Element
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Function to dynamically load the Google Translate script
function loadGoogleTranslate() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(script);
}

// Call the function to load the Google Translate script
loadGoogleTranslate();





//js for footer page

//back to top
document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const addRowButton = document.getElementById("addRowButton");
  const placesTableBody = document.getElementById("places-table-body");
  const userName = document.getElementById("userName");
  const submitButton = document.getElementById("submitButton");
  addRowButton.addEventListener("click", function () {
    const newRow = document.createElement("tr");

    const placeCell = document.createElement("td");
    const placeSelect = document.createElement("select");
    [
      "Golden Gate Bridge",
      "Lombard Street",
      "Twin Peaks",
      "Union Square",
      "Cable Car",
      "Alcatraz",
      "Fisherman's Wharf",
      "Painted Ladies",
      "Other",
    ].forEach((place) => {
      const option = document.createElement("option");
      option.textContent = place;
      placeSelect.appendChild(option);
    });
    placeCell.appendChild(placeSelect);
    newRow.appendChild(placeCell);

    const dateCell = document.createElement("td");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateCell.appendChild(dateInput);
    newRow.appendChild(dateCell);

    const ratingCell = document.createElement("td");
    const starRating = document.createElement("div");
    starRating.classList.add("star-rating");
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("span");
      star.classList.add("star");
      star.innerHTML = "&#9734;";
      let selected = false;
      star.addEventListener("click", function () {
        const allStars = Array.from(this.parentElement.children);
        selected = true;
        // Get the index of the clicked star
        const clickedIndex = allStars.indexOf(this);

        // Toggle the 'selected' class for each star based on its position
        allStars.forEach((star, index) => {
          if (index <= clickedIndex) {
            star.classList.add("selected");
          } else {
            star.classList.remove("selected");
          }
        });
      });
      star.addEventListener("mouseover", function () {
        const allStars = Array.from(this.parentElement.children);

        // Get the index of the clicked star
        const hoveredIndex = allStars.indexOf(this);

        // Toggle the 'selected' class for each star based on its position
        allStars.forEach((star, index) => {
          if (selected == false) {
            if (index <= hoveredIndex) {
              star.classList.add("selected");
            } else {
              star.classList.remove("selected");
            }
          }
        });
      });
      star.addEventListener("mouseout", function () {
        const allStars = Array.from(this.parentElement.children);

        // Get the index of the clicked star

        // Toggle the 'selected' class for each star based on its position
        allStars.forEach((star, index) => {
          if (!selected) {
            star.classList.remove("selected");
          }
        });
      });
      starRating.appendChild(star);
    }
    ratingCell.appendChild(starRating);
    newRow.appendChild(ratingCell);

    placesTableBody.appendChild(newRow);
    console.log(placesTableBody);
  });
  submitButton.addEventListener("click", function () {
    // Array to store data from each row
    const rowData = [];
  
    // Iterate over each row in the table body
    const rows = document.querySelectorAll("#places-table-body tr");
    rows.forEach(row => {
      // Object to store data from current row
      const rowDataItem = {};
      rowDataItem.name = userName.innerHTML;
  
      // Get place name
      const placeSelect = row.querySelector("select");
      rowDataItem.place = placeSelect.value;
  
      // Get date
      const dateInput = row.querySelector("input[type='date']");
      rowDataItem.date = dateInput.value;
  
      // Get rating
      const starRating = row.querySelector(".star-rating");
      const stars = starRating.querySelectorAll(".star");
      rowDataItem.rating = 0;
      stars.forEach((star, index) => {
        if (star.classList.contains("selected")) {
          rowDataItem.rating = index + 1;
        }
      });
  
      // Add rowDataItem to the array
      rowData.push(rowDataItem);
    });
  
    // Now you have all the row data in the `rowData` array
    // You can send this data to the server using fetch or any other method
  
    // Example using fetch
    fetch('/users/userdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowData),
    })
    .then(response => {
      if (response.ok) {
        console.log('Data sent successfully');
        // Optionally, you can reset the table or perform any other actions here
      } else {
        console.error('Failed to send data');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
   
  
});

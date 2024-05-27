document.addEventListener("DOMContentLoaded", function () {
  const addRowButton = document.getElementById("addRowButton");
  const placesTableBody = document.getElementById("places-table-body");

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
  });
});

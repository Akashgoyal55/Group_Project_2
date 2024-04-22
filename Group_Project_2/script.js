// Get the logo element
const logo = document.getElementById('logo');

// Add click event listener to the logo
logo.addEventListener('click', function() {
    // Toggle the border class
    this.classList.toggle('border');
});

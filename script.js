/**
 * Shows or hides the popup.
 * @param {boolean} show - True to show, false to hide.
 * @param {string} message - The message to display in the popup.
 */
function showPopup(show, message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    if (message) {
        popupMessage.textContent = message;
    }
    if (show) {
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'none';
    }
}

// Handle Recommendation Form Submission
document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the message from the textarea
    const message = document.getElementById('recommender-message').value;

    // Don't add an empty recommendation
    if (!message.trim()) {
        showPopup(true, "Please enter a recommendation before submitting.");
        return;
    }

    // Create a new recommendation card element
    const recommendationList = document.getElementById('recommendations-list');
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation-card');
    newRecommendation.innerHTML = `<p>"${message}"</p>`;

    // Add the new recommendation to the list
    recommendationList.appendChild(newRecommendation);

    // Clear the form fields
    document.getElementById('recommendation-form').reset();

    // Show the confirmation popup
    showPopup(true, "Your recommendation has been submitted successfully.");
});

// Handle closing the popup
document.getElementById('close-popup').addEventListener('click', function() {
    showPopup(false);
});

// Optional: Close popup if user clicks outside the content
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        showPopup(false);
    }
});

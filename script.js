document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

const movieData = {
    happy: { title: "The Grand Budapest Hotel", poster: "happy.jpg", trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk" },
    sad: { title: "The Pursuit of Happyness", poster: "sad.jpg", trailer: "https://www.youtube.com/embed/89Kq8SDyvfg" },
    excited: { title: "Mad Max: Fury Road", poster: "excited.jpg", trailer: "https://www.youtube.com/embed/hEJnMQG9ev8" },
    chill: { title: "Lost in Translation", poster: "chill.jpg", trailer: "https://www.youtube.com/embed/2whRMSGxO2s" },
    adventurous: { title: "Indiana Jones: Raiders of the Lost Ark", poster: "adventurous.jpg", trailer: "https://www.youtube.com/embed/XkkzKHCx154" },
    romantic: { title: "Pride and Prejudice", poster: "romantic.jpg", trailer: "https://www.youtube.com/embed/0vqI7RMEq30" },
    mystery: { title: "Knives Out", poster: "mystery.jpg", trailer: "https://www.youtube.com/embed/qGqiHJTsRkQ" }
};

function recommendMovie() {
    const mood = document.getElementById('mood').value;
    const movie = movieData[mood];

    if (movie) {
        document.getElementById('movieSuggestion').textContent = movie.title;
        document.getElementById('moviePoster').src = movie.poster;
        document.getElementById('moviePoster').style.display = "block";
        document.getElementById('movieTrailer').src = movie.trailer;
        document.getElementById('movieTrailer').style.display = "block";
    } else {
        document.getElementById('movieSuggestion').textContent = "Select a mood to get a recommendation!";
        document.getElementById('moviePoster').style.display = "none";
        document.getElementById('movieTrailer').style.display = "none";
    }
}

function submitReview() {
    const reviewText = document.getElementById('userReview').value;
    const rating = document.getElementById('userRating').value;

    if (!reviewText || rating < 1 || rating > 10) {
        alert("Please enter a review and a rating between 1 and 10.");
        return;
    }

    const reviewList = document.getElementById('reviewList');
    const newReview = document.createElement("li");
    newReview.textContent = `⭐ ${rating}/10 - ${reviewText}`;
    reviewList.appendChild(newReview);

    // Clear inputs
    document.getElementById('userReview').value = "";
    document.getElementById('userRating').value = "";
}

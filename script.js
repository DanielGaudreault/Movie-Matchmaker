// Toggle Dark Mode / Light Mode
document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Expanded Movie List with Posters & Trailers
const movieData = {
    happy: [
        { title: "Forrest Gump", poster: "forrest_gump.jpg", trailer: "https://www.youtube.com/embed/bLvqoHBptjg" },
        { title: "The Grand Budapest Hotel", poster: "grand_budapest.jpg", trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk" },
        { title: "Ferris Bueller’s Day Off", poster: "ferris_bueller.jpg", trailer: "https://www.youtube.com/embed/R-P6p86px6U" },
        { title: "Paddington 2", poster: "paddington2.jpg", trailer: "https://www.youtube.com/embed/dmZ3wTtlz0I" },
        { title: "The LEGO Movie", poster: "lego_movie.jpg", trailer: "https://www.youtube.com/embed/fZ_JOBCLF-I" }
    ],
    sad: [
        { title: "Schindler’s List", poster: "schindlers_list.jpg", trailer: "https://www.youtube.com/embed/gG22XNhtnoY" },
        { title: "Titanic", poster: "titanic.jpg", trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ" },
        { title: "The Green Mile", poster: "green_mile.jpg", trailer: "https://www.youtube.com/embed/Ki4haFrqSrw" },
        { title: "The Pursuit of Happyness", poster: "pursuit_of_happyness.jpg", trailer: "https://www.youtube.com/embed/DMOBlEcRuw8" },
        { title: "Marley & Me", poster: "marley_me.jpg", trailer: "https://www.youtube.com/embed/AG7TpkYr5G8" }
    ]
};

// Function to Recommend Movie
function recommendMovie() {
    const mood = document.getElementById('mood').value;
    const movies = movieData[mood];

    if (movies) {
        const movie = movies[Math.floor(Math.random() * movies.length)];
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

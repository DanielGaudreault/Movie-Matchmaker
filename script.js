function recommendMovie() {
    const mood = document.getElementById('mood').value;
    let movieSuggestion = '';

    const recommendations = {
        happy: "The Grand Budapest Hotel",
        sad: "The Pursuit of Happyness",
        excited: "Mad Max: Fury Road",
        chill: "Lost in Translation",
        adventurous: "Indiana Jones: Raiders of the Lost Ark",
        romantic: "Pride and Prejudice",
        mystery: "Knives Out"
    };

    movieSuggestion = recommendations[mood] || "Please select a mood to get a recommendation.";

    document.getElementById('movieSuggestion').textContent = movieSuggestion;
}

// Set your GitHub username here
const githubUsername = "Snow-Rider-3D-IO";  // Change this to dynamically get your GitHub username

function redirectToGames() {
    if (githubUsername) {
        const url = `https://${githubUsername}.github.io/games.html`;
        window.location.href = url;
    } else {
        alert("GitHub username is not set!");
    }
}

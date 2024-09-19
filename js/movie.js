document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieFile = urlParams.get('movie');

  if (movieFile) {
    const videoPlayer = document.getElementById('moviePlayer');
    videoPlayer.src = movieFile;

    // Hide intro and show video player
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    alert('Movie file not found.');
  }
});

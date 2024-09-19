document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const folder = urlParams.get('folder');

  if (folder) {
    const episodesContainer = document.getElementById('episodesContainer');
    // Example hardcoded episodes; replace with actual file list
    const episodes = [
      'Episode 1.mp4',
      'Episode 2.mp4',
      'Episode 3.mp4'
    ];

    episodesContainer.innerHTML = '';
    episodes.forEach(episode => {
      const episodeElement = document.createElement('div');
      episodeElement.classList.add('item');
      episodeElement.innerHTML = `
        <a href="movie.html?movie=${encodeURIComponent(`Shows/${folder}/${episode}`)}">
          <h3>${episode}</h3>
        </a>
      `;
      episodesContainer.appendChild(episodeElement);
    });

    // Hide intro and show episodes
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    alert('Folder not found.');
  }
});

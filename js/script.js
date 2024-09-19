document.addEventListener('DOMContentLoaded', () => {
  const shows = [
    {
      title: 'The Walking Dead: The Ones Who Live',
      image: 'images/TheWalkingDead.jpg',
      page: 'show.html',
      folder: 'The Walking Dead The Ones Who Live'
    },
    // Add more shows here
  ];

  const movies = [
    {
      title: 'Incredibles (2004)',
      image: 'images/Incredibles.jpg',
      page: 'movie.html',
      file: 'Movies/Incredibles.mp4'
    },
    // Add more movies here
  ];

  function displayContent(containerId, items, isMovie = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <a href="${item.page}?${isMovie ? 'movie=' : 'folder='}${encodeURIComponent(item.file || item.folder)}">
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
        </a>
      `;
      container.appendChild(itemElement);
    });
  }

  displayContent('showsContainer', shows);
  displayContent('moviesContainer', movies, true);

  // Display the main content after intro is done
  document.getElementById('intro').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});

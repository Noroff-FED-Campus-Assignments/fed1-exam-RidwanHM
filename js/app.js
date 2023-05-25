const resultsContainer = document.querySelector("#js-list-container");
const loadMoreButton = document.querySelector("#load-more");

const postsUrl = "https://excellent-things.flywheelsites.com/wp-json/wp/v2/posts/";
const mediaUrl = "https://excellent-things.flywheelsites.com/wp-json/wp/v2/media/";

let currentPage = 1;
const postsPerPage = 10;

async function fetchCities() {
  try {
    const postsResponse = await fetch(`${postsUrl}?page=${currentPage}&per_page=${postsPerPage}`);
    const posts = await postsResponse.json();

    const mediaResponse = await fetch(mediaUrl);
    const media = await mediaResponse.json();

    let html = "";

    posts.forEach(city => {
      const featuredImageId = city.featured_media;
      const featuredImage = media.find(image => image.id === featuredImageId);
      const imageUrl = featuredImage ? featuredImage.source_url : "";

      html += `
        <h2>${city.title.rendered}</h2>
        <img src="${imageUrl}" alt="Featured Image" class="city-image">
        <a href="/details.html?id=${city.id}"><p>Press the image for more Info</p>
      </a>`;
    });

    if (currentPage === 1) {
      resultsContainer.innerHTML = html;
    } else {
      resultsContainer.innerHTML += html;
    }

    if (posts.length >= postsPerPage) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  } catch (error) {
    resultsContainer.innerHTML = `Error: ${error}`;
  }
}

function handleLoadMoreClick() {
  currentPage++;
  fetchCities();
}

loadMoreButton.addEventListener("click", handleLoadMoreClick);

fetchCities();

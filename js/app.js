const resultsContainer = document.querySelector("#js-list-container");
const loadMoreButton = document.querySelector("#load-more");

const postsUrl = "https://fluffy-line.flywheelsites.com/wp-json/wp/v2/posts/";
const mediaUrl = "https://fluffy-line.flywheelsites.com/wp-json/wp/v2/media/";

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
        <div class="image-container">
          <h2>${city.title.rendered}</h2>
          <img src="${imageUrl}" alt="Featured Image" class="city-image" data-original-width="200">
          <a href="/details.html?id=${city.id}"><p>Press here for more Info about ${city.title.rendered}</p></a>
        </div>`;
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

    addImageClickHandlers();
  } catch (error) {
    resultsContainer.innerHTML = `Error: ${error}`;
  }
}

function handleLoadMoreClick() {
  currentPage++;
  fetchCities();
}

function addImageClickHandlers() {
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach(container => {
    const image = container.querySelector(".city-image");

    image.addEventListener("click", event => {
      event.stopPropagation();
      const isEnlarged = image.classList.contains("enlarged");

      if (isEnlarged) {
        image.style.transform = "scale(1)";
      } else {
        image.style.transform = "scale(1.5)";
      }

      image.classList.toggle("enlarged");
    });
  });

  document.addEventListener("click", event => {
    const clickedElement = event.target;

    if (!clickedElement.classList.contains("city-image")) {
      imageContainers.forEach(container => {
        const image = container.querySelector(".city-image");

        if (image.classList.contains("enlarged")) {
          image.style.transform = "scale(1)";
          image.classList.remove("enlarged");
        }
      });
    }
  });
}

loadMoreButton.addEventListener("click", handleLoadMoreClick);





fetchCities();


document.addEventListener("DOMContentLoaded", () => {
    const resultsContainer = document.querySelector(".swiper-wrapper");
    
  
    const postsUrl = "https://fluffy-line.flywheelsites.com/wp-json/wp/v2/posts/";
    const mediaUrl = "https://fluffy-line.flywheelsites.com/wp-json/wp/v2/media/";
  
    let media = [];
    let posts = [];
  
    async function fetchBlogsAndInitializeSwiper() {
      try {
        const postsResponse = await fetch(postsUrl);
        posts = await postsResponse.json();
  
        const mediaResponse = await fetch(mediaUrl);
        media = await mediaResponse.json();
  
        renderPosts(posts);
  
        return { media, posts };
      } catch (error) {
        resultsContainer.innerHTML = `Error: ${error}`;
        return { error };
      }
    }
  
    function renderPosts(posts) {
      let html = "";
      posts.forEach((blog) => {
        const featuredImageId = blog.featured_media;
        const featuredImage = media.find((image) => image.id === featuredImageId);
        const imageUrl = featuredImage ? featuredImage.source_url : "";
        const title = blog.title.rendered;
        const postId = blog.id;
  
        const detailsPageUrl = `/details.html?id=${postId}`;
  
        html += `
          <div class="swiper-slide">
            <div class="carousel-post">
              <div class="blogContainer">
                <a href="${detailsPageUrl}"><img src="${imageUrl}" alt="Featured Image"></a>
                <h1 class="city-title">${title}</h1>
              </div>
            </div>
          </div>
        `;
      });
  
      resultsContainer.innerHTML = html;
  
      initializeSwiper();
    }
  
    async function fetchPostsAndRender() {
      try {
        const { error } = await fetchBlogsAndInitializeSwiper();
        if (error) {
          console.error("Error:", error);
          return;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    function initializeSwiper() {
      new Swiper(".swiper-container", {
        slidesPerView: 5,
        spaceBetween: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        touch: {
          enabled: true,
        },
      });
    }
  
    fetchPostsAndRender()
      .then(() => {
        initializeSwiper();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  
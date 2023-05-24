// My version 21/5/2023
const URL =
  "http://localhost:8888/Love&union/wp-json/wp/v2/posts?_embed&per_page=12";
const results = [];

const container = document.querySelector("#blog-posts");
container.classList.add("blog-post-container");

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    this.results = data;

    console.log(data);
  } catch (error) {
    console.log(error);
    container.innerHTML = "error";
  }
}

fetchData().then(() => {
  this.results.slice(0, 10).forEach((post) => {
    /* create container */
    const containerpost = document.createElement("div");
    containerpost.className = "containerpost";
    containerpost.setAttribute("data-id", post.id);

    const title = document.createElement("h2");
    title.innerText = post.title.rendered;
    title.className = "blog-post-title";

    const featuredMedia = document.createElement("img");
    featuredMedia.src = post._embedded["wp:featuredmedia"][0].source_url;
    featuredMedia.className = "img-blogs";

    /* adding elements to little container */
    containerpost.appendChild(title);
    containerpost.appendChild(featuredMedia);

    /* adding little container to main containers */
    container.appendChild(containerpost);

    // for the id fetch post version

    document.body.appendChild(container);
  });

  // Loading more post button //
  const button = document.createElement("button");
  button.className = "seeMorePosts";
  button.innerText = "More Posts";

  container.appendChild(button);

  const seeMorePostsButton = document.querySelector(".seeMorePosts");
  seeMorePostsButton.addEventListener("click", loadMorePosts.bind(this));

  function loadMorePosts() {
    const remainingPosts = this.results.slice(10, 12);

    remainingPosts.forEach((post) => {
      const containerpost = document.createElement("div");
      containerpost.className = "containerpost";
      containerpost.setAttribute("data-id", post.id);

      const title = document.createElement("h2");
      title.innerText = post.title.rendered;
      title.className = "blog-post-title";

      const featuredMedia = document.createElement("img");
      featuredMedia.src = post._embedded["wp:featuredmedia"][0].source_url;
      featuredMedia.className = "img-blogs";

      title.addEventListener("click", () => {
        const postId = containerpost.getAttribute("data-id");
        console.log("POST-ID", postId);

        /* Navigation to blog-post.html with post ID as a parameter */
        window.location.href = `blog-post.html?id=${postId}`;
      });

      featuredMedia.addEventListener("click", () => {
        const postId = containerpost.getAttribute("data-id");
        console.log("POST-ID", postId);

        /* Navigation to blog-post.html with post ID as a parameter */
        window.location.href = `blog-post.html?id=${postId}`;
      });

      /* Adding elements to little container */
      containerpost.appendChild(title);
      containerpost.appendChild(featuredMedia);

      /* Adding little container to main containers */
      container.appendChild(containerpost);
    });

    /* Hiding the load more button */
    seeMorePostsButton.style.display = "none";
  }
});

/* navigate to post page*/
const titles = document.querySelectorAll(".blog-post-title");
const featuredMedias = post._embedded["wp:featuredmedia"][0].source_url;

titles.forEach((title) => {
  title.addEventListener("click", () => {
    const postId = button.closest(".containerpost").getAttribute("data-id");
    console.log("POST-ID", postId);
  });
});

featuredMedias.forEach((featuredMedia) => {
  featuredMedia.addEventListener("click", () => {
    const postId = button.closest(".containerpost").getAttribute("data-id");
    console.log("POST-ID", postId);

    // navigate to joke html
    window.location.href = `blog-post.html?id=${postId}`; // navigate to blog-post.html with id as parameter
  });
});

/* Carousel old version */

const URL =
  "http://localhost:8888/Love&union/wp-json/wp/v2/posts?_embed&per_page=12";
let results = [];

const container = document.querySelector("#blog-posts");
container.classList.add("blog-post-container");

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    this.results = data;

    console.log(data);
  } catch (error) {
    console.log(error);
    container.innerHTML = "error";
  }
}

fetchData().then(() => {
  results.slice(0, 10).forEach((post) => {
    /* create container */
    const containerpost = document.createElement("div");
    containerpost.className = "containerpost";
    containerpost.setAttribute("data-id", post.id);

    const title = document.createElement("h2");
    title.innerText = post.title.rendered;
    title.className = "blog-post-title";

    const featuredMedia = document.createElement("img");
    featuredMedia.src = post._embedded["wp:featuredmedia"][0].source_url;
    featuredMedia.className = "img-blogs";

    /* adding elements to little container */
    containerpost.appendChild(title);
    containerpost.appendChild(featuredMedia);

    /* adding little container to main containers */
    carousel.appendChild(containerpost);
  });
});

const carousel = document.querySelector(".carousel");
const backButton = document.querySelector("#backButton");
const forwardButton = document.querySelector("#forwardButton");

let scrollPosition = 0;
const scrollAmount = 300;

backButton.addEventListener("click", () => {
  carousel.scrollLeft -= scrollAmount;
});

forwardButton.addEventListener("click", () => {
  carousel.scrollLeft -= scrollAmount;
});

carousel.addEventListener("click", () => {
  scrollPosition = carousel.scrollLeft;
});

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    carousel.scrollLeft -= scrollAmount;
  } else if (e.code === "ArrowRight") {
    carousel.scrollLeft += scrollAmount;
  }
});
fetchData();

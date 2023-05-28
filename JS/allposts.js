const URL =
  "https://loveandunion.haharun.no/wp-json/wp/v2/posts?_embed&per_page=12";

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

    const title = document.createElement("h3");
    title.innerText = post.title.rendered;
    title.className = "blog-post-title";

    const featuredMedia = document.createElement("img");
    featuredMedia.src = post._embedded["wp:featuredmedia"][0].source_url;
    featuredMedia.className = "img-blogs";

    /* navigate to post page on title click */
    title.addEventListener("click", () => {
      const postId = containerpost.getAttribute("data-id");
      console.log("POST-ID", postId);
      window.location.href = `blog-post.html?id=${postId}`; /* navigating to blog-post.html with id */
    });

    /* navigate to post page on title click */
    featuredMedia.addEventListener("click", () => {
      const postId = containerpost.getAttribute("data-id");
      console.log("POST-ID", postId);
      window.location.href = `blog-post.html?id=${postId}`; /* navigating to blog-post.html with id */
    });

    /* Adding elements to little container */
    containerpost.appendChild(title);
    containerpost.appendChild(featuredMedia);

    /* Adding little container to main containers */
    container.appendChild(containerpost);

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

      const title = document.createElement("h3");
      title.innerText = post.title.rendered;
      title.className = "blog-post-title";

      const featuredMedia = document.createElement("img");
      featuredMedia.src = post._embedded["wp:featuredmedia"][0].source_url;
      featuredMedia.className = "img-blogs";

      /* navigate to post page on title click */
      title.addEventListener("click", () => {
        const postId = containerpost.getAttribute("data-id");
        console.log("POST-ID", postId);
        window.location.href = `blog-post.html?id=${postId}`;
      });

      /* navigate to post page on image click */
      featuredMedia.addEventListener("click", () => {
        const postId = containerpost.getAttribute("data-id");
        console.log("POST-ID", postId);
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

    /* Modal for the images on blog-post.html */
    const modal = document.createElement("div");
    modal.className = "img-modal";
    const modalImage = document.createElement("img");
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
  }
});

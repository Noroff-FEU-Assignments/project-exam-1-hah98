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

      /* adding elements to little container */
      containerpost.appendChild(title);
      containerpost.appendChild(featuredMedia);

      /* adding little container to main containers */
      container.appendChild(containerpost);
    });

    // Hide the "load more button" //
    seeMorePostsButton.style.display = "none";
  }
});

// for the id fetch post version
document.body.appendChild(container);
/* navigate to post page*/
const title = document.querySelector(".blog-post-title");
const featuredMedia = post._embedded["wp:featuredmedia"][0].source_url;

title,
  featuredMedia.forEach((button) => {
    button.addEventListener("click", () => {
      const postId = button.closest(".containerpost").getAttribute("data-id");
      console.log("POST-ID", postId);

      // navigate to joke html
      window.location.href = `blog-post.html?id=${postId}`; // navigate to blog-post.html with id as parameter
    });
  });

/* const allTitles = document.querySelectorAll("blog-post-title");
const featuredMediaAll = document.querySelectorAll("img-blogs");

allTitles.forEach((title) => {
  allTitles.addEventListener("click", () => {
    const postId = title.closest(".containerpost").getAttribute("data-id");
    console.log("POST-ID", postId);

    // navigating to blog-post.html //
    window.location.href = `blog-post.html?id=${postId}`;
  });
});

featuredMediaAll.forEach((featuredMedia) => {
  featuredMediaAll.addEventListener("click", () => {
    const postId = featuredMedia
      .closest(".containerpost")
      .getAttribute("data-id");
    console.log("POST-ID", postId);

    // navigating to blog-post.html //
    window.location.href = `blog-post.html?id=${postId}`;
  });
});
 */

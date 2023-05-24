const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

const URL = `http://localhost:8888/Love&union/wp-json/wp/v2/posts/${postId}?_embed`;
const container = document.createElement("div");

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    this.post = data;
  } catch (error) {
    console.log(error);
    container.innerHTML = "error";
  }
}

fetchData().then(() => {
  /* create container */
  const containerpost = document.createElement("div");
  containerpost.className = "containerpost-blogpost";
  containerpost.setAttribute("data-id", this.post.id);

  const contentWrapper = document.createElement("div");
  contentWrapper.innerHTML = this.post.content.rendered;

  /* const featuredMedia = document.createElement("img");
  if (this.post._embedded && this.post._embedded["wp:featuredmedia"]) {
    featuredMedia.src = this.post._embedded["wp:featuredmedia"][0].source_url;
  }
  featuredMedia.className = "img-blogpost"; */

  const featuredMedia = contentWrapper.querySelector("img");
  if (featuredMedia) {
    featuredMedia.className = "img-blogpost";

    /* Adding event listener to open modal on click of image */
    featuredMedia.addEventListener("click", () => {
      modal.style.display = "block";
      modal.querySelector("img").src = featuredMedia.src;
    });
  }

  const date = document.createElement("p");
  date.innerText = this.post.date;
  date.className = "date-blogpost";

  const title = document.createElement("h1");
  title.innerText = this.post.title.rendered;
  title.className = "title-blogpost";

  const content = document.createElement("h3");
  content.innerHTML = this.post.content.rendered;
  content.className = "content-blogpost";

  const button = document.createElement("button");
  button.className = "seeMorePosts1";
  button.innerText = "READ MORE POSTS";

  button.addEventListener("click", () => {
    window.location.href = "listofblogs.html";
  });

  /* adding elements to little container */
  /*  containerpost.appendChild(featuredMedia); */
  containerpost.appendChild(title);
  containerpost.appendChild(date);
  containerpost.appendChild(content);
  containerpost.appendChild(button);
  /* containerpost.appendChild(contentWrapper); */

  /* adding little container to main containers */
  container.appendChild(containerpost);

  document.body.appendChild(container);
});

/* Adding modal functionality */
function createModal() {
  const modal = document.createElement("div");
  modal.className = "img-modal";
  const modalImage = document.createElement("img");
  modal.appendChild(modalImage);
  document.body.appendChild(modal);

  /* Closing modal on click outside of the image */
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      modal.parentNode.removeChild(modal);
    }
  });

  return modal;
}

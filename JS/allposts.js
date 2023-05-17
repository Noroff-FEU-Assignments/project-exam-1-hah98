const URL = "http://localhost:8888/Love&union/wp-json/wp/v2/posts?_embed";
const results = [];

const container = document.querySelector("#blog-posts ");
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
  this.results.forEach((post) => {
    /* create container */
    const containerpost = document.createElement("div");
    containerpost.className = "containerpost";
    containerpost.setAttribute("data-id", post.id); // give container same id as joke id

    const title = document.createElement("h2");
    title.innerText = post.title.rendered; /* same name as api attribute */
    title.className = "blog-post-title";

    const featuredMedia = document.createElement("img");
    featuredMedia.src = post._embedded["wp:featuredmedia"][0].source_url;
    featuredMedia.className = "img-blogs";
    /* 
    const date = document.createElement("p");
    date.innerText = post.date; */

    /* const content = document.createElement("h3");
    content.innerHTML = post.content.rendered; /* same name as api attribute /*/

    /*  const button = document.createElement("button");
    button.className = "seeMholePosts";
    button.innerText = "View More Posts"; */

    /*  adding elements to little container*/
    containerpost.appendChild(title);
    containerpost.appendChild(featuredMedia);

    /*  containerpost.appendChild(date); */
    /* containerpost.appendChild(content); */
    /* containerpost.appendChild(button); */
    /*  containerjoke.appendChild(punchline); */

    /* adding little container to main containers */
    container.appendChild(containerpost);
  });

  document.body.appendChild(container);

  /* navigate to joke page*/
  const seeWholeJokeButton = document.querySelectorAll(".seeWholeJoke");
  seeWholeJokeButton.forEach((button) => {
    button.addEventListener("click", () => {
      const jokeId = button.closest(".containerjoke").getAttribute("data-id");
      console.log("JOKE-ID", jokeId);

      // navigate to joke html
      window.location.href = `joke.html?id=${jokeId}`; // navigate to jokes.html with id as parameter
    });
  });
});

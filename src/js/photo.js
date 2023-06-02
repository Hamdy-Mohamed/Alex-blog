let logo = document.querySelector(".logo"),
  Palestine = document.querySelector(".support"),
  postsContainer = document.querySelector(".first");
(logo.onclick = function () {
  window.open("../../index.html", "_self");
}),
  (Palestine.onclick = function () {
    window.open("https://en.wikipedia.org/wiki/State_of_Palestine");
  });

async function getData() {
  const res = await fetch("https://alex-blog-api.onrender.com/api/v1/posts");
  let data = await res.json();
  return data.post;
}
let data = getData();

data.then((posts) => {
  posts.map((post) => {
    postsContainer.innerHTML += `
    <div class="card">
      <img class="card_img" src="${post.image}" alt="img" >
    </div>
    `;
  });
});

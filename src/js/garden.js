let scrollBtn = document.querySelector(".btn"),
  postsContainer = document.querySelector(".sec2"),
  set_img = document.querySelector("#set_img");

scrollBtn.addEventListener("click", function () {
  window.scrollBy(0, 1700);
});

async function createPost(image) {
  let formdata = new FormData();
  formdata.append("title", "Test");
  formdata.append("desc", "Test");
  formdata.append("category", "gardens");
  formdata.append("user", JSON.parse(localStorage.getItem("user"))._id);
  formdata.append("image", image);

  axios
    .post("https://alex-blog-api.onrender.com/api/v1/users", formdata)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
set_img.addEventListener("change", () => {
  createPost(set_img.files[0]);
});
async function getData() {
  const res = await fetch("https://alex-blog-api.onrender.com/api/v1/posts");
  let data = await res.json();
  return data.post;
}
let data = getData();

data.then((posts) => {
  posts.map((post) => {
    if (post.category == "gardens") {
      postsContainer.innerHTML += `
      <div class="card">
        <img class="card_img" src="${post.image}" alt="img" >
      </div>
      `;
    }
  });
});

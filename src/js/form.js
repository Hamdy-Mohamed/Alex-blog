let btn = document.querySelector("button");
let pass = document.querySelector("#pass");
let img = document.querySelector("#image");
let userName = document.querySelector("#userName");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let password = pass.value;
  let user = userName.value;
  let image = img.files[0];
  let inputs = password && user;

  if (inputs.length >= 10) {
    createUser({ password, username: user, image });
    window.open(".../../index.html");
  } else {
    window.location.reload();
  }
});
function createUser({ password, username, image, role = "user" }) {
  let formdata = new FormData();
  formdata.append("username", username);
  formdata.append("password", password);
  formdata.append("facebook", "soon");
  formdata.append("role", role);
  formdata.append("image", image);

  axios
    .post("https://alex-blog-api.onrender.com/api/v1/users", formdata)
    .then(function (response) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
    })
    .catch(function (error) {
      console.log(error);
    });
}

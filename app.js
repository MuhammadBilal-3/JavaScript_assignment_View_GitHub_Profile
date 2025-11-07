const usernameInput = document.getElementById("username");
const fetchBtn = document.getElementById("fetchbtn");


const URL = (`https://api.github.com/users/${username}`);
fetch(URL)
.then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
fetchBtn.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${usernameInput.value}`)
    .then(responsive => responsive.json())
    .then(data => {
      if (data.message === "Not Found") {
        outputData.innerHTML = `<p>User not faound</p>`;
      } else {
        outputData.innerHTML = `
          <img src="${data.avatar_url}" alt="User Avatar">
          <p><b>Name:</b> ${data.name || "Not available"}</p>
          <p><b>Repos:</b> ${data.public_repos}</p>
          <p><b>Followers:</b> ${data.followers}</p>
          <p><b>Following:</b> ${data.following}</p>
          <p><b>Email:</b> ${data.email || "Not available"}</p>
          <p><b>Profile:</b> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
        `;
      }
      outputData.classList.remove('hidden');
    })
    .catch(error => {
      console.log(error);
      outputData.classList.remove('hidden');
    });
});
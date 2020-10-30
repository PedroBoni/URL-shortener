const apiBase = "http://localhost:3001";

const form = document.querySelector("#getShortenedURL");
const url = document.querySelector("#url");
const copy = document.querySelector("#copy");
const shortenBtn = document.querySelector("#shortenBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let body = JSON.stringify({ url });
  fetch(`${apiBase}/shorten`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: body,
  }).then((response) => {
    response.json().then(function (json) {
      console.log(json);
      // producion = `${window.location.origin}/${json.id}`
      let shortenedURL = `${apiBase}/${json.id}`;

      url.value = shortenedURL;
      url.disabled = true;

      copy.style.display = "block";

      shortenBtn.style.display = "none";
    });
  });
});
copy.addEventListener("click", (e) => {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(url.value);
    }
  });
});

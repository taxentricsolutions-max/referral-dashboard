const SCRIPT_URL = "YOUR_APPS_SCRIPT_URL";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

fetch(`${SCRIPT_URL}?code=${code}`)
  .then(res => res.json())
  .then(data => {
    if (data.status !== "success") throw new Error();
    document.getElementById("clicks").textContent = data.clicks;
    document.getElementById("signups").textContent = data.signups;
    document.getElementById("rewards").textContent = data.rewards;
  })
  .catch(() => alert("Unable to load dashboard"));

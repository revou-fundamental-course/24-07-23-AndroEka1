const params = new URLSearchParams(window.location.search);
const name = params.get("nama");
const email = params.get("email");
const tujuan = params.get("tujuan");

document.getElementById("nama").textContent = name;
document.getElementById("email").textContent = email;
document.getElementById("tujuan").textContent = tujuan;

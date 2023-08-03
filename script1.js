// Buat Dropdown
function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("show");
}

function selectLocation(location) {
  var formLocation = document.getElementById("form-location");
  formLocation.value = location;
  toggleDropdown();
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Bagian validasi
// document.getElementById("sendButton").addEventListener("click", function () {
//   validateForm();
// });

// function validateForm() {
//   const name = document.getElementById("form-nama").value;
//   const email = document.getElementById("form-email").value;
//   const destination = document.getElementById("form-destination").value;

//   if (name === "") {
//     alert("Nama tidak boleh kosong!");
//     return;
//   }

//   if (!validateEmail(email)) {
//     alert("Email tidak valid!");
//     return;
//   }

//   if (destination === "") {
//     alert("Pilihlah tujuan yang diinginkan!");
//     return;
//   }

//   alert("Data berhasil dikirim:\nNama: " + name + "\nEmail: " + email + "\nTujuan: " + destination);
//   document.getElementById("inputForm").reset();
// }

// function validateEmail(email) {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// }

// Validasi 2
function setActionUrl() {
  const form = document.querySelector(".form-input"); // Ganti getElementById menjadi querySelector
  const nama = form["form-nama"].value;
  const email = form["form-email"].value;
  const destination = form["form-destination"].value;

  if (!nama.trim() || !email.trim()) {
    alert("Bagian nama dan email tidak boleh kosong");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Masukkan email yang valid");
    return;
  }

  const url = new URL("show.html", window.location.origin);
  url.searchParams.set("nama", nama);
  url.searchParams.set("email", email);
  url.searchParams.set("tujuan", destination);
  form.action = url.href;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

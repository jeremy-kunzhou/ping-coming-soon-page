document.addEventListener("DOMContentLoaded", (event) => {
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  document.getElementById("email").addEventListener("change", function () {
    document.getElementsByClassName("email-error")[0].innerHTML = "";
  });

  var element = document.getElementsByClassName("notify-button");
  element[0].addEventListener("click", function () {
    var email = document.getElementById("email").value;
    if (validateEmail(email)) {
      document.getElementsByClassName("email-error")[0].innerHTML = "";
    } else {
      document.getElementsByClassName("email-error")[0].innerHTML =
        "Please provide a valid email address";
    }
  });
});

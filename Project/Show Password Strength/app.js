const pass = document.querySelector("#password");
const mess = document.querySelector("#message");
const str = document.querySelector("#strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    mess.style.display = "block";
  } else {
    mess.style.display = "none";
  }

  if (pass.value.length < 4) {
    str.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    mess.style.color = "#ff5925";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "medium";
    pass.style.borderColor = "yellow";
    mess.style.color = "yellow";
  } else if (pass.value.length >= 8) {
    str.innerHTML = "strong";
    pass.style.borderColor = "#26d730";
    mess.style.color = "#26d730";
  }
});

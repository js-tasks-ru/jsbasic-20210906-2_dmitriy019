function hideSelf() {
  let btn = (document.getElementsByClassName("hide-self-button"))[0];
  btn.addEventListener("click", function() {
    this.hidden = "true";
  });
}


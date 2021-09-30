function hideSelf() {
  //let btn = (document.getElementsByClassName("hide-self-button"))[0];
 let btn = document.querySelector(".hide-self-button");
  btn.addEventListener("click", function() {
    this.hidden = "true";
  });
}


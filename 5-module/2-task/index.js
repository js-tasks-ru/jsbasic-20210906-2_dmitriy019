function toggleText() {
  let btn = (document.getElementsByClassName("toggle-text-button"))[0];
 // let txt = document.querySelector("text");
 let txt = document.getElementById("text");
  btn.addEventListener("click", function() {
    txt.hidden = !txt.hidden;
  })
}

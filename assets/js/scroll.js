window.onscroll = function () {
  scrollnav();
};

let widget = document.getElementById("navbar");
let float = document.getElementById("floating");
let btn = document.getElementById("btn_floating");
let sticky = widget.offsetTop;
//
let img = new Image(40, 40);
function scrollnav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    widget.style.top = "0";
    widget.style.backgroundColor = "#fff";
    widget.style.color = "#2a2a2a";
    widget.style.transition = "top 1s";
    widget.style.boxShadow = "0px 1px 5px gray";
    //
    img.src = "../../images/icons/Whatsapp.png";
    float.style.display = "flex";
    float.style.zIndex = "9999";
    float.style.backgroundColor = " #fff";
    float.style.width = "50px";
    float.style.height = "50px";
    float.style.boxShadow = "0px 2px 5px #2a2a2a4f";
    float.style.borderRadius = "25px";
    float.style.transition = "top 1s";
    float.appendChild(img);
    //
  } else {
    widget.style.top = "-50px";
    widget.style.backgroundColor = "";
    widget.style.color = "#fff";
    widget.style.boxShadow = "";
    //
    img.src = "";
    float.style.display = "none";
    float.style.zIndex = "";
    float.style.backgroundColor = "";
    float.style.width = "";
    float.style.height = "";
    float.style.boxShadow = "";
    float.style.borderRadius = "";
    float.appendChild();
    //
  }
}
btn.addEventListener("click", () => {
  location.href = "https://wa.me/6282111574780";
});

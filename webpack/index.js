const { createPopper } = require("@popperjs/core");
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

tippy(".nav a", {
  animation: "scale",
  arrow: true,
  placement: "right",
  followCursor: false,
  animation: "fade",
  theme: "gradof",
});
tippy(".search-bar", {
  animation: "scale",
  arrow: true,
  placement: "right",
  followCursor: false,
  animation: "fade",
  theme: "gradof",
  offset: [0, 20],
});
tippy(".user-photo", {
  animation: "scale",
  arrow: true,
  placement: "right",
  followCursor: false,
  animation: "fade",
  theme: "gradof",
  offset: [0, 15],
});

function getId(div) {
  var item = document.getElementById(div);
  return item;
}
document.addEventListener("DOMContentLoaded", function () {
  var searchBtn = getId("userCardSearch");
  var searchBox = getId("inputSearchBox");
  var searchButton = getId("inputSearchButton");

  window.addEventListener("click", function (e) {
    if (searchBtn.contains(e.target)) {
      // Clicked in box
      var posicionNav = searchBtn.getBoundingClientRect();
      var sumaEspacio = posicionNav.right + 20;
      searchBox.style.left = sumaEspacio + "px";
      searchBox.style.top = posicionNav.top + "px";
      searchBox.style.display = "block";
      setTimeout(() => {
        searchBox.style.width = "150px";
        searchBox.focus();

        searchButton.style.top = posicionNav.top + "px";
        searchButton.style.display = "block";
        searchButton.style.width = "fit-content";
        setTimeout(() => {
          var sumaEspacioInp = 270;
          searchButton.style.left = sumaEspacioInp + "px";
        }, 10);
      }, 50);
    } else if (
      searchBox.contains(e.target) ||
      searchButton.contains(e.target)
    ) {
    } else {
      // Clicked outside the box
      searchBox.value = "";
      searchBox.removeAttribute("style");
      searchButton.removeAttribute("style");
    }
  });
  //searchBtn.addEventListener("click", function () {});
});

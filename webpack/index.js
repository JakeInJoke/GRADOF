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

function buscarCardUser(a) {
  var divSearch = document.createElement("div");
  var divSearchReady = document.createElement("button");
  var divSearchCancel = document.createElement("button");
  divSearch.id = "destroyableElement";
  divSearch.className = "cent-absolute";
  divSearchReady.id = "ready";
  divSearchReady.className = "blob-button";
  divSearchReady.innerHTML = "Buscar";
  divSearchCancel.id = "cancel";
  divSearchCancel.className = "blob-button";
  divSearchCancel.innerHTML = "Cancelar";
  a.appendChild(divSearch);
  divSearch.appendChild(divSearchReady);
  divSearch.appendChild(divSearchCancel);
}

function getId(div) {
  var item = document.getElementById(div);
  return item;
}

document.addEventListener("DOMContentLoaded", function () {
  var gen = getId("userCardSearch");
  var appView = getId("appView");
  gen.addEventListener("click", function (e) {
    e.preventDefault();
    buscarCardUser(appView);
  });
});

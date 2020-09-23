const { createPopper } = require("@popperjs/core");
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import * as vCont from "../frontend/static/views/contentViews.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
const obtainHTML = (e) => {
  var response = "";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
      document.querySelector("#appView").innerHTML = xhr.responseText;
    }
  };
  xhr.open("get", e, true);
  xhr.send();
  return response;
};
const router = async () => {
  const routes = [
    {
      path: "/",
      view: vCont.resumen,
    },
    {
      path: "/insumos",
      view: vCont.insumos,
    },
    {
      path: "/reportes",
      view: vCont.reportes,
    },
    {
      path: "/historial",
      view: vCont.historial,
    },
    {
      path: "/usuarios",
      view: vCont.usuarios,
    },
    {
      path: "/nosotros",
      view: vCont.nosotros,
    },
    {
      path: "/configuracion",
      view: vCont.configuracion,
    },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: route[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  obtainHTML(await view.getHtml());

  console.log(await view.getHtml());
};

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

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();

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

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

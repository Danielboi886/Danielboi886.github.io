import {
  vibeClickHandler,
  deselectAllVibesHandler,
  clearFirstPageDomElement,
  fetchPoemByVibes,
} from "./handler.js";

import { showNextPageDomElement } from "./view.js";
export function selectedVibeListener() {
  document.querySelectorAll(".mood_item").forEach((vibe) => {
    vibe.addEventListener(
      "click",
      (evt) => {
        vibeClickHandler(evt);
      },
      { once: true }
    );
  });
}

export function deselectAllVibesListener() {
  var btn = document.getElementById("deselect");
  btn.addEventListener("click", () => {
    console.log("okay");
    deselectAllVibesHandler();
  });
}

export function showRecommendationsOnNextPage() {
  var btn = document.getElementById("show_btn");
  btn.addEventListener("click", () => {
    clearFirstPageDomElement();
    showNextPageDomElement();
    fetchPoemByVibes();
  });
}

export function restartListener() {
  const btn = document.getElementById("restart");
  btn.addEventListener("click", () => {
    location.reload();
  });
}

// ==UserScript==
// @name         GIF to MP4
// @namespace    http://tampermonkey.net/
// @version      2024-06-17
// @description  try to take over the world!
// @author       You
// @match        https://*.ezgif.com/gif-to-mp4/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const btn = document.querySelector("#tsbt > input");
  const targetNode = document.querySelector("#output");

  // Your code here...
  btn.click();

  const observer = new MutationObserver(() => {
    const saveBtn = document.querySelector(
      "#output > table > tbody > tr > td:nth-child(12) > a"
    );
    saveBtn.click();
    window.close();
  });

  observer.observe(targetNode, { childList: true });
})();

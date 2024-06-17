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

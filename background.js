chrome.contextMenus.create({
  id: "gif-to-mp4",
  title: "GIF to MP4",
  contexts: ["image"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "gif-to-mp4") {
    var gif_url = info.srcUrl.replace(".webp", ".gif");
    chrome.tabs.create({
      url: `https://ezgif.com/video-to-gif?url=${gif_url}`,
    });
  }
});

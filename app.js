// Click-to-load YouTube: nothing from YouTube except the thumbnail loads until the visitor
// presses play, which keeps the first load small on weak connections.
document.querySelectorAll(".video-frame").forEach((frame) => {
  const button = frame.querySelector(".play-button");
  if (!button) return;
  button.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${frame.dataset.videoId}?autoplay=1&rel=0&hl=ar`;
    iframe.title = frame.dataset.title || "";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    frame.replaceChildren(iframe);
  });
});

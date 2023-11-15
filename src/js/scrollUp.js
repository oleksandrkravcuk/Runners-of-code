const SCROLL_GAP = 300;

const backToTopHolderEl = document.getElementById("back-to-top-holder");

function handleWindowScroll() {

  if (document.documentElement.scrollTop > SCROLL_GAP) {
    backToTopHolderEl.classList.add("page--back-to-top_visible");
    return;
  }

  backToTopHolderEl.classList.remove("page--back-to-top_visible");
}

window.addEventListener("scroll", handleWindowScroll);

const backToTopButtonEl = document.getElementById("back-to-top-button");

backToTopButtonEl.addEventListener("click", handleButtonBackToTopClick);

export function handleButtonBackToTopClick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
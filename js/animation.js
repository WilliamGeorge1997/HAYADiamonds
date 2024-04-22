function topToBottomAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("top-to-bottom-show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".top-to-bottom-hidden");
  hiddenElements.forEach((el) => observer.observe(el));
}
function bottomToTopAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bottom-to-top-show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".bottom-to-top-hidden");
  hiddenElements.forEach((el) => observer.observe(el));
}
function rightToLeftAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("right-to-left-show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".right-to-left-hidden");
  hiddenElements.forEach((el) => observer.observe(el));
}
function lefToRightAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("left-to-right-show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".left-to-right-hidden");
  hiddenElements.forEach((el) => observer.observe(el));
}
topToBottomAnimation();
bottomToTopAnimation();
rightToLeftAnimation();
lefToRightAnimation()

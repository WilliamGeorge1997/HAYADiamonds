class SpecialWhatsapp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <div class="whatsapp d-flex justify-content-center align-items-center">
    <a href="https://web.whatsapp.com/send?phone=919744133000"
      ><i class="fa-brands fa-whatsapp"></i
    ></a>
  </div>
`;
  }
}

customElements.define("special-whatsapp", SpecialWhatsapp);

class SpecialSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <section id="sidebar-dark" class="sidebar-dark m-0 d-none d-lg-block">
    <div id="sidebar" class="sidebar">
      <div class="m-4 mb-0"><i id="x-mark"class="fa-light fa-xmark fs-2 cursor-pointer"></i></div>
      <div
        class="vh-100 d-flex flex-column justify-content-evenly container ms-md-2 ps-xl-5 ms-lg-5"
      >
        <figure>
          <img
            src="../assets/images/sidelogo.svg"
            alt="HAYA Logo"
            class="w-75"
          />
        </figure>
        <div class="mb-5 pb-5">
          <ul class="p-0">
            <li>
              <span class="d-flex align-content-center">
                <i
                  class="fa-light fa-location-dot d-flex align-items-center"
                ></i>
                <span class="ms-3"
                  >Head Office: Hayath Tower, Calicut Road,
                  <br />
                  Valanchery, Kerala 676552</span
                >
              </span>
            </li>
            <li class="mt-3">
              <a class="text-white" href="tel:9744133000">
                <span class="d-flex align-content-center">
                  <i
                    class="fa-light fa-phone-volume d-flex align-items-center"
                  ></i>
                  <span class="ms-3">9744 133 000</span>
                </span>
              </a>
            </li>
            <li class="mt-3">
              <a class="text-white" href="mailto:info@hayadiamonds.com">
                <span class="d-flex align-content-center">
                  <i
                    class="fa-light fa-envelope d-flex align-items-center"
                  ></i>

                  <span class="ms-3">info@hayadiamonds.com</span>
                </span>
              </a>
            </li>
          </ul>
          <div class="social mt-4">
            <a class="text-white mx-3 ms-0" target="_blank"  href="https://www.facebook.com/hayadiamondsofficial"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a class="text-white mx-3" target="_blank" href="https://www.instagram.com/hayadiamonds/"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a class="text-white mx-3" target="_blank" href="https://twitter.com/haya_diamonds">
              <i class="fa-brands fa-twitter"></i
            ></a>
            <a class="text-white mx-3" target="_blank" href="https://www.linkedin.com/company/haya-diamonds/">
              <i class="fa-brands fa-linkedin-in"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
  }
}

customElements.define("special-sidebar", SpecialSidebar);
class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg p-3">
    <div class="container-fluid container-lg px-2 px-lg-5">
      <a class="navbar-brand text-center" href="#"
        ><img
          src="../assets/images/Logo.png"
          alt="HAYA Diamonds Logo"
          class="w-75"
          loading="lazy"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse me-3"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <a class="nav-link" aria-current="page" href="../index.html">Home</a>
          </li>

          <li class="nav-item mx-2">
            <a class="nav-link" aria-current="page" href="../pages/about.html">About</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" aria-current="page" href="../pages/products.html">Products</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" aria-current="page" href="../pages/franchiseenquiry.html"
              >Franchise Enquiry</a
            >
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" aria-current="page" href="../pages/contact.html">Contact</a>
          </li>
          <li
                class="nav-item mx-2 d-none d-lg-block d-flex justify-content-center align-content-center cursor-pointer" id="side-menu"
              >
                <i class="fa-solid fa-bars fa-text-size"></i>
              </li>
        </ul>
      </div>
    </div>
  </nav>`;
  }
}

customElements.define("special-header", SpecialHeader);

window.addEventListener("scroll", function () {
  let header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <footer class="py-5 ps-sm-3 ps-3">
        <div class="container-lg">
          <div class="row">
            <div class="col-md-4">
              <figure class="mb-4">
                <img
                  src="../assets/images/footerlogo.png"
                  alt="HAYA Logo"
                  width="150"
                />
              </figure>
              <p class="pe-lg-4 pe-sm-2">
                HAYA Diamonds, known for their exquisite 
                craftsmanship, captivate with their brilliant cuts and 
                unparalleled sparkle, adorning the wearer with 
                timeless elegance and luxury.
              </p>
            </div>
            <div class="col-md-4 mt-lg-3">
              <ul class="p-0">
                <h5 class="mb-4">Quick Links</h5>
                <li class="mb-2 ms-1">
                  <a class="text-white" href="../index.html"
                    ><span><i class="fa-light fa-caret-right me-3"></i></span
                    ><span>Home</span></a
                  >
                </li>
                <li class="mb-2 ms-1">
                  <a class="text-white" href="../pages/about.html"
                    ><span><i class="fa-light fa-caret-right me-3"></i></span
                    ><span>About</span></a
                  >
                </li>
                <li class="mb-2 ms-1">
                  <a class="text-white" href="../pages/franchiseenquiry.html"
                    ><span><i class="fa-light fa-caret-right me-3"></i></span
                    ><span>Franchise Enquiry</span></a
                  >
                </li>
                <li class="mb-2 ms-1">
                  <a class="text-white" href="../pages/contact.html"
                    ><span><i class="fa-light fa-caret-right me-3"></i></span
                    ><span>Contact</span></a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-4 mt-3">
              <div>
                <ul class="p-0">
                  <h5 class="mb-4">Contact Us</h5>
                  <li>
                    <span class="d-flex align-content-center">
                      <i
                        class="fa-light fa-location-dot d-flex align-items-center"
                      ></i>
                      <span class="ms-3"
                        >Head Office: Hayath Tower, Calicut Road,
                        Valanchery, Kerala 676552</span
                      >
                    </span>
                  </li>
                  <li class="mt-3">
                    <a class="text-white" href="tel:9744133000">
                      <span class="d-flex align-content-center">
                        <i
                          class="fa-light fa-phone-volume d-flex align-items-center"
                        ></i>
                        <span class="ms-3">9744 133 000</span>
                      </span>
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-white" href="mailto:info@hayadiamonds.com">
                      <span class="d-flex align-content-center">
                        <i
                          class="fa-light fa-envelope d-flex align-items-center"
                        ></i>
  
                        <span class="ms-3">info@hayadiamonds.com</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>`;
  }
}

customElements.define("special-footer", SpecialFooter);

let sideMenuBtn = document.getElementById("side-menu");
let sideMenuDark = document.getElementById("sidebar-dark");
let sideMenu = document.getElementById("sidebar");
let xMark = document.getElementById("x-mark");
sideMenuBtn.addEventListener("click", function () {
  sideMenuDark.classList.add("w-100");
  setTimeout(function () {
    sideMenu.classList.add("w-40");
  }, 600);
});
xMark.addEventListener("click", function () {
  sideMenu.classList.remove("w-40");
  setTimeout(function () {
    sideMenuDark.classList.remove("w-100");
  }, 600);
});

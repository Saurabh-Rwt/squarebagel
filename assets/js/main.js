/* --------------- mobile header -------------- */



/* --------------- End -------------- */

/* --------------- Slider -------------- */
$(".hero-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToShow: 7,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".slick-prev.slick-arrow").html("<i class='fa-solid fa-chevron-left'></i>");
$(".slick-next.slick-arrow").html("<i class='fa-solid fa-chevron-right'></i>");
$(".slick-dots li button").text("");


let header = document.querySelectorAll(".accordion-header");


// ============= get all accoridon header =============//
header.forEach(
  (header) => {
    header.addEventListener("click", function (e) {
      let accordion = document.querySelectorAll(".accordion");
      let parentElm = header.parentElement;
      let siblings = this.nextElementSibling;

      accordion.forEach((element) => {
        element.children[1].style.maxHeight = null;
      });
      parentElm.classList.toggle("active");
      if (parentElm.classList.contains("active")) {
        accordion.forEach((element) => {
          element.classList.remove("active");
        });

        parentElm.classList.toggle("active");
        if (siblings.style.maxHeight) {
          siblings.style.maxHeight = null;
        } else {
          siblings.style.maxHeight = siblings.scrollHeight + "px";
        }
      }
    });
  }
);


/*-------------- nav tab ----------- */
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    button.classList.add("active");

    const tabId = button.getAttribute("data-tab");

    const tabPane = document.getElementById(tabId);
    tabPane.classList.add("active");
  });
});

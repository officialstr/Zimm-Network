window.onload = function() {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1, 
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      loopedSlides: 4, 
      loopPreventsSliding: false, 
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  const overlay = document.getElementById('imageOverlay');
  const zoomedImg = document.getElementById('zoomedImage');
  const clickableImgs = document.querySelectorAll('.clickable-img');

  if (overlay && zoomedImg) {
    clickableImgs.forEach(img => {
      img.addEventListener('click', () => {
        overlay.style.display = 'flex';
        zoomedImg.src = img.src;
        window.history.pushState({viewing: true}, "Viewing Image", "#viewing-image");
      });
    });

    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      if (window.location.hash === "#viewing-image") {
          window.history.back();
      }
    });

    window.onpopstate = function() {
      overlay.style.display = 'none';
    };
  }
};

function toggleMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show-menu");
}

window.addEventListener('click', function(event) {
    const menu = document.getElementById("dropdownMenu");
    if (menu && menu.classList.contains('show-menu')) {
        if (!event.target.closest('.menu-wrapper')) {
            menu.classList.remove('show-menu');
        }
    }
});

// Визначення події при кліку на зображення обкладинки
$(".cover").click(function () {
  const album = $(this).data("album");
  const modalTitle = $(".modal-title");
  const carouselInner = $(".carousel-inner");
  let totalImages = 7; // Змініть на загальну кількість зображень у вибраному альбомі

  // Очистити вміст слайдера
  carouselInner.empty();

  // Встановити заголовок модального вікна
  modalTitle.text(album);

  // Отримати список зображень для вибраного альбому і додати їх до слайдера
  for (let i = 1; i <= totalImages; i++) {
    const imgSrc = `./img/${album}/${i}.jpg`;
    const activeClass = i === 1 ? "active" : "";

    const carouselItem = `
        <div class="carousel-item ${activeClass}">
          <img src="${imgSrc}" class="d-block w-100" alt="Page ${i}">
        </div>
      `;

    carouselInner.append(carouselItem);
  }

  // Зупинити слайдер, якщо кількість зображень менше, ніж кількість слайдів
  if (totalImages.i <= 2) {
    imageCarousel.carousel.addClass("disabled");
  }

  // Деактивувати кнопки "Previous" та "Next", якщо кількість зображень менше, ніж кількість слайдів
  const carouselPrev = $(".carousel-control-prev");
  const carouselNext = $(".carousel-control-next");
  if (totalImages <= 2) {
    carouselPrev.addClass("disabled");
    carouselNext.addClass("disabled");
  } else {
    carouselPrev.removeClass("disabled");
    carouselNext.removeClass("disabled");
  }
});

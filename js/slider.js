// JavaScript код для динамічного додавання слайдів та вибору альбому
document.addEventListener("DOMContentLoaded", function () {
  const albumData = [
    {
      albumName: "album1",
      images: [
        "./img/album1/1s1.jpg",
        "./img/album1/1s2.jpg",
        "./img/album1/1s3.jpg",
      ],
    },
    {
      albumName: "album2",
      images: [
        "./img/album2/2s1.jpg",
        "./img/album2/2s2.jpg",
        "./img/album2/2s3.jpg",
      ],
    },
    // Додайте аналогічні дані для інших альбомів
  ];

  const universalCarousel = document.getElementById("universalCarousel");
  const carouselInner = universalCarousel.querySelector(".carousel-inner");

  albumData.forEach(function (album, index) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    album.images.forEach(function (imageSrc, imageIndex) {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.classList.add("d-block", "w-100");
      img.alt = "Page " + (imageIndex + 1);
      carouselItem.appendChild(img);
    });

    carouselInner.appendChild(carouselItem);
  });
});

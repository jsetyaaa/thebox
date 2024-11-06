// Inisialisasi Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      // Ambil slide aktif
      const activeSlideId = this.slides[this.activeIndex].id;

      // Hapus class active dari semua kategori
      categories.forEach(cat => cat.classList.remove('active'));

      // Sesuaikan kategori aktif berdasarkan id slide
      let category;
      switch (activeSlideId) {
        case 'slide-1':
          category = document.querySelector('[data-category="all"]');
          break;
        case 'slide-2':
          category = document.querySelector('[data-category="commercial"]');
          break;
        case 'slide-3':
          category = document.querySelector('[data-category="residential"]');
          break;
        case 'slide-4':
          category = document.querySelector('[data-category="other"]');
          break;
      }

      if (category) {
        category.classList.add('active');
      }
    }
  }
});

// Interaksi untuk kategori
const categories = document.querySelectorAll('.category');
categories.forEach((category, index) => {
  category.addEventListener('click', function () {
    // Hapus class active dari semua kategori
    categories.forEach(cat => cat.classList.remove('active'));
    // Tambah class active ke kategori yang diklik
    this.classList.add('active');

    // Pindah ke slide yang sesuai dengan kategori yang diklik
    swiper.slideTo(index); // Mengubah index sesuai dengan urutan kategori
    const categoryType = this.getAttribute('data-category');
    console.log(`Category selected: ${categoryType}`);
    // Tambahkan filter dinamis berdasarkan kategori jika diperlukan
  });
});

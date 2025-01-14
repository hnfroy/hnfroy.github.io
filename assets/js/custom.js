import 'animate.css';

function openPdf() {
  const pdfUrl = 'assets/pdf/CV-Muhammad-Hanif-Royyan-Ramdhani.pdf'; 
  window.open(pdfUrl, '_blank');
}

// Inisialisasi ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animasi untuk setiap section
gsap.utils.toArray('section').forEach((section, index) => {
  // Animasi fade-in dan slide dari bawah
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 3,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // Mulai animasi saat bagian atas section mencapai 80% viewport
      toggleActions: "play none none reverse", // Play saat masuk, reverse saat keluar
    },
  });
});

// Animasi masuk dari kiri untuk col pertama
gsap.from('.animate-left', {
  x: -100, // Gerakan dari kiri
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: '#about',
    start: "top 80%", // Mulai saat 80% dari viewport
  },
});

// Animasi masuk dari kanan untuk col kedua (row ke-2)
gsap.from('.animate-right', {
  x: 100, // Gerakan dari kanan
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: '#about',
    start: "top 80%", // Mulai saat 80% dari viewport
  },
  stagger: 0.2, // Memberi jeda antar elemen dalam col kedua
});

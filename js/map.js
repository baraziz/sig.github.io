// Inisialisasi peta
var map = L.map("map").setView([-7.0502059, 110.3960002], 14.5); // Sesuaikan koordinat dengan area kampus Anda

// Tambahkan tile layer (peta dasar)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Daftar lokasi tempat olahraga
var locations = [
  {
    name: "Merdeka Futsal",
    lat: -7.052377,
    lng: 110.397316,
    description:
      "Merdeka Futsal, Gg. Nangka No.002, RT./RW:003/RW.03/02, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229",
  },
  {
    name: "Buana Futsal",
    lat: -7.045767987595165,
    lng: 110.3937535127862,
    description: "Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229",
  },
  {
    name: "San Bao Lung Futsal",
    lat: -7.054242983758577,
    lng: 110.39876249171891,
    description:
      "San Bao Lung Futsal, Jl. Cemp. Sari III No.4, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229",
  },
  {
    name: "Zona6 Futsal",
    lat: -7.055987366503449,
    lng: 110.39512766533464,
    description:
      "Jalan Taman Siswa, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229",
  },
  {
    name: "Lapangan Futsal dan Basket Prof. Kamiso UNNES",
    lat: -7.049627038067939,
    lng: 110.39956516760056,
    description:
      "Univ. Negeri Semarang, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229.",
  },
  {
    name: "Lapangan Bulutangkis Ena",
    lat: -7.054901261068779,
    lng: 110.39731248642737,
    description:
      "Gg. Jeruk, RT.01/RW.01, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229.",
  },
  {
    name: "Gor Badminton Maulana Gunung Pati",
    lat: -7.046722412915712,
    lng: 110.3978359867743,
    description:
      "Gg. Kalimasada 2A, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229.",
  },
];

// Tambahkan marker ke peta
locations.forEach(function (location) {
  L.marker([location.lat, location.lng])
    .addTo(map)
    .bindPopup("<b>" + location.name + "</b><br>" + location.description);
});

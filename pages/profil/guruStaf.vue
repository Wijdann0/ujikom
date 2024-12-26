<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 p-4">
            <h1 class="section-title pb-1">
                <strong>Guru Dan Staf</strong>
            </h1>
            </div>
        </div>
      <div class="row">
        <div class="col-md-3 d-flex justify-content-center pb-3">
          <div class="card custom-card rounded-4" style="width: 15rem; height: 225px;">
            <div class="image-container rounded-4">
              <img src="/assets/image/mas.png" class="d-block w-100" alt="Gambar Guru">
              <div class="overlay">
                <p class="overlay-text">Kurniawan S.Pd M.pd</p>
                <p class="overlay-text">Kepala Sekolah</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex justify-content-center pb-3">
          <div class="card custom-card rounded-4" style="width: 15rem; height: 225px;">
            <div class="image-container rounded-4">
              <img src="/assets/image/mas.png" class="d-block w-100" alt="Gambar Guru">
              <div class="overlay">
                <p class="overlay-text">Nama Guru atau Informasi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex justify-content-center pb-3">
          <div class="card custom-card rounded-4" style="width: 15rem; height: 225px;">
            <div class="image-container rounded-4">
              <img src="/assets/image/mas.png" class="d-block w-100" alt="Gambar Guru">
              <div class="overlay">
                <p class="overlay-text">Nama Guru atau Informasi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex justify-content-center pb-3">
          <div class="card custom-card rounded-4" style="width: 15rem; height: 225px;">
            <div class="image-container rounded-4">
              <img src="/assets/image/mas.png" class="d-block w-100" alt="Gambar Guru">
              <div class="overlay">
                <p class="overlay-text">Nama Guru atau Informasi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex justify-content-center pb-3">
          <div class="card custom-card rounded-4" style="width: 15rem; height: 225px;">
            <div class="image-container rounded-4">
              <img src="/assets/image/mas.png" class="d-block w-100" alt="Gambar Guru">
              <div class="overlay">
                <p class="overlay-text">Nama Guru atau Informasi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex justify-content-center pb-3">
          <div class="card custom-card rounded-4" style="width: 15rem; height: 225px;">
            <div class="image-container rounded-4">
              <img src="/assets/image/mas.png" class="d-block w-100" alt="Gambar Guru">
              <div class="overlay">
                <p class="overlay-text">Nama Guru atau Informasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .image-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .image-container img {
    display: block;
    width: 100%;
    transition: transform 0.3s ease;
  }
  
  .image-container:hover img {
    transform: scale(1.1); /* Efek zoom pada gambar */
  }
  
  /* Overlay untuk teks */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Warna transparan hitam */
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .image-container:hover .overlay {
    opacity: 1;
  }
  
  .overlay-text {
    color: #fff;
    font-size: 1rem;
    text-align: center;
  }

  .section-title {
  display: inline-block; /* Agar garis sesuai dengan teks */
  position: relative;
  font-size: 2.5rem; /* Ukuran font */
  font-weight: bold;
}

.section-title::after {
  content: "";
  position: absolute;
  width: 50%; /* Panjang garis, bisa diganti sesuai kebutuhan */
  height: 4px; /* Ketebalan garis */
  background-color: #4caf50; /* Warna garis */
  bottom: -5px; /* Jarak garis dengan teks */
  left: 0; /* Posisi garis (dari kiri) */
}
  </style>
  
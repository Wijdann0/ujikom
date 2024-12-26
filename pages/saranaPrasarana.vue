<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 p-4">
                <h1 class="section-title pb-1">
                    <strong>Sarana Dan Prasarana</strong>
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col p-4">
                <h5 class="section-title pb-1">
                   Tanah
                </h5>
            </div>
        </div>
        <div class="row">
            <div class="col pb-3" style="width: 500px;">
                <div class="card custom-card rounded-4" style="width: 15rem;">
                    <div class="image-container rounded-4">
                    <img src="/assets/image/denah1.jpg" class="" alt="Gambar Guru">
                    <div class="overlay">
                        <p class="overlay-text">Denah SMK Negeri 4</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 pb-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <p class="card-text">Tanah 1</p>
                    <p class="card-text">Sertifikat : 10291002400014</p>
                    <ul>
                        <li>Luas Lahan : 7861 m<sup>2</sup></li>
                        <li>Luas Bangunan : ???</li>
                        <li>Lahan Kosong : ???</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pb-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <p class="card-text">Tanah 2</p>
                    <p class="card-text">Sertifikat : 10291003400011</p>
                    <ul>
                        <li>Luas Lahan : 2057 m<sup>2</sup></li>
                        <li>Luas Bangunan : ???</li>
                        <li>Lahan Kosong : ???</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pb-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <p class="card-text">Tanah 3</p>
                    <p class="card-text">Sertifikat : 10291003400012</p>
                    <ul>
                        <li>Luas Lahan : 2920 m<sup>2</sup></li>
                        <li>Luas Bangunan : ???</li>
                        <li>Lahan Kosong : ???</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pb-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <p class="card-text">Tanah 4</p>
                    <p class="card-text">Sertifikat : 10291003400013</p>
                    <ul>
                        <li>Luas Lahan : 400 m<sup>2</sup></li>
                        <li>Luas Bangunan : ???</li>
                        <li>Lahan Kosong : ???</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

        <h4 class="section-title pb-1">Bangunan</h4>

        <div class="row pt-4">
            <div class="col-md-3 d-flex justify-content-center pb-3">
                <div class="card custom-card rounded-4" style="width: 15rem;">
                    <div class="image-container rounded-4">
                    <img src="/assets/image/profil.jpg" class="d-block w-100" alt="Gambar Guru">
                    <div class="overlay">
                        <p class="overlay-text">Nama Bangunan</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 d-flex justify-content-center pb-3">
                <div class="card custom-card rounded-4" style="width: 15rem;">
                    <div class="image-container rounded-4">
                    <img src="/assets/image/profil.jpg" class="d-block w-100" alt="Gambar Guru">
                    <div class="overlay">
                        <p class="overlay-text">Nama Bangunan</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 d-flex justify-content-center pb-3">
                <div class="card custom-card rounded-4" style="width: 15rem;">
                    <div class="image-container rounded-4">
                    <img src="/assets/image/profil.jpg" class="d-block w-100" alt="Gambar Guru">
                    <div class="overlay">
                        <p class="overlay-text">Nama Bangunan</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 d-flex justify-content-center pb-3">
                <div class="card custom-card rounded-4" style="width: 15rem;">
                    <div class="image-container rounded-4">
                    <img src="/assets/image/profil.jpg" class="d-block w-100" alt="Gambar Guru">
                    <div class="overlay">
                        <p class="overlay-text">Nama Bangunan</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
/* Overlay untuk teks */
.overlay {
    position: absolute;
    top: 100;
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
</style>
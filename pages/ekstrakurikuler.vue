<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 p-4">
            <h1 class="section-title pb-1">
                <strong>Ekstrakurikuler</strong>
            </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 pb-3">
                <div class="card custom-card" style="width: 18rem; height: 25rem;">
                    <div class="image-container">
                        <img src="/assets/image/Paskib.webp" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <p class="card-text">Paskibra</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pb-3">
                <div class="card custom-card" style="width: 18rem; height: 25rem;">
                    <div class="image-container">
                        <img src="/assets/image/Pks.webp" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <p class="card-text">Polisi Keamanan Sekolah (PKS)</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pb-3">
                <div class="card custom-card" style="width: 18rem; height: 25rem;">
                    <div class="image-container">
                        <img src="/assets/image/Prmk.webp" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <p class="card-text">Pramuka</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pb-3">
                <div class="card custom-card" style="width: 18rem; height: 25rem;">
                    <div class="image-container">
                        <img src="/assets/image/Sepak.webp" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <p class="card-text">Sepak Bola</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pb-3">
                <div class="card custom-card" style="width: 18rem; height: 25rem;">
                    <div class="image-container">
                        <img src="/assets/image/Sfr.webp" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <p class="card-text">Safety Riding (SFR)</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pb-3">
                <div class="card custom-card" style="width: 18rem; height: 25rem;">
                    <div class="image-container">
                        <img src="/assets/image/bg1.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
.custom-card {
    height: 25rem; /* Menyesuaikan tinggi card */
}

.image-container {
    height: 60%; /* Proporsi untuk gambar */
    overflow: hidden; /* Supaya bagian gambar yang berlebih tidak terlihat */
}

.image-container img {
    object-fit: cover; /* Gambar memenuhi container tanpa distorsi */
    width: 100%;
    height: 100%;
}

.card-body { /* Sisanya untuk teks */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

</style>
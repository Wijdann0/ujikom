<template>
  <div class="container-fluid">
    <!-- row pt-4 d-flex justify-content-center bg-white p-0 m-0 -->
    <div class="pt-3">
      <div class="background-container d-flex justify-content-center align-items-center">
        <div class="bg-transparant">
          <div class="opacity-100 text-black">
            <h1 class="bg-secondary-subtle opacity-75 p-2">Selamat Datang Di Project Untuk Ujikom</h1>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="row pb-5">
    <div class="col-md-4 d-flex">
      <div class="card mt-5 d-flex justify-content-center" style="width: 100%;">
        <div class="">
          <img src="../assets/image/mas.png" class="w-50" alt="...">
        </div>
        
        <div class="card-body ">
          <h5 class="card-title">Sambutan Kepala Sekolah</h5>
          <div class=" d-flex justify-content-center">
            <p class="card-text" style="text-align: justify;">
            Assalamualaikum Wr.Wb
            </p>
          </div>
          
          <p class="card-text" style="text-align: justify;">
            Segala puji dan syukur kita panjatkan kepada Allah SWT, semoga kita semua ada dalam lindungan-nya. dan atas perkenan-nya pula kami dapat menghadirkan website SMK Negeri 4 Tasikmalaya ini.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-8 pt-5">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner rounded">
          <div class="carousel-item active">
            <img src="../assets/image/cont2.jpeg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/image/cont3.jpeg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/image/cont4.jpeg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <hr class="pb-5">
    <div class="row text-center pb-5 bg-white">
      <div class="col">
        <h1>Kompetensi Keahlian</h1>
      </div>
    </div>
    <div class="kompetensi-container">
      <div class="row p-0 m-0 pb-5 text-center">
        <div class="col-4 pb-3">
          <div class="card">
            <h5 class="card-title pt-3 fw-bold">Teknik Komputer Dan Jaringan</h5>
            <h6>Sarana Pendukung Pembelajaran :</h6>
            <div class="card-body d-flex justify-content-center" style="text-align: justify;">
              <div class="card-text">
                <ul>
                  <li>Bengkel TKJ</li>
                  <li>Network Simulator</li>
                  <li>Techno Park</li>
                  <li>Dll</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 pb-3">
          <div class="card">
            <h5 class="card-title fw-bold">Pengembangan Perangkat Lunak & Gim</h5>
            <h6>Sarana Pendukung Pembelajaran :</h6>
            <div class="card-body d-flex justify-content-center" style="text-align: justify;">
              <div class="card-text">
                <ul>
                  <li>Laboratorium Komputer</li>
                  <li>Komputer Server</li>
                  <li>Techno Park</li>
                  <li>Dll</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 pb-3">
          <div class="card">
            <h5 class="card-title pt-3 fw-bold">Teknik Dan Bisnis Sepeda Motor</h5>
            <h6>Sarana Pendukung Pembelajaran :</h6>
            <div class="card-body d-flex justify-content-center" style="text-align: justify;">
              <div class="card-text">
                <ul>
                  <li>Bengkel TBSM</li>
                  <li>Unit Produksi</li>
                  <li>Techno Park</li>
                  <li>Dll</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 pb-3">
          <div class="card">
            <h5 class="card-title pt-3 fw-bold">Desain Komunikasi Visual</h5>
            <h6>Sarana Pendukung Pembelajaran :</h6>
            <div class="card-body d-flex justify-content-center" style="text-align: justify;">
              <div class="card-text">
                <ul>
                  <li>Bengkel DKV</li>
                  <li>Unit Produksi</li>
                  <li>Techno Park</li>
                  <li>Dll</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 pb-3">
          <div class="card">
            <h5 class="card-title pt-3 fw-bold">Teknik Otomasi Industri</h5>
            <h6>Sarana Pendukung Pembelajaran :</h6>
            <div class="card-body d-flex justify-content-center" style="text-align: justify;">
              <div class="card-text">
                <ul>
                  <li>Bengkel TOI</li>
                  <li>Unit Produksi</li>
                  <li>Techno Park</li>
                  <li>Dll</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="pb-5">

    <div class="row justify-content-center pb-4 m-0 p-0 pb-5" >
      <div class="col-6 text-white m-1">
        <h6 class="bg-secondary d-flex align-items-center justify-content-center rounded-3" style="height: 50px;">Berita terbaru</h6>
        <div class="m-3">
          <div class="card" id="clickable">
            <div class="card-header">
              12-12-2024
            </div>
            <div class="card-body">
              <h5 class="card-title">Pemilihan Ketua & Wakil Osis</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <p></p>
          <div class="card">
            <div class="card-header">
              12-12-2024
            </div>
            <div class="card-body">
              <h5 class="card-title">Pembukaan Pekan Olahraga Raga Kelas</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <p></p>
          <div class="card">
            <div class="card-header">
              25-11-2024
            </div>
            <div class="card-body">
              <h5 class="card-title">Selamat Hari Guru Nasional</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <p></p>
        </div>
      </div>
      <div class="col-4 text-white m-1">
        <h6 class="bg-success d-flex align-items-center justify-content-center rounded-3" style="height: 50px;">Pengumuman terbaru</h6>
        <div class="m-3">
          <div class="card">
            <div class="card-header">
              13-12-2024
            </div>
            <div class="card-body">
              <h5 class="card-title">LPS SEMIFINAL</h5>
              <p  class="card-text">SMK Negeri 3 Tasikmalaya VS SMK Negeri 4 Tasikmalaya</p>
            </div>
          </div>
          <p></p>
          <div class="card">
            <div class="card-header">
              10-12-2024
            </div>
            <div class="card-body">
              <h5 class="card-title">Pekan Ujian Sekolah</h5>
              <p  class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <p></p>
          <div class="card">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p  class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>

    <hr class="pb-5">

    <div class="row text-center p-0 m-0 bg-success-subtle pb-5">
        <h5 class="bg-secondary d-flex justify-content-center align-items-center text-white" style="height: 40px;">Prasarana Pembelajaran</h5>
        <p>Beberapa prasarana yang tersedia di SMKN 4 Tasikmalaya, untuk melihat prasarana lainnya silahkan buka halaman 
          <a href="#">"Sarpras"</a>
        </p>

        <div class="col-lg-3">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col pt-5 d-flex justify-content-center">
          <h6 class="bg-success text-white d-flex justify-content-center align-items-center " style="width: 400px; height: 50px;">
            <a class="text-white link-offset-2 link-underline link-underline-opacity-0" href="/saranaPrasarana">Selengkapnya</a>
          </h6>
        </div>
    </div>

    <hr class="pb-5">
    <div>
      <div class="row pb-5 text-center">
          <h3 class="pb-5">Data Statistik</h3>
          <div class="col-sm-6 text-center pb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Jumlah Siswa</h5>
              <p class="card-text fw-bold">1.505</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 text-center pb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Jumlah Guru</h5>
              <p class="card-text fw-bold">90</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Jumlah Rombel</h5>
              <p class="card-text fw-bold">45</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Jumlah Tenaga Administrasi</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
      </div>

      <hr class="pb-5">
    </div>
  </div>
</template>

<style scoped>
body{
  padding: 0;
  margin: 0;
}
.d-block{
  height: 500px
}

template{
  padding: 0;
  margin: 0;
}

.background-container {
  background-image: url('../assets/image/bg1.jpg');
  background-size: cover; /* Membuat gambar menyesuaikan ukuran container */
  background-position: center; /* Pusatkan gambar */
  background-repeat: no-repeat; /* Mencegah pengulangan gambar */
  width: 100%;
  height: 80vh; /* Atur agar menutupi seluruh layar */
}

.kompetensi-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

</style>

<script>

</script>
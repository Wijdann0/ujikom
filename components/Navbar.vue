<template>
  <div>
      <!-- Top Bar -->
      <div class="bg-success text-white pt-2 py-1 justify-content-between align-items-center px-3">
        <marquee class="flex-grow-1">
          Pengumuman Kelulusan PPDB SMPN 3 Tasikmalaya Tahap 1 Non-Zonasi akan dirilis pada tanggal 1 Juli 2024
        </marquee>
        
      </div>
        <div class="bg-white px-2 text-end pt-2">
            <span>Sabtu, 7 Desember 2024</span>
        </div>
        <hr class="shadow-sm">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="..." alt="Logo" width="50" class="me-2" />
            <span class="fw-bold">Gatau Sekolah Mana</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">HOME</a>
              </li>
              <!-- Dropdown Profil -->
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                href="#" id="navbarDropdownEkskul" 
                role="button" data-bs-toggle="dropdown" aria-expanded="false">PROFILE</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownProfil" id="navbarDropdownProfil">
                <li>
                  <nuxt-link to="/profil/sejarah/" class="dropdown-item">
                    Sejarah
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/profil/VisiMisi/" class="dropdown-item">
                    Visi & Misi
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/profil/guruStaf/" class="dropdown-item">
                    Guru & Staf
                  </nuxt-link>
                </li>
              </ul>
            </li>
              <li class="nav-item">
                <a class="nav-link" href="#">KURIKULUM</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SAPRAS</a>
              </li>
               <!-- Dropdown Ekstrakurikuler -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownEkskul"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ekstrakurikuler
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownEkskul" id="navbarDropdownEkskul">
                <li><a class="dropdown-item" href="#">Pramuka</a></li>
                <li><a class="dropdown-item" href="#">Paskibra</a></li>
                <li><a class="dropdown-item" href="#">Basket</a></li>
                <li><a class="dropdown-item" href="#">Futsal</a></li>
                <li><a class="dropdown-item" href="#">Tari Tradisional</a></li>
                <!-- Tambahkan ekstrakurikuler lainnya sesuai kebutuhan -->
              </ul>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  marquee {
    font-size: 14px;
  }
  .navbar-brand img {
    border-radius: 50%;
  }
  .nav-link {
    transition: color 0.3s ease;
  }
  .nav-link:hover {
    color: #4caf50;
  }
    /* Navbar Styles */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 10px 20px;
    }

    .navbar .logo {
      font-size: 20px;
      font-weight: bold;
    }

    .navbar ul {
      list-style: none;
      gap: 20px;
      margin: 0;
      padding: 0;
    }

    .navbar ul li {
      position: relative;
    }

    .navbar ul li a {
      text-decoration: none;
      color: #333;
      padding: 10px 15px;
      display: block;
      font-size: 16px;
    }

    /* Dropdown Menu */
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #ffffff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      z-index: 100;
      min-width: 200px;
    }

    .dropdown-menu li {
      width: 100%;
    }

    .dropdown-menu li a {
      padding: 10px;
    }

    .dropdown:hover .dropdown-menu {
      display: block;
    }
  </style>
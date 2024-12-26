<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 p-4">
            <h1 class="section-title pb-1">
                <strong>Buku Pembelajaran</strong>
            </h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laboriosam a? Dolore eius vel sit reprehenderit 
                perspiciatis earum officiis totam nobis tempore magni illum, enim corrupti sint distinctio aliquam soluta.lor Lorem
                 ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur excepturi recusandae fuga quia aliquid, 
                 exercitationem atque pariatur quae placeat dicta! Excepturi velit ab architecto eum repellat ut dolore aspernatur.
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 p-4">
            <h1 class="section-title pb-1">
                <strong>Pembelajaran Dan Jadwal</strong>
            </h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laboriosam a? Dolore eius vel sit reprehenderit 
                perspiciatis earum officiis totam nobis tempore magni illum, enim corrupti sint distinctio aliquam soluta.lor Lorem
                 ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur excepturi recusandae fuga quia aliquid, 
                 exercitationem atque pariatur quae placeat dicta! Excepturi velit ab architecto eum repellat ut dolore aspernatur.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam quam maxime voluptatum, sequi ad earum dicta?
                  Quas officia esse nihil, qui repudiandae, harum, laudantium neque dolore veniam aperiam cumque?
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
</style>
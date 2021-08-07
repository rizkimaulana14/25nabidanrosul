<template>
  <div class="home text-light">
    <div class="px-4 py-5 my-5 text-center">
      <img
        class="d-block img-thumbnail shadow mx-auto mb-4"
        src="img/cover.jpeg"
        alt=""
      />
      <h1 class="display-5 fw-bold">25 NABI & ROSUL</h1>
      <div class="col-lg-12 mx-auto">
        <p class="lead mb-4">
          Bagi umat Islam, nabi dan rasul merupakan sosok yang dijadikan suri
          teladan. Semua tingkah laku nabi maupun rasul pantas dijadikan contoh
          setiap manusia dalam menjalani kehidupan sehari-hari. Di sisi lain,
          secara etimologi, kata 'Nabi' berasal dari kata naba yang berarti
          'dari tempat yang tinggi'. Adapun pengertian nabi secara umum ialah
          Hamba Allah SWT yang mendapat kepercayaan berupa wahyu dari Allah SWT
          untuk dirinya sendiri. Jumlah seluruh nabi yang sesungguhnya memang
          tak terhitung. Namun dalam Islam, kita wajib mengimani 25 nabi dan
          rasul. Sejak Nabi Adam hingga Nabi Muhammad, kisahnya bisa menjadi
          suri teladan bagi manusia. Masing-masing nabi memiliki riwayat serta
          ceritanya masing-masing dalam menegakkan ajaran tauhid. Ada banyak
          pelajaran yang bisa dipetik dari keteladanan para nabi. Dengan
          mempelajarinya dan meniru kebaikannya tentu akan membuat seseorang
          jadi manusia yang lebih baik.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <router-link
            class="btn btn-success rounded-pill btn-lg px-4 gap-3"
            to="/list-nabi"
          >
            <i class="fa fa-arrow-right"></i> Lihat Selengkapnya
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

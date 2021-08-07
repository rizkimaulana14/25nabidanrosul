<template>
  <div class="detail-nabi mt-3">
    <div class="card shadow">
      <div class="card-header">
        Detail dari <strong>{{ nabi.nabi.nama }}</strong>
      </div>
      <div class="card-body">
        <div class="mt-1">
          <h5>
            Nama : <strong>{{ nabi.nabi.nama }}</strong>
          </h5>
          <h5>
            Tahun Lahir : <strong>{{ nabi.nabi.lahir }}</strong>
          </h5>
          <h5>
            Umur : <strong>{{ nabi.nabi.umur }}</strong>
          </h5>
          <h5>
            Tempat : <strong>{{ nabi.nabi.tempat }}</strong>
          </h5>
          <h5>Kisah :</h5>
        </div>
        <div class="mt-3">
          <p>
            {{ nabi.nabi.kisah }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailNabi",
  data() {
    return {
      nabi: {},
    };
  },
  methods: {
    setNabi(data) {
      this.nabi = data;
    },
  },
  mounted() {
    var url =
      `https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=` +
      this.$route.params.nama;
    axios.get(url).then((res) => {
      this.setNabi(res.data);
    });
  },
};
</script>
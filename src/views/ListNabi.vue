<template>
  <div class="list-nabi mt-3">
    <div class="card shadow">
      <div class="card-header">List 25 Nabi dan Rosul</div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Nabi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Adam AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'adam' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Idris AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'idris' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nuh AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'nuh' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Hud AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'hud' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Saleh AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'saleh' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Ibrahim AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'ibrahim' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Luth AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'luth' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Ismail AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'ismail' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Ishaq AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'ishaq' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Yaqub AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'yaqub' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Yusuf AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'yusuf' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Ayyub AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'ayyub' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Syu'aib AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'syuaib' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Musa AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'musa' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Harun AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'harun' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Zulkifli AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'zulkifli' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Daud AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'daud' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Sulaiman AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'sulaiman' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Ilyas AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'ilyas' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Ilyasa AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'ilyasa' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Yunus AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'yunus' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Zakaria AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'zakaria' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Yahya AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'yahya' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>Isa AS</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'isa' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Muhammad SAW</td>
              <td>
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'DetailNabi', params: { nama: 'muhammad' } }"
                  ><i class="fa fa-info-circle"></i> Lihat Detail</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListNabi",
};
</script>
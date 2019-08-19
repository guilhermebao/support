<script>
import { post } from "./request/BaseRequest";
import ChartData from "./components/ChartData.vue"

export default {
  name: "App",
    components: {
    ChartData
  },
  data() {
    return {
      list: [],
      search: "",
      loaded: false
    };
  },
  mounted() {
    this.loaded = false;
    post("/marco", {
      action: "view_router_trafic"
    })
      .then(data => {
        this.list = data;
        this.loaded = true;
        console.log("RESULT", data);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
      this.fillData()
  },
  methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      },
  computed: {
    filteredItems() {
      return this.list.filter(item => {
        console.log('item')
        if (this.search) {
          return (
            item.id_query.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        } else {
          return item;
        }
      });
    }
  },
  created() {}
};
</script>

<template>
  <div id="app">

    <div class="container-fluid mt-3">
      
      <div class="form-group">
        <input class="form-control" type="text" v-model="search" maxlength="50" placeholder="Busque pela Id">
      </div>
      <ChartData/>
      <div class="table-wrapper">
        <table class="table table-sm table-striped">
          <thead>
            <tr>
              <th class="color-blue">Id</th>
              <th class="color-blue">Entrada</th>
              <th class="color-blue">Saida</th>
              <th class="color-blue">interface</th>
              <th class="color-blue">Tempo de coleta</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="item.id">
              <td>{{ item.id_query }}</td>
              <td>{{ item.input_trafit }}</td>
              <td>{{ item.output_trafic }}</td>
              <td>{{ item.interface }}</td>
              <td>{{ item.time_colect }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.table-wrapper {
  overflow-x: auto;
}

.form-control {
  padding-left: 15px;
  border-radius: 25px;
  border-color: #0083d0;
}

.color-blue {
  color: #0083d0;
}
</style>

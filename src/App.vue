<script>
import { post } from "./request/BaseRequest";
import ChartData from "./components/ChartData.vue";

export default {
  name: "App",
  components: {
    ChartData
  },
  data() {
    return {
      // labels: ["January", "February"],
      list: [
      // {
      //   label: '2018 Sales',
      //   borderColor: 'rgba(50, 115, 220, 0.5)',
      //   backgroundColor: 'rgba(50, 115, 220, 0.1)',
      //   data: [300, 700, 450, 750, 450, 300, 700, 450, 750, 450, 750, 450, 300, 700, 450, 750, 450]
      // },
      // {
      //   label: '2017 Sales',
      //   borderColor: 'rgba(255, 56, 96, 0.5)',
      //   backgroundColor: 'rgba(255, 56, 96, 0.1)',
      //   data: [600, 550, 750, 250, 700, 450, 750, 450, 300, 700, 450, 700, 450, 750, 450, 300, 400]
      // }
    ],
      // search: "",
      loaded: false
    };
  },
  methods: {
    update() {
        location.reload();
    },
  },
  mounted() {
    this.loaded = false;
    post("/marco", {
      action: "view_router_trafic"
    })
      .then(data => {
        let line;
        let interfaceName;
        let inputTrafit;
        let output = [];

        // console.log(data);

        for (let i = 0; i < data.list.length; i++) {
          line = data.list[i];
          output = [];

          console.log("line", line);

          for (let j = 0; j < line.length; j++) {
            output.push(line[j].output_trafic);
            interfaceName = line[j].interface;
            // inputTrafit = line[j].input_trafit;
          }

          this.list.push({
            label: interfaceName,
            // borderColor: 'rgba(50, 115, 220, 0.5)',
            backgroundColor: 'rgba(50, 115, 220, 0.1)',
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: 'rgba(50, 115, 220, 0.5)',
            data: output
          });

        }

        for (let i = 0; i < data.list.length; i++) {
          line = data.list[i];
          output = [];

          console.log("line", line);

          for (let j = 0; j < line.length; j++) {
            output.push(line[j].input_trafit);
            interfaceName = line[j].interface;
            // inputTrafit = line[j].input_trafit;
          }

          this.list.push({
            label: interfaceName,
            borderColor: 'rgba(235, 153, 63, 0.5)',
            pointBackgroundColor: "white",
            backgroundColor: 'rgba(235, 153, 63, 0.1)',
            borderWidth: 1,
            data: output
          });

        }

        // console.log(this.list);

        this.labels = data.interface;
        this.loaded = true;
      })
      .catch(error => {
        console.log("ERROR", error);
      });
    // this.fillData();
  }
};
</script>

<template>
  <div id="app">
    
    <div class="container-fluid mt-3">
      <div class="text-center mb-2">
        <button class="btn btn-primary btn-update" type="submit" @click.prevent="update()">Atualizar</button>
      </div>
        <ChartData v-if="loaded" :mylabels="labels" :mydatasets="list" />
    </div>
  </div>
</template>

<style>

.btn-update {
  width: 200px;
  border-radius: 20px;
  background-color: #eb993f;
  border-color: #eb993f;
}

.btn-update:hover {
  width: 200px;
  border-radius: 20px;
  background-color: #e2851e;
  border-color: #e2851e;
}

</style>

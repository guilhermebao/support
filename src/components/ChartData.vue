<template>
<div>
  <chartjs-line :labels="mylabels" :datasets="mydatasets"></chartjs-line>
</div>
</template>

<script>
export default {
  name: "ChartData",
  data() {
    return {
      mylabels: ["1", "2", "3", "4", "5", "6", "7"],
            mydatasets:[{
                label: "Tráfego de entrada",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#00c853",
                borderColor: "#00c853",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#00c853",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#00c853",
                pointHoverBorderColor: "#00c853",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            },
            {
                label: "Tráfego de saída",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#0083d0",
                borderColor: "#0083d0",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#0083d0",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#0083d0",
                pointHoverBorderColor: "#0083d0",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [0, 20, 40, 41, 66, 25, 80],
                spanGaps: false,
            },],
      list: [],
      search: "",
      loaded: false
    };
  },
}
</script>
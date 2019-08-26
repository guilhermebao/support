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
      mylabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]
      }
    },
  props: {

    mydatasets: {
      type: Array,
      default: []
    }
  }
};
</script>
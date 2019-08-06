<template>
  <div id="app">        
  </div>
</template>

<script>
import { post } from "./request/BaseRequest";

export default {
  name: 'App',
  components: {
  },
  mounted() {
    post("/marco", {
      action: "view_router_trafic"
    }).then(data => {
      console.log('RESULT', data)
    }).catch(error =>{
      console.log('ERROR', error)
    })
  },
  created() {
    
  },
}
</script>

<style>

</style>

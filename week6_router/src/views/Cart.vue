<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <h2>這是狗屋車</h2>

  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  }
}
</script>

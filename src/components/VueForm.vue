<template>
  <div class="vue-form">
    <form-profile></form-profile>
  </div>
</template>

<script>
import Profile from '@/components/forms/Profile'
export default {
  name: 'vue-form',
  data () {
    return {
    }
  },
  components: {
    'form-profile': Profile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

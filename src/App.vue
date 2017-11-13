<template>
  <div id="app">
    <el-container>
      <el-header class="hidden-sm-and-up">
        <main-menu mode="horizontal"></main-menu>
      </el-header>
    </el-container>
    <el-container>
      <el-aside width="300px" class="hidden-xs-only">
        <main-menu></main-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MainMenu from '@/components/includes/MainMenu'
export default {
  name: 'app',
  components: {
    'main-menu': MainMenu
  },
  mounted () {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 60px;
  max-width: 1000px;
}

</style>

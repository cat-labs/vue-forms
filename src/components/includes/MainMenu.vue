<template>
  <div class="main-menu">
  	<el-menu default-active="1" class="el-main-menu" :mode="mode">
  		<div class="text-center" :class="[{'left': mode=='horizontal'}, mode, {'mb2': mode=='vertical'}]">
  			<img class="logo" src="../../assets/logo.png">
  		</div>
      <router-link to="/">
        <el-menu-item index="1">
          Hello
        </el-menu-item>
      </router-link>
      <router-link to="/simple-form">
        <el-menu-item index="2">
          Simple Form
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'main-menu',
  data () {
    return {}
  },
  props: {
    mode: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logo{
		margin: auto;
		width: 40px;
	}

	.vertical .logo{
		width: 80px;
	}
</style>

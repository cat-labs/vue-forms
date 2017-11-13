<template>
  <div class="profile">
  	<el-row>
  		<el-col :span="24">
  			<el-form ref="form" :model="form" label-width="120px">
			    <el-form-item label="Activity name">
			      <el-input v-model="form.name"></el-input>
			    </el-form-item>
			    <el-form-item label="Activity zone">
			      <el-select v-model="form.region" placeholder="please select your zone">
			      	<el-option label="Zone one" value="shanghai"></el-option>
			      	<el-option label="Zone two" value="beijing"></el-option>
			      </el-select>
			  	</el-form-item>
			  	<el-form-item label="Activity time">
			      <el-col :span="11">
			        <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
			      </el-col>
			      <el-col class="line" :span="2">-</el-col>
			      <el-col :span="11">
			        <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
			      </el-col>
			  	</el-form-item>
			  	<el-form-item label="Instant delivery">
			      <el-switch v-model="form.delivery"></el-switch>
			  	</el-form-item>
			  	<el-form-item>
			      <el-button type="primary">Create</el-button>
			      <el-button>Cancel</el-button>
			  	</el-form-item>
			</el-form>
  		</el-col>
	</el-row>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  data () {
    return {
      form: {},
      visible: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

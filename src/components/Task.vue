<template>
  <div class="task-container">
		<div v-if ="loading" class="loader"></div>
		<div v-else class ="container">
			<input v-show="edit" type="checkbox" id="checkbox" v-model="task.completed">completed<br>
			<!-- <span v-show="!edit">{{task.completed}}</span> -->
			<span :class="{done: task.completed}" v-show="!edit">{{task.description}}</span>
			<div class="new-task-card">
				<input v-show="edit" v-model="task.description" type="text">
			</div>
		</div>
		<button class="edit" @click="editor">edit</button>
		<button v-show="edit" class="submit" @click="submit" >submit</button>
	</div> 
</template>

<script>
import VueCookies from 'vue-cookies'
const axios = require('axios')
export default {
	name:'Task',
	props:['id'],
	data(){
		return {
			task:{
				description:null,
				completed:false	
			},
			edit: false,
			checked:false,
			loading:true,
		}
	},
	mounted() {
		this.getTask(this.id)
	},
	methods: {
		async getTask(id){
			try {
				const token = VueCookies.get('auth')
				// const token = this.$store.state.accessToken;
				axios.get(`https://task-app-16.herokuapp.com/tasks/`+ id,{
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`	
				},
				}).then( ( response ) => {
					this.task.completed = response.data.completed;
					this.task.description = response.data.description;
					console.log( this.task,"task retrieved" )
					this.loading=false;
				})
			}
			catch(e) {
				console.log(e,"error occurred from single task Api")
			}
		},
		editor(){
			this.edit = !this.edit
			// console.log(this.edit)
		},
		async submit(){
      try {
				// console.log(this.newtask,"kya shot h")
				this.loading=true;
				const token = VueCookies.get('auth')
        // const token = this.$store.state.accessToken;
        const response = await axios({ method: 'patch',
        url: `https://task-app-16.herokuapp.com/tasks/`+ this.id,
        headers: { 'Authorization': 'Bearer ' + token }, data: this.task })
				console.log(response,"task edited successfully")
				this.edit=false;
				this.loading=false;
      }
      catch(e) {
        console.log(e,"error occurred from Editing task Api")
      }
		}
	}
}	
</script>

<style scoped>
.task-container {
	padding: 16px;
  margin-top: 65px;
  height: 1500px;
  margin-left: 260px;
}
.new-task-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #f1f1f1;
  margin: 0 30px 20px 30px;
}
input[type=text]{
  height: 100%;
  width: 100%;
  font-size: 1.3rem;
  padding:16px;
	box-sizing: border-box;
}
.container{
	border:1px solid black;
}
.edit {
	border: none; /* Remove borders */
  color: white; /* Add a text color */
  padding: 14px 28px; /* Add some padding */
  cursor: pointer; /* Add a pointer cursor on mouse-over */
	background-color: #2196F3;
	float:right;
}
.submit {
		border: none; /* Remove borders */
  color: white; /* Add a text color */
  padding: 14px 28px; /* Add some padding */
  cursor: pointer; /* Add a pointer cursor on mouse-over */
	background-color:#4CAF50;
	float:right;
}
.done{
	text-decoration: line-through;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #42b983;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: auto;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
#delete{
	float:right;
}
</style>
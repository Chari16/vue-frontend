<template>
<div>
  <!-- <Header/> -->
  <div class="profile">
    <div v-for="(todo, index) in todos" :key="index" class="card" id="b1">
      {{todo.description}}
      <span @click="deletetask(todo._id,index)" class="button">x</span>
      <span @click="dropdown(todo,index)" class="dropdown">^</span>
        <div class="extra" v-show="dpdown==index">
          <p>Hello World!</p>
        </div>
    </div>
    <div class="new-task-card">
    <input v-model="newtask.description" @keyup.enter="addtodo" type="text">
    </div>
  </div>
</div>	
</template>
<script>
// import Header from './Header'
const axios = require('axios')
export default {
    name: 'Profile',
    components: {
      // Header,
    },
    data() {
      return {
        dpdown: null,
        newtask:{
          description :null
        },
        todos:[],
      }
    },
    created() {
      this.loadData(),
      this.getTodos()
    },
    methods: {
    async loadData() {
      try {
        const token = this.$store.state.accessToken;
        axios.get('https://task-app-16.herokuapp.com/users/me',{
		    headers: {
			    "Content-Type": "application/json",
			    "Authorization": `Bearer ${token}`	
		    },
        }).then( ( response ) => {
          console.log( response,"it worked" )
        })
      }
      catch(e) {
        console.log(e,"error occurred from Home page")
      }
    },
    async deletetask(id,index){
      console.log(id,"task id")
      this.todos.splice(index,1)
      try {
        const token = this.$store.state.accessToken;
        const response = await axios({ method: 'delete',
        url: `https://task-app-16.herokuapp.com/tasks/${id}`,
        headers: { 'Authorization': 'Bearer ' + token }})
        console.log(response,"task deleted successfully")
        
      }
      catch(e) {
        console.log(e,"error occurred from delete task Api")
      }
    },
    async addtodo() {
      try {
        // console.log(this.newtask,"kya shot h")
        const token = this.$store.state.accessToken;
        const response = await axios({ method: 'post',
        url: 'https://task-app-16.herokuapp.com/tasks',
        headers: { 'Authorization': 'Bearer ' + token }, data:this.newtask })
        console.log(response,"task added successfully")
        this.todos.push(response.data)
        this.newtask.description = null;
      }
      catch(e) {
        console.log(e,"error occurred from create task Api")
      }
    },
    dropdown(todo,index){
      console.log(index,"dropdown")
      if(this.dpdown != index) {
        this.dpdown = index;
      }
      else {
        this.dpdown = null;
      }
    },
    async getTodos(){
      try {
        const token = this.$store.state.accessToken;
        axios.get('https://task-app-16.herokuapp.com/tasks',{
		    headers: {
			    "Content-Type": "application/json",
			    "Authorization": `Bearer ${token}`	
		    },
        }).then( ( response ) => {
          this.todos = response.data;
          console.log( response,"todos retrieved" )
        })
      }
      catch(e) {
        console.log(e,"error occurred from Todo Api")
      }
    }
  } 
}
import $ from 'jquery'
function openTab(tabName) {
  var i, x;
  x = $(document).getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
</script>
<style scoped>
.profile {
	padding: 16px;
  margin-top: 65px;
  height: 1500px;
  margin-left: 260px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  width: 600px;
  margin-bottom: 20px;
  position: relative;
}

.button{
  float: left;
}
input {
  height: 100%;
  width: 100%;
  font-size: 1.3rem;
  padding:16px;
}
.form-element-container {
  position: relative;
  background-color: #fff;
}
.new-task-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #f1f1f1;
  width: 600px;
  margin-bottom: 20px;
}
.dropdown {
  float:right;
}
.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}
.containerTab {
  padding: 20px;
  color: white;
}
.extra {
  border:1px solid black;
}
</style>

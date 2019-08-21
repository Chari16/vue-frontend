<template>
<div>
  <div v-if="loading" class="loader"></div>
  <div v-else>
  <div class="header">
    <div class="row">
      <div class ="left"><router-link to="/home"><img class="logo" src ="../assets/logo.png"></router-link>
      </div>
      <div class ="right">   
        <ul class="navbar">          
        <li><router-link to="/home"> Home</router-link></li>
        <li><router-link to="/home/profile"> Profile</router-link></li>
        <span class="logoutbtn" @click="logout"> Logout</span>
        </ul>
      </div>
    </div>
  </div>
  <div class="sidenav">
    <li>{{profile.name}}</li>
    <li>{{profile.age}}</li>
    <li>{{profile.email}}</li>  
  </div>
  <div class="page-content">
    <router-view></router-view>
  </div>
  </div>
</div>
<!-- <div>
  <div class="home">
    <div class="row">
      <div class="column2">
        <div class="card">
          <div class="first-row">
            <img src="@/assets/images/10.jpg">
          </div>
          <div class="second-row">

            <button @click="like_post" class="like">Like</button>

            <button @click="add_comment" class="comment">Comment</button>

            <button @click="share_post" class="share">Share</button>

          </div>   
        </div>
        <div class="card">
          <h3>Card 1</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!-- <div v-else>
  Loading
</div> -->
</template>

<script scoped>
import service from './service'
import VueCookies from 'vue-cookies'
const axios = require('axios')
export default {
  name: 'Home',
    components: {

  },
  data() {
    return {
      wholeresponse: [],
      loading:true,
      profile:{ },
      avatar:null,
    }
  },
  props: {
    msg: String
  },
  created() {
    this.loadProfile()
  },

  methods: {
    like_post() {
      console.log("Like the post")
    },
    add_comment() {
      console.log("comment addded")
    },
    share_post() {
      console.log("shared to friends")
    },
    async logout() {
      try {
        const token = VueCookies.get('auth')
        // const token = this.$store.state.accessToken;
        const response = await axios({ method: 'post',
        url: 'https://task-app-16.herokuapp.com/users/logout',
        headers: { 'Authorization': 'Bearer ' + token } })

        console.log(response,"loggedout")
        this.$router.push('/login')
      }
      catch(e) {
        console.log(e,"error occurred from Logout Api")
      }
    },
    async loadProfile() {
      try {
        const token = VueCookies.get('auth')
        // const token = this.$store.state.accessToken;
        axios.get('https://task-app-16.herokuapp.com/users/me',{
		    headers: {
			    "Content-Type": "application/json",
			    "Authorization": `Bearer ${token}`	
		    },
        }).then( ( response ) => {
          this.profile = response.data;
          console.log( response,"it worked" )
          this.loading=false
        })
      }
      catch(e) {
        console.log(e,"error occurred from Profile Api")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home {
  padding: 16px;
  margin-top: 78px;
  height: 1500px;
}
.column1 {
  float: left;
  width: 20%;
  /* padding: 0 10px; */
  /* border: 5px solid black; */
  margin: 10px;
}
.column2 {
  float: left;
  width: 70%;
  /* padding: 0 10px; */
  margin: 10px 10px 10px 45px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  width: 600px;
  height: 450px;
  margin-bottom: 20px;
}
.left-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
.row {
  margin: 0px;
  padding: 0px;
}
.first-row {
  height:80%;
  margin-bottom:10px;
}
.second-row {
  height: 10%;
  margin-top: 20px;
  display: flex; 
}
.like {
  width:30%;
  border: 1px solid black;
  padding: 10px;
  margin: 0 5px 0 5px;
}
.comment {
  width: 30%;
  border: 1px solid black;
  padding: 10px;
  margin: 0 5px;
}
.share {
  width: 30%;
  border: 1px solid black;
  padding: 10px;
  margin: 0 5px;
}
img {
  height: 350px;
  width: 350px;
}
.header {
background-color: #42b983;
height: 58px;  
width: 100%;
padding: 10px 0;
position:fixed;
overflow:hidden;
top: 0;
z-index: 1;
}
.navbar {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  
}
  .nav-bar li {
    margin-left: 25px;
     }
    .navbar a{
        padding: 20px;
        font-size:20px;
        color:black;
        text-decoration: none;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

.row {
    display:flex;
    flex-wrap:wrap;
    margin-right:15px;
    padding:15px;

}
.logo {
    width:35px;
    height:35px;
    padding-left: 40px;
}
.left {
    width:25%;
    text-align:left;
}
.right {
    width:75%;
}
.sidenav {
  height: 100%;
  width: 260px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f3f3f3;
  overflow-x: hidden;
  padding-top: 20px;
	margin-top: 78px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
.page-content {
  font-size: 20px;
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
.logoutbtn{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  font-size: 20px;
  text-decoration: none;
  padding-left: 25px;
}
</style>

<template>
<div class="header">
    <div class="row">
        <div class ="left"><router-link to="/home"><img class="logo" src ="../assets/logo.png"></router-link>
        </div>
        <div class ="right">   
        <ul class="navbar">          
        <li><router-link to="/home"> Home</router-link></li>
        <li><router-link to="/profile"> Profile</router-link></li>
        <li><router-link to="/"> Logout</router-link></li>
        </ul>
        </div>
    </div>
</div>


  
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
.header {
background-color: #42b983;
height: 58px;  
width: 100%;
padding: 10px 0;
position:fixed;
overflow:hidden;
top: 0;
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
</style>



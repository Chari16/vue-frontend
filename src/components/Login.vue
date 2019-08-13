<template>
  <div class="container">
    <h1>Log In</h1>
    <p>Login in and Enjoy the services.</p>
    <div class="form">
      <div class="form-element-container">
        <input v-model="loginObj.email" type="text" name="email" required>
        <label class="form-label--floating" for="email">Email</label>
      </div>

      <div class="form-element-container">
        <input v-model="loginObj.password" type="password" name="psw" required>
        <label class="form-label--floating" for="psw">Password</label>
      </div>

      <div class="clearfix">
      <button @click="loginSubmit" class="signupbtn">Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import service from './service'
export default {
    name:'Login',
    data () {
        return {
        loginObj: {
            email: null,
            password: null
        }
        }
    },
    created() {
      if(this.$cookies.isKey('auth')) {
        this.$cookies.remove('auth')
        console.log("Auth key removed");
        this.$store.dispatch('resetHeader')
        console.log(this.$store.state.accessToken,"Hey")
        this.$store.dispatch('updateloggedOut')

      }

    },
    methods: {
        async loginSubmit(){
          try {
            const response = await service.userLogin(this.loginObj)
            if(response.data){
              this.$cookies.set("auth",response.data.token,'15min');  
            }
            console.log(response.data.token,"loggged in with token")
            this.$store.dispatch('setHeader',response.data.token)
            this.$store.dispatch('updateloggedIn')
            console.log(this.$store.state.accessToken,'My AccessToken from state')
            this.$router.push('/home') 
          }
          catch(e) {
            console.log(e,"error  has occured")
          }
        },
    } 
}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  height: 52px;
  padding: 28px 12px 6px;
  margin: 0 0 12px 0;
  display: block;
  box-shadow: none;
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.6);
  font-size: 1.5rem;
  line-height: 1.33333;
  font-weight: 200;
  color: rgba(0,0,0,0.9);
  position: relative;
  z-index: 1;
}

/* input[type=text]:focus, input[type=password]:focus {
  background-color:transparent;
  outline: none;
  border-color: #0073b1;
  box-shadow: 0 0 0 1px #0073b1; 
} */

/* Set a style for all buttons */
button {
  background-color: #0073b1;
  color: white;
  padding: 14px 20px;
  margin: 15px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 20px;
}

button:hover {
  opacity:1;
}

/* Float cancel and signup buttons and add an equal width */
 .signupbtn {
  width: 100%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
  margin-top: 79px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media only screen and (max-width: 768px) {
   .form {
     width: 100% !important;
  }
}

.form-element-container {
  position: relative;
  background-color: #fff;
}

.form {
  width: 384px;
  margin: auto;
}
label {
  display:block;
}
.form-label--floating {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 14px 0 0 12px;
  margin: 0;
  transition: .2s all;
  font-size: 1.3rem;
}

.form-element-container>input:focus + .form-label--floating {
  top: -10px;
  line-height: 1.42857;
  color: rgba(0,0,0,0.9);
  font-size: 0.9rem;
}

</style>

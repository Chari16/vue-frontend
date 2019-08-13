<template>
  <div class="container">
     <h1>Register</h1> 
    <div class="form">
      <div class="form-element-container">
        <label for="firstname">Name</label>
        <input
          v-model="signupObj.name"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Walter"
        />

        <label for="age">Age</label>
        <input v-model="signupObj.age" type="text" name="age" id="age" placeholder="25" />

        <label for="age">Email</label>
        <input
          v-model="signupObj.email"
          type="text"
          name="age"
          id="age"
          placeholder="abcd@gmail.com"
        />

        <label for="age">Password</label>
        <input
          v-model="signupObj.password"
          type="password"
          name="age"
          id="age"
          placeholder="abc@12345"
        />

        <div class="clearfix">
          <button @click="signupSubmit">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< Updated upstream
=======
import service from "./service";
>>>>>>> Stashed changes
export default {
  name: "Signup",
  data() {
    return {
      signupObj: {
        name: null,
        age: null,
        email: null,
        password: null
      }
    };
  },
  methods: {
    async signupSubmit() {
      try {
        const response = await service.userSignup(this.signupObj);
        if (response.data.token) {
          this.$router.push("/login");
        }
<<<<<<< Updated upstream
        }
    },
    methods: {
        signupSubmit(){
            console.log(this.signupObj,"test")
        }
    }    
}
=======
        console.log(response.data.token, "test");
      } catch (e) {
        console.log(e, "The error occured");
      }
    }
  }
};
>>>>>>> Stashed changes
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

.container {
  margin-top: 100px;
}
/* .signup {
    margin:auto;
    border: black 1px solid;
    height: 350px;
    padding: 30px;
    width: 500px;
    background: #eee;
}
.signup label {
    width: 100%;
    display: block;
}
.signup input {
    width: 100%;
    height:30px;
    border-radius:5px;
    border:1px solid black;
    padding:10px 0 10px 10px;
    margin-bottom:15px;
}
.signup button {
    width:100%;
    height:30px;
    background:#287bbc;
    border-radius:5px;
} */

.form {
  width: 384px;
  margin: auto;
}
.form-element-container {
  position: relative;
  background-color: #fff;
}

label {
  display: block;
  float: left;
  padding:5px;
  color:black;
  font-size:1.5rem;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

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
  opacity: 1;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  height: 52px;
  padding: 15px 10px;
  margin: 0 0 12px 0;
  display: block;
  box-shadow: none;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  font-size: 1.1rem;
  line-height: 1.33333;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.9);
  position: relative;
  z-index: 1;
}

@media only screen and (max-width: 768px) {
   .form {
     width: 100% !important;
  }
}
</style>

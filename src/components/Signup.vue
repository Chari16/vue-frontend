<template>
    <div class = "container">
        <div class = "signup">
            <label for="firstname">Name</label>
            <input  v-model="signupObj.name" type="text" name="firstname" id="firstname" placeholder="Walter"/>

            <label for="age">Age</label>
            <input v-model="signupObj.age" type="text" name="age" id="age" placeholder="25"/>

            <label for="age">Email</label>
            <input v-model="signupObj.email" type="text" name="age" id="age" placeholder="abcd@gmail.com"/>

            <label for="age">Password</label>
            <input v-model="signupObj.password" type="text" name="age" id="age" placeholder="abc@12345"/>

            <button @click="signupSubmit">Register</button>
        </div>
    </div>
</template>

<script>
import service from './service'
export default {
    name: 'Signup',
    data () {
        return {
        signupObj: {
            name: null,
            age: null,
            email: null,
            password: null
        }
        }
    },
    methods: {
        async signupSubmit(){
           try{
            const response = await service.userSignup(this.signupObj)
            if(response.data.token) {
                this.$router.push('/login')
            }
             console.log(response.data.token,"test")
           }
           catch(e) {
               console.log(e,"The error occured")
           }
        }
    }    
}
</script>

<style>
.container {
    margin-top:100px;
}
.signup {
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
}
</style>

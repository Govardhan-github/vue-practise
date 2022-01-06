<template>
    <div >
        <h2>Signup </h2>   
        <div class="alert alert-danger" v-if="errorMessage">{{errorMessage}}</div>
        <form action="" class="form" @submit.prevent="onSignup()">
           <div class="email">
               <label class="label" for="email">Email</label>
               <input class="text1" type="text"  v-model.trim="email" />
                <div class="error" v-if="errors.email" >{{errors.email}} </div>

           </div>
           <div class="password">
               <label class="label" for="">Password</label>
               <input class="text2" type="text" v-model.trim="password" />
                <div class="error" v-if="errors.password" >{{errors.password}} </div>

           </div>
            <div>
                <button class="submitbtn">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import loginValidations from '../../services/loginValidation';
import { mapActions, mapMutations} from "vuex";
import {SIGNUP_ACTION, LOADING_sPINNER_SHOW_MUTATION} from '../../Store/storeConstants'

    export default {
        name:'signup',
        data() {
            return {
                email: '',
                password : '',
                errors : [],
                errorMessage : ''
            }
        },
        beforeRouteLeave () {
          console.log("route living");
          console.log(this.$store);  
        },
        beforeRouteEnter (_,_1,next) {
            next(v =>{
                console.log("route enterinhg");
                console.log(v.$store.state.auth);  
            })
           
        },
        methods: {
            ...mapActions('auth',{
                signup:SIGNUP_ACTION
            }),
            ...mapMutations({
                showLoading : LOADING_sPINNER_SHOW_MUTATION
            }),
        async  onSignup(){
                //check the validatoons
                let validations = new loginValidations(
                    this.email,
                    this.password
                );
                this.errors = validations.checkValidations();
                if('email' in this.errors || 'password' in this.errors){
                    return false
                }
                this.showLoading(true)
               await this.signup({email:this.email , password : this.password}).catch(error =>{
                    this.errorMessage = error
                    console.log(error);
                    this.showLoading(false)

                })
                    this.showLoading(false)

            }
        },
    }
</script>

<style >
h2{
     margin-top:30px;
    text-align:start;
    color:black;
        margin-left:200px

}
.form{
    border : 2px solid grey; 
    height:250px;
    width:500px;
    background:lightgrey;
    margin-left:200px

}
.email{
    margin-top:30px;
    text-align:start;
    margin-left:10px;
        color:black

   
}
.password{
    margin-top:30px;
    text-align:start;
    margin-left:10px;
            color:black


}
.text1{
    margin-left:50px;
    width:50%
}
.text2{
    margin-left:20px;
    width:50%
}
.submitbtn{
    margin-top:20px;
    width:75px;
    height:50px;
    border:none;
    border-radius:7px;
    background-color:skyblue;
    font-style:bold;
}
</style>
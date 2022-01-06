<template>
    <div >
        <h2>Login</h2>   
        <div class="error-class">
            <div class="alert alert-danger" v-if="errorMessage"> {{errorMessage}}</div>
        </div>
        <form action="" class="form" @submit.prevent="onLogin()">
           <div class="email">
               <label class="label" for="email">Email</label>
               <input class="text1" type="text" v-model.trim="email"  />
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
import loginValidations from '../../services/loginValidation'
import { mapActions,mapMutations } from 'vuex';
import { LOGIN_ACTION,LOADING_sPINNER_SHOW_MUTATION } from '../../Store/storeConstants';

    export default {
        name:'Login',
        data() {
            return {
                email:'',
                password: '',
                errors: [],
                errorMessage: ''
            }
        },
         beforeRouteEnter (_,_1,next) {
            next(v =>{
                console.log("route enterinhg");
                console.log(v.$store.state.auth);  
            })
        },
        methods: {
            ...mapActions('auth',{
                login: LOGIN_ACTION
            }),
             ...mapMutations({
                showLoading : LOADING_sPINNER_SHOW_MUTATION
            }),
            async onLogin() {
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
               await this.login({email:this.email , password : this.password}).catch(error =>{
                    this.errorMessage = error
                    console.log(error);
                    this.showLoading(false)
                })
                    this.showLoading(false);
                    this.$router.push('/posts')
            }
        },
        
    }


</script>

<style >
.error-class{
    color: red;
    margin-left: 200px;
    max-width: 49%;
    max-height: 40px;
    font-size: 15px
    /* max-width:  */
}
h2{
     margin-top:30px;
    text-align:start;
    color:black;
        margin-left:200px

}
.form{
    margin-top: 20px;
    border : 2px solid grey; 
    height:250px;
    width:500px;
    background:red;
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
.error{
    color:red;
    margin-left:80px
}
</style>
<template>
    <div>
        <div>
            <h3>Full Name is <i>{{fullName}} </i> and age is <i> {{age}} </i> </h3>
            <button @click="changeAge">Chnage age</button>&nbsp;
            <input type="text" placeholder="First Name" v-model="firstName"/>&nbsp;
            <input type="text" placeholder="Last Name" v-model="lastName" />
        </div> <br>
        <div>
            The name is : {{userName }}
        </div>
        <div>
            <h4 class="title" v-for="post in posts" :key="post.id">
           title is :  {{ post.title }} <br>
            description is :  {{ post.description }} 
           <hr>
        </h4>

        </div>
        
        <!-- <div>
            <h4>User Details</h4>
            <ul> name is : {{user.name}}</ul>
            <ul>age is : {{user.age}}</ul>
            <button @click.prevent="changeName">Change Name</button>

        </div> -->
        <div>
            <div >
                <props v-for="post in posts" :key="post.id" :postData = "post" ></props>
            </div>
            <div>
                <user-data  :user-details="userDetails"   class="gopiclass" @changeFirstName="firstNameChange" /> 

            </div>
          
        </div>
    </div>
</template>

<script>
// ref is used for reactives so here 
// ref is used for individual like stirngs numbers 
// reactive is used for objects which are reactive  so no need to use .value whilw changing
// is ref is to check that is reactive or not and isreactive also same.
//torefs by using this we can chnge the variables whcih are inside in object to reactrive 
import { ref,reactive,isRef,isReactive,computed,watch } from 'vue'
import userData from './userData.vue'
import props from './props.vue'

export default {
    components:{
        userData,props
    },
    

    setup() {
        let name = ref("Gopi");
        let userDetails = reactive({
            name : 'Gopi',
            age : 28
         },
        )
         let firstName = ref('');
         let lastName =ref('');
         let age = ref('30')
         let posts = [
            {title:'gopi',description : 'description 1'},
            {title:'gopi reddy',description : 'description 2'}
         ]
         console.log(isRef(name.value));
         console.log(isReactive(userDetails.name));
        // setTimeout(() => {
        //     console.log("inside settimeout");
        //     console.log(name);
        //     name.value = "Govardhan Reddy"
        //     userDetails.name = 'Govardhan'
        // }, 3000);
        // let userrefs= toRefs(userDetails)
        
        function changeName() {
            userDetails.name = "change to gopi"
            console.log(userDetails.name);
        }
        function changeAge(){
            age.value = 40;
        }
       const fullName =  computed(()=>{
            return firstName.value+ ' ' +lastName.value
        })
        watch([age,fullName],(newvalue,oldvalue) =>{
            console.log(oldvalue);
            console.log(newvalue);

        });
        function firstNameChange(event){
            firstName.value = event
        }

        // function changeFirstName(event) {
        //     firstName.value = event.target.value
        // }

        // function changeLastName(event) {
        //     lastName.value = event.target.value
        // }
        return {
            userName : name,
            // name : userDetails.name,
            // age  : userDetails.age,
             userDetails,
            changeName,
            fullName,
            firstName,lastName,age,changeAge,firstNameChange,posts
            // user : userrefs
        }
        
    }


//   data() {
//     return {
//       userName: "Govardhan Reddy"
//     };
//   },
//   mounted() {
//     setTimeout(() => {
//       this.userName = "Gppi Reddy";
//       console.log(this.userName);
//     }, 3000);
//   }
};
</script>

<style scoped>
.title{
    background-color: antiquewhite
}
</style>
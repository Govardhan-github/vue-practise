<template>
    <div>
        <div>
            <h4>User Details</h4>
            <ul> name is : {{user.name}}</ul>
            <ul>age is : {{userDetails.age}}</ul> <br>
            <button @click.prevent="changeName">Change Name</button>
             </div>
            <div>
                <input type="text" ref="ageref" />
                <button @click="changeAge">change Age</button><br>
                <button @click="chnageFirstName">Change Fist Name</button>
            </div>
            <h4>post from parent</h4>
            <div class="posts">
              
            </div>
    </div>
</template>

<script>
import { reactive,ref } from "vue";
export default {
  props:{
    userDetails :{
      required:true
    },
   
  },
  setup(props,context) {
      console.log(context.attrs);
      let ageref = ref(null)
    const user = reactive(props.userDetails);
    function changeName() {
      user.name = "changed to gopii";
    }
    function changeAge(){
        user.age = ageref.value.value
        console.log(ageref.value.value);
    }
    function chnageFirstName(){
        context.emit('change-first-name' , 'emited changed name')
    }
    console.log(props.userDetails);

    return {
      changeName,
      user,ageref,changeAge,chnageFirstName
    };
  }
};
</script>

<style scoped>
</style>
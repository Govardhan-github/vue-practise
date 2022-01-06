<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item" v-if="isAuthenticated" >
        <router-link class="nav-link" to="/">Home</router-link>

      </li>
      <li class="nav-item" v-if="isAuthenticated" >
          <router-link class="nav-link" to="/counter">Counter</router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated">
        <router-link class="nav-link" to="/signup">SignUp</router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated">
        <router-link class="nav-link" to="/posts">Posts</router-link>
      </li>
      <a href="#" class="nav-link"  v-if="isAuthenticated" @click.prevent="onLogOut()">LogOut</a>
      
      <li class="nav-item" v-if="isAuthenticated">
        <router-link class="nav-link" to="/capi">cAPI</router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated">
        <router-link class="nav-link" to="/props">cAPI</router-link>
      </li>
    
    </ul>
  </div>
</nav>
    </div>
</template>

<script>
import { IS_USER_AUTHENTICATED_GETTER,LOGOUT_ACTION } from "../Store/storeConstants";
import { mapGetters, mapActions } from "vuex";

    export default {
      computed:{
        ...mapGetters('auth',{
          isAuthenticated : IS_USER_AUTHENTICATED_GETTER
        })
      },

      methods: {
        ...mapActions('auth' , {
          logout : LOGOUT_ACTION
        }),
        onLogOut() {
          console.log(this.logout);
          this.logout();
          this.$router.replace('/login')
        }
      },
        
    }
</script>

<style scoped>

</style>
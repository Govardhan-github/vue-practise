<template>
<navigation />
<TheLoader  v-if="showLoading" />
  <router-view></router-view>
</template>

<script>
import navigation from './components/navigation.vue'
import TheLoader from './components/TheLoader.vue'
import { mapState } from 'vuex';
 import { AUTO_LOGIN_ACTION } from './Store/storeConstants'

export default {
  name: 'App',
  components: {
    navigation,
    TheLoader
  },
  computed: {
    ...mapState({
      showLoading: state => state.showLoading
    })
  },
  created() {
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`)
  },
  methods: {
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

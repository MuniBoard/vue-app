<template>
  <div id="app">
    <nav-menu/>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import {healthCheck} from './api/base'

export default {
  name: 'App',
  data: () => {
    return {
      isAPIUp: false,
      crumbs: ['Home'],
    };
  },
  components: {
    "nav-menu": Navigation,
  },
  async mounted () {
    this.isAPIUp = await healthCheck();
    if(!this.isAPIUp) {
      this.$router.push({name: 'APIDown'});
    }
  }
}
</script>
<style>
  .subject, .subjectcreation{
    border-bottom: solid thin rgba(0, 0, 0, 0.125);
  }

  .subject, .subjectcreation, .subsubject {
    margin-top: 5px;
    padding-top: 5px;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
  
  .subsubjectentry > * {
    margin-left: 2%;
  }

  .subjectcreation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: min-content;
    width: min-content;
  }

  .subsubjectentry > :nth-child(1) {
    margin-left: 0%;
  }
</style>

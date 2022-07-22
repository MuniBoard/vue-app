<template>
    <div class="nav-menu">
        <span v-for="(crumb, crumbId) in $store.state.breadcrumbs" :key="crumbId">
            <span v-if="$store.state.breadcrumbs.length - 1 === crumbId">
                {{crumb.name}}
            </span>
            <span v-else>
                <router-link :to="crumb" @click="goToBreadCrumb(crumb)" >
                    {{crumb.name}}
                </router-link>
                <span > > </span>
            </span>
        </span>
    </div>
</template>
<script>
export default {
  name: "navigation-menu",
  watch: {
    $route (to, from) {
        if(to.name === "APIDown" || to.name === from.name)
            return;

        const toIndex = this.$store.state.breadcrumbs.findIndex((other) => other.name === to.name );
        
        if(toIndex !== -1)
            return;

        this.$store.commit('addBreadcrumb', to);
    }
  },
  methods: {
    goToBreadCrumb(crumb) {
        this.$store.commit('removeBreadcrumb', crumb);
        this.$router.push(crumb);
    }
  },
  mounted() {
    this.$store.commit('initBreadcrumbs');
  }
}
</script>
<style scoped>
    .nav-menu {
        border-bottom: solid thin rgba(0, 0, 0, 0.125);
        margin-bottom: 10px;
        padding-bottom: 10px;
    }
</style>
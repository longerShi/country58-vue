<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbar-item link="/layout/home">
        <img slot="icon" src="../../assets/images/icon_nav_button.png">
        <span slot="label">TECH</span>
      </tabbar-item>
      <tabbar-item link="/layout/profile">
        <img slot="icon" src="../../assets/images/icon_nav_button.png">
        <span slot="label">ME</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: "layout",
    components: {
      Tabbar, TabbarItem
    }
  }
</script>

<style scoped>

</style>

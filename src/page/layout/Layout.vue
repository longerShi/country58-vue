<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <tabbar :style="position">
      <tabbar-item link="/home">
        <img slot="icon" src="../../assets/images/icon_nav_button.png">
        <span slot="label">TECH</span>
      </tabbar-item>
      <tabbar-item link="/profile">
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
    },
    data() {
      return {
        position: "position: fixed"
      }
    }
  }
</script>

<style scoped>

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .2s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }

</style>

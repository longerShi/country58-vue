<template>
  <div>
    <div class="profile-header">
      <div class="head-img-link">
        <router-link to="profile/userInfo">
          <img class="head-img" src="http://cangdu.org:8001/img/default.jpg"/>
        </router-link>
        <p>wenlong</p>
      </div>
    </div>
    <group>
      <cell-box is-link>
        AAAAA
      </cell-box>
      <cell-box is-link>
        BBBBB
      </cell-box>
      <cell-box is-link>
        CCCCC
      </cell-box>
    </group>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { CellBox,Group } from 'vux'
  export default {
    components: {
      Group, CellBox
    },
    name: "profile"
  }
</script>

<style scoped>
  .profile-header {
    text-align: center;
    background: #3190e8;
  }
  .head-img-link{
    align-items: center;
    background: #3190e8;
    padding: 3.6rem .6rem;
  }
  .head-img {
    display: inline-block;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
  }

  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>

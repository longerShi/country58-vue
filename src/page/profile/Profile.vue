<template>
  <div>
    <div class="profile-header">
      <div class="head-img-link">
        <img link="" class="head-img" src="http://cangdu.org:8001/img/default.jpg"/>
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
  </div>
</template>

<script>
  import { CellBox,Group } from 'vux'
  export default {
    components: {Group, CellBox},
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
</style>

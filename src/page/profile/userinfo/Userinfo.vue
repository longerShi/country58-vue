<template>
  <div class="user-info">
    <x-header>用户信息</x-header>
  </div>
</template>

<script>
    import { XHeader } from "vux";

    export default {
      components: {
        XHeader
      },
      name: "userinfo"
    }
</script>

<style scoped>
  .user-info {
    width: 100%;
    position: absolute;
    z-index: 2222;
    height: 100%;
    top: 0px;
    background: white;
  }
</style>

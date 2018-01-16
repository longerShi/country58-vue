<template>
  <div>
    <x-header :left-options="{showBack: false}">登陆</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="手机号" name="phone" keyboard="number"></x-input>
      <x-input title="密码" type="password"></x-input>
    </group>
    <x-button type="primary" plain class="log-in">登陆</x-button>
  </div>
</template>

<script>
  import { XHeader, Group, XInput, XButton } from "vux";

  export default {
    name: "login",
    components: {
      XHeader, Group, XInput, XButton
    }
  }
</script>

<style scoped>
  .log-in{
    width: 60%;
    margin-top: 10px
  }
</style>

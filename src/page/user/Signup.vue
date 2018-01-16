<template>
  <div>
    <x-header :left-options="{showBack: false}">注册</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="手机号" name="phone" placeholder="" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="验证码" class="weui-vcode" max="4" keyboard="number">
        <x-button slot="right" type="primary" mini plain>发送验证码</x-button>
      </x-input>
      <x-input title="密码" type="password" placeholder="" :min="6" ></x-input>
      <x-input title="确认密码" type="password" placeholder=""></x-input>
    </group>
    <x-button type="primary" plain class="sign-up">注册</x-button>
  </div>
</template>

<script>
  import { XHeader, Group, XInput, XButton } from "vux";

  export default {
    name: "signUp",
    components: {
      XHeader, Group, XInput, XButton
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  .sign-up{
    width: 60%;
    margin-top: 10px
  }
</style>

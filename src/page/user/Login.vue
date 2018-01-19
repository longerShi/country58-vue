<template>
  <div>
    <x-header :left-options="{showBack: false}">登陆</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="手机号" v-model="phone" type="number" keyboard="number"></x-input>
      <x-input title="密码" v-model="password" type="password"></x-input>
    </group>
    <x-button type="primary" plain class="log-in" action-type="button" @click.native="login()">登陆</x-button>
  </div>
</template>

<script>
  import { XHeader, Group, XInput, XButton } from "vux";
  import Api from '@/server/api';
  import { toast } from '@/server/utils';

  export default {
    name: "login",
    components: {
      XHeader, Group, XInput, XButton
    },
    data() {
      return {
        phone: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        var self = this;
        if (this.phone == '' || this.password == '') {
          toast(this, 'warn', '手机号/密码不能为空！');
          return;
        }
        Api.login(this.phone, this.password).then(
          function (value) {
            if (value.user) {
              self.$router.push({
                path: 'home'
              });
            } else {
              toast(self, 'warn', '手机号/密码错误！');
            }
          },function (error) {
            console.log(error);
          }
        )
      }
    }
  }
</script>

<style scoped>
  .log-in{
    width: 60%;
    margin-top: 10px
  }
</style>

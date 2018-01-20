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
  import {mapState, mapMutations} from 'vuex'


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
      ...mapMutations([
        'SET_USER_INFO'
      ]),

      async login() {
        if (this.phone == '' || this.password == '') {
          toast(this, 'warn', '手机号/密码不能为空！');
          return;
        }
        let value = await Api.login(this.phone, this.password)
        if (value.user) {
          this.SET_USER_INFO(value.user);
          this.$router.push({
            path: 'home'
          });
          // this.$router.go(-1); //登陆成功之后返回上一页
        } else {
          toast(this, 'warn', '手机号/密码错误！');
        }
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

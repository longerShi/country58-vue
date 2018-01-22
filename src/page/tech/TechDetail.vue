<template>
  <div class="rating-page">
    <x-header>技工信息</x-header>
    <div class="profile-header">
      <div class="head-img-link">
        <img class="head-img" :src="headImg"/>
        <p>{{techName}}</p>
      </div>
    </div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <cell title="住址" :value="address" value-align="left"></cell>
      <cell title="手机号" :value="phone" value-align="left"></cell>
      <cell title="平均评分" value-align="left">
        <rater v-model="score" :max="5" active-color="#04BE02" disabled :font-size="15"></rater>
      </cell>
      <cell title="服务人次" :value="serviceCnt" value-align="left"></cell>
    </group>
  </div>
</template>

<script>
  import { XHeader, Panel, Group, Cell, Rater } from "vux";
  import Api from '../../server/api'

  export default {
    components: {
      Group,
      XHeader,
      Panel,
      Cell,
      Rater
    },
    name: "tech-detail",
    data() {
      return {
        techName: "",
        headImg: "",
        address: "xxxxx",
        phone: "1111",
        score: 3.4, //TODO 这里的两个数据暂时写死
        serviceCnt: "10"
      }
    },
    created() {
      var self = this;
      Api.getTechUser(this.$route.params.id).then(
        function (value) {
          console.log(value)
          self.techName = value.techUser.techName;
          self.headImg = value.techUser.headImg;
          self.address = value.techUser.address;
          self.phone = value.techUser.phone;
        },function (error) {

        }
      )
    }
  }
</script>

<style scoped>
  .rating-page {
    width: 100%;
    position: absolute;
    z-index: 222;
    height: 100%;
    top: 0px;
    background: white;
  }
  .profile-header {
    text-align: center;
  }
  .head-img-link{
    align-items: center;
    background: #3190e8;
    padding: .6rem .6rem;
  }
  .head-img {
    display: inline-block;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
  }
</style>

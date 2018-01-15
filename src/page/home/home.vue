<template>
  <div>
    <div style="background-color: #FFFFFF">
      <grid :cols="4">
        <grid-item link="/tech" v-for="i in 8" :key="i">
          <img slot="icon" src="../../assets/images/icon_nav_button.png">
          <span slot="label">button</span>
        </grid-item>
      </grid>
    </div>
    <panel  v-if="list" :header="header" :list="list" :type="type"></panel>
  </div>
</template>

<script>
  import {Grid, GridItem, GroupTitle, Panel} from 'vux'
  import Api from '../server/api'

  export default {
    name: 'home',
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Panel
    },
    data () {
      return {
        header: 'tech list',
        list: [],
        type: '5'
      }
    },

    created() {
      var self = this;
      Api.getTechList().then(
        function(value) {
          console.log(value)
          value.techs.forEach(function(data) {
            self.list.push({
              src: data.headImg,
              title: data.techName,
              desc: data.address,
              url: {
                path: '/component/radio',
                replace: false
              },
              meta: {
                // source: '来源信息',
                date: data.phone,
                other: data.techType
              }
            });
          });
        }, function(error) {
          // failure
        });
    }

  }
</script>


<style>

</style>


<template>
  <div>
    <div style="background-color: #FFFFFF">
      <grid :cols="4">
        <grid-item link="/techs" v-for="i in 8" :key="i">
          <img slot="icon" src="../../assets/images/icon_nav_button.png">
          <span slot="label">button</span>
        </grid-item>
      </grid>
    </div>
    <panel :header="header" :list="techList" :type="type"></panel>
    <div @click="loadMoreTechUsers()">
      <load-more :show-loading="showLoading" :tip="loadMoreTip"></load-more>
    </div>

  </div>
</template>

<script>
  import {Grid, GridItem, GroupTitle, Panel, LoadMore} from 'vux'
  import Api from '@/server/api'

  export default {
    name: 'home',
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Panel,
      LoadMore
    },
    data () {
      return {
        showLoading: false,
        loadMoreTip: '加载更多',
        header: 'tech list',
        techList: [],
        type: '5'
      }
    },

    created() {
      this.getTechs();
    },
    methods: {
      loadMoreTechUsers: function () {
        this.showLoading = true;
        this.loadMoreTip = '正在加载';
        this.getTechs();
      },

      getTechs: function () {
        var self = this;
        Api.getTechList().then(
          function(value) {
            value.techUsers.forEach(function(data) {
              self.techList.push({
                src: data.headImg,
                title: data.techName,
                desc: data.address,
                url: {
                  path: '/techs/'+data.id,
                  replace: false
                },
                meta: {
                  // source: '来源信息',
                  date: data.phone,
                  other: data.techType
                }
              });
            });
            self.showLoading = false;
            self.loadMoreTip = '加载更多';
          }, function(error) {
            // failure
          });
      }

    }
  }
</script>


<style>

</style>


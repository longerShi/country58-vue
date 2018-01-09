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
    <panel :header="header" :list="list" :type="type"></panel>
  </div>
</template>

<script>
  import {Grid, GridItem, GroupTitle, Panel} from 'vux'

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
        header: 'header',
//        footer: {url: 'url', title: 'title'},
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        type: '5'
      }
    }
  }
</script>


<style>
  .icon {
    display: inline-block;
    width: 28px;
    height: 28px;
    vertical-align: middle;
  }

  .icon_button {
    background: url(../../assets/images/icon_nav_button.png) no-repeat;
    background-size: 28px 28px;
  }

  .icon_cell {
    background: url(../../assets/images/icon_nav_cell.png) no-repeat;
    background-size: 28px 28px;
  }

  .icon_toast {
    background: url(../../assets/images/icon_nav_toast.png) no-repeat;
    background-size: 28px 28px;
  }
</style>


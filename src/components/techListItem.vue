<template>
  <div class="weui_panel">
    <router-link to="/" v-for="item in techInfoList">
      <div class="weui_panel_bd">
        <div class="weui_media_box weui_media_text">
          <h4 class="weui_media_title">{{item.title}}</h4>
          <p class="weui_media_desc">{{item.desc}}</p>
          <ul class="weui_media_info">
            <li class="weui_media_info_meta">{{item.comeFrom}}</li>
            <li class="weui_media_info_meta">{{item.date}}</li>
            <li class="weui_media_info_meta weui_media_info_meta_extra">{{item.other}}</li>
          </ul>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
  export default{
    name: 'techListItem',
    data() {
      return {
        techInfoList: [{
          'title': '标题一',
          'desc': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          'comeFrom': '文字来源',
          'date': '时间',
          'other': '其它信息'
        }, {
          'title': '标题二',
          'desc': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          'comeFrom': '文字来源',
          'date': '时间',
          'other': '其它信息'
        }, {
          'title': '标题三',
          'desc': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          'comeFrom': '文字来源',
          'date': '时间',
          'other': '其它信息'
        }, {
          'title': '标题四',
          'desc': '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          'comeFrom': '文字来源',
          'date': '时间',
          'other': '其它信息'
        }]
      }
    }
  }
</script>

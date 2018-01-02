<template>
  <div>
    <div class="weui_grids" style="background-color: #FFFFFF">
      <router-link to="/tech" class="weui_grid">
        <div class="weui_grid_icon">
          <i class="icon icon_button"></i>
        </div>
        <p class="weui_grid_label">
          Button
        </p>
      </router-link>
      <router-link to="/tech" class="weui_grid">
        <div class="weui_grid_icon">
          <i class="icon icon_cell"></i>
        </div>
        <p class="weui_grid_label">
          Cell
        </p>
      </router-link>
      <router-link to="/tech" class="weui_grid">
        <div class="weui_grid_icon">
          <i class="icon icon_toast"></i>
        </div>
        <p class="weui_grid_label">
          Toast
        </p>
      </router-link>
      <router-link to="/tech" class="weui_grid">
        <div class="weui_grid_icon">
          <i class="icon icon_button"></i>
        </div>
        <p class="weui_grid_label">
          Button
        </p>
      </router-link>
      <router-link to="/tech" class="weui_grid">
        <div class="weui_grid_icon">
          <i class="icon icon_cell"></i>
        </div>
        <p class="weui_grid_label">
          Cell
        </p>
      </router-link>
      <router-link to="/tech" class="weui_grid">
        <div class="weui_grid_icon">
          <i class="icon icon_toast"></i>
        </div>
        <p class="weui_grid_label">
          Toast
        </p>
      </router-link>
    </div>
    <div class="weui_panel">
      <div class="weui_panel_hd">文字列表附来源</div>
      <tech-list-item/>
    </div>
  </div>
</template>

<script>
  import techListItem from '../../components/techListItem.vue'

  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components: {
      techListItem
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


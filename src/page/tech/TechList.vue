<template>
  <div>
    <x-header>所有技工</x-header>


    <group>
      <div style="width: 50%;float: right">
        <cell
          title="智能排序"
          is-link
          :border-intent="false"
          :arrow-direction="showOrder ? 'up' : 'down'"
          @click.native="showOrder = !showOrder"></cell>
      <!--<p class="slide" :class="showOrder ? 'animate' : ''">离我最近<br/>评分最高<br/>服务人次</p>-->
      </div>
      <div style="width: 50%">
        <cell
          title="技工种类"
          is-link
          :border-intent="false"
          :arrow-direction="showOrderByTechType ? 'up' : 'down'"
          @click.native="showOrderByTechType = !showOrderByTechType"></cell>
      </div>
    </group>

    <checklist class="order-checklist" v-if="showOrder" title="" :options="orderOptions" v-model="orderValue" :max="1" @on-change="change"></checklist>
    <checklist class="order-checklist" v-if="showOrderByTechType" title="" :options="orderTechTypeOptions" v-model="orderTechType" :max="1" @on-change="change"></checklist>

    <panel :list="techList" type="5"></panel>

    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { Group, XHeader, Cell, Checklist, Panel } from 'vux'
  import Api from '@/server/api'

  export default {
    name: "tech-list",
    components: {
      Group,
      XHeader,
      Cell,
      Checklist,
      Panel
    },
    data() {
      return {
        showOrder: false,
        showOrderByTechType: false,
        orderValue: [''],
        orderTechType: [''],
        orderOptions: ['离我最近', '评分最高', '服务人次'],
        orderTechTypeOptions: ['电工', '木匠', '厨师'],
        techList: []
      }
    },
    created() {
      this.getTechs();
    },
    methods: {
      change (val, label) {
        console.log('change', val, label)
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

<style scoped>

  .order-checklist {
    z-index: 99999;
    position: absolute;
    width: 100%;
    height: 90%;
  }

  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }


</style>

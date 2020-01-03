<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/01.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/02.png" alt="">
        <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/01.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/02.png" alt="">
        <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/01.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/02.png" alt="">
        <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/01.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/02.png" alt="">
        <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar';
import TabBarItem from './components/tabbar/TabBarItem';
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
    @import url("./assets/css/base.css");
</style>

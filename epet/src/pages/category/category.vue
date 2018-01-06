<template>
  <div>
   <div class="allkind">
     <header class="clearfix rela top bgfff">
       <div id="1" class="fl sort nav-sort ft13 bold" :class="{cur: isActive}" @click="changeActive(true)">
         <router-link to="/category/tab1"><span>分类</span></router-link>
       </div>

       <div id="2" class="fl brand nav-sort ft13 bold" :class="{cur: !isActive}" @click="changeActive(false)">
         <router-link to="/category/tab2"><span>品牌</span></router-link>
       </div>

       <a href="javascript:;">
         <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="abs search">
       </a>
     </header>
   </div>

    <router-view></router-view>

  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        isActive: true
      }
    },

    methods: {
      changeActive (isActive) {
        this.isActive = isActive;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color #f3f4f5
  .bold
    font-weight: 700;
  .ft13
    font-size 13px
  .top
    padding: 0 15px;
    border-bottom: 1px solid #cbcbcb;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    z-index: 11;
    background: #fff;
    .nav-sort
      width: 50%;
      height: 40px;
      line-height: 40px;
      span
        display: inline-block;
        height: 40px;
        padding: 0 4px;
        cursor: pointer;
    .cur
      span
        color: #ed4044;
        border-bottom: 2px solid #ed4044;
    .sort
      text-align: right;
      padding-right: 5%;
    .brand
      padding-left: 5%;

    .search
      position: absolute;
      top: 13px;
      right: 15px;
      width: 14px;
      height: 14px;

</style>

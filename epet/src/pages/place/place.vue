<template>
  <div>
    <div class="wap-top-bar">
      <header class="ftc head-top bgfff rela">
        <div>
          <router-link to="/main" class="aback"></router-link>
          <span class="topbar-title">选择收货地区</span>
          <span class="pull-right Jbur ml" @click="isShow = !isShow"></span>
        </div>
      </header>
      <div class="header-quick" v-show="isShow">
        <router-link to="/main">
          <span class="icon1"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/category">
          <span class="icon2"></span>
          <p>商品分类</p>
        </router-link>
        <router-link to="/cart">
          <span class="icon4" id="getCartNum"><em>0</em></span>
          <p>购物车</p>
        </router-link>
        <router-link to="login">
          <span class="icon5"></span>
          <p>我的e宠</p>
        </router-link>
      </div>
    </div>



    <div class="myAddressBox">
      <div class="pad10 cat-dog">
        <a href="javascript:;" class="fl db" type="cat">
          <span class="db ml10 mr10 round30 ftc pt5 pb5">猫猫站</span>
        </a>
        <a href="javascript:;" class="fl db on" type="dog">
          <span class="db ml10 mr10 round30 ftc pt5 pb5">狗狗站</span>
        </a>
        <a href="javascript:;" class="fl db" type="fish">
          <span class="db ml10 mr10 round30 ftc pt5 pb5">水族站</span>
        </a>
      </div>


      <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
    </div>

  </div>
</template>

<script type="text/javascript">
  import PubSub from 'pubsub-js'
  import VDistpicker from 'v-distpicker'
  export default {
    data () {
      return {
        isShow: false,
      }
    },

    components: {
      VDistpicker
    },

    methods: {
      onSelected (data) {
//        console.log(data);
        PubSub.publish('city', data.city);
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .head-top
    color: #333
    height: 50px;
    line-height: 50px;
    position: relative;
    padding: 0 10px;
    border-bottom: 1px solid #f3f3f3;
    font-size 18px
    .aback
      background: url("./img.png") no-repeat
      background-size: 234px 159px;
      height: 18px;
      width: 11px;
      background-position: -201px -10px;
      position: absolute;
      margin-top: 15px;
      left: 10px;
    .topbar-title
      width: 90%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      margin: 0 auto;
    .Jbur
      background: url("img.png") no-repeat;
      background-size: 234px 163px;
      height: 18px;
      width: 17px;
      background-position: -217px -10px;
      position: absolute;
      top: 0;
      right: 10px;
      outline: 0;
      margin-top: 14px;

  .header-quick a span.icon1, .header-quick a span.icon2, .header-quick a span.icon4, .header-quick a span.icon5
    background: url("img.png") no-repeat;
    background-size: 234px 163px;
    height: 25px;
    width: 25px;
    margin: 0 auto;

  .header-quick
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d7d7d7;
    overflow: hidden;
    padding: 10px 0;
    a
      display: inline-block;
      width: 25%;
      text-align: center;
      float: left;
      color: #333;
      p
        color: #666;
        font-size: 14px;
        text-align: center;
      span
        display: block
      .icon1
        background-position: -172px -7px !important;
      .icon2
        background-position: -172px -49px !important;
      .icon4
        background-position: -172px -90px !important;
        em
          display: inline-block;
          height: 22px;
          width: 22px;
          color: #fff;
          text-align: center;
          line-height: 18px;
          font-size: 12px;
          background: red;
          border-radius: 11px;
          border: #fff solid 2px;
          position: relative;
          top: -18px;
          left: 15px;
      .icon5
        background-position: -172px -133px !important;
  .cat-dog
    overflow hidden
    background-color #f5f5f5
    a
      width:33.3%
      span
        background: #b9b9b9;
        color: #666;
        border-radius: 5px;
        font-size: 15px;
    .on
      span
        background: #ff0000;
        color: #fff;

  .distpicker-address-wrapper
    color: #333
    font-size 14px

  /**/
</style>

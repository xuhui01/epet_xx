<template>
  <div>

    <div class="overflow xiazaiApp" style="display: block;" v-show="isShow">
      <div class="overflow rela">
        <span class="clsoebtn" @click="hiddenTop">
          <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
        </span>
        <div class="appdowimg">
          <a href="javascript:;" style="display: block;">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water">
          </a>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="indexnavcon" ref="headerTop">
        <!--上半部搜索区-->
        <div class="clearfix pt5 pl10 pr10 pb5">
          <div class="epet-search bgf">
            <div class="fl rela ft14 location">

              <router-link to="/place">
                <span class="catordog c89">狗狗站</span>
                <span class="c89">|</span>
                <span data-name="my-place" class="myposition c89 ft13">{{city.value}}</span>
                <i></i>
              </router-link>

            </div>

            <p class="search-text">
              <a href="javascript:;">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                <span class="eico serach-ico"></span>
              </a>
            </p>

            <a href="javascript:;" class="epet-category">
              <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
            </a>
          </div>
        </div>
        <!--下半部分-->
        <div class="find_nav">
          <div class="find_nav_left dscroll">
            <div class="find_nav_list dscroll-div">
              <ul class="dscroll-ul">
                <li class="dscroll-li" v-for="(menu, index) in menus" :key="index">
                  <a href="javascript:;">
                    <span class="rela">
                      <span>{{menu.menu_name}}</span>
                      <i></i>
                    </span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </div>

      <div class="allmodule module" ref="allmodule">
        <!--轮播图-->
        <carouse :images="images" :height="'160px'" />

        <!--专栏列表-->
        <column :columnDatas="columnDatas" />

        <!--分隔线-->
        <xline />

        <!--新人专享-->
        <carouse :images="xinrenImg" :height="'120px'"/>

        <!--每日疯抢-->
        <fengqiang />
        <xline />

        <!--折扣-->
        <currency :imageData="ad1" />
        <xline />

        <!---->
        <currency :imageData="ad2" />
        <xline />

        <!--潮品视频-->
        <custom :customData="ad3"/>
        <videoItem :videoData="ad4" />
        <xline />

        <!--品牌特卖-->
        <custom :customData="ad5"/>
        <carouse :images="ad6" :height="'160px'"/>
        <xline />

        <currency :imageData="ad7" />
        <xline />

        <currency :imageData="ad8" />
        <xline />

        <currency :imageData="ad9" />
        <xline />

        <currency :imageData="ad10" />
        <xline />

        <currency :imageData="ad11" />
        <xline />

        <currency :imageData="ad12" />
        <xline />

        <currency :imageData="ad13" />
        <xline />

        <currency :imageData="ad14" />
        <xline />

        <currency :imageData="ad15" />
        <xline />

        <currency :imageData="ad16" />
        <xline />

        <!--体验馆-->
        <custom :customData="ad17"/>
        <carouse :images="ad18" :height="'160px'" />
        <xline />

        <!--萌宠说-->
        <custom :customData="ad19"/>
        <videoItem :videoData="ad20" />
        <xline />

        <!--小剧场-->
        <custom :customData="ad21"/>
        <videoItem :videoData="ad22" />
        <xline />
        <currency :imageData="ad23" />


        <div class="wap-footer-bar" style="display: block;">
          <div class="footer" style="display: block;">
            <div class="ft">
              <span class="bt" title="触屏版">触屏版</span>
              <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
              <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
              <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
            </div>
            <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
          </div>
        </div>

        <br>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
  import carouse from '../../components/carousel/carousel.vue'
  import column from '../../components/column/column.vue'
  import xline from '../../components/xline/xline.vue'
  import fengqiang from '../../components/fengqiang/fengqiang.vue'
  import currency from '../../components/currency/currency.vue'
  import custom from '../../components/custom/custom.vue'
  import videoItem from '../../components/videoItem/videoItem.vue'
  import xinrenzhuanxiang from './xinrenzhuanxiang.gif'
  export default {
    components: {
      carouse,
      column,
      xline,
      fengqiang,
      currency,
      custom,
      videoItem
    },

    data () {
      return {
        isShow: true,
        xinrenImg: [{image:xinrenzhuanxiang}],
        city: {value: "北京市"}
      }
    },

    computed: {
      ...mapState(['menus', 'datas', 'images', 'columnDatas', 'ad1', 'ad2', 'ad3', 'ad4', 'ad5', 'ad6',
        'ad7', 'ad8', 'ad9', 'ad10', 'ad11', 'ad12', 'ad13', 'ad14', 'ad15', 'ad16', 'ad17', 'ad18',
        'ad19', 'ad20', 'ad21', 'ad22', 'ad23'])
    },

    mounted () {
      this.$store.dispatch('requesthome');

      PubSub.subscribe('city', (msg, city) => {
        this.city = city;
      })
    },

    methods: {
      // 去掉头部的广告
      hiddenTop () {
        this.isShow = !this.isShow;
        this.$refs.headerTop.style.top = '0px';
        this.$refs.allmodule.style.paddingTop = '86px';
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*body
    background-color #fff*/
  .xiazaiApp
    max-width 640px
    margin 0 auto
    background: rgba(61, 61, 61, 1);
    color: #fff;
    /*position: relative;
    z-index: 102;*/
    position: fixed;
    top: 0;
    left: 0
    z-index: 100;
    width: 100%;
    .rela
      position: relative
      .clsoebtn
        display: inline-block;
        width: 5%;
        margin-right: 2%;
        vertical-align: middle;
        position: absolute;
        top: 20%;
        left: 2%;
        img
          height: 100%;
          width: 100%;
      .appdowimg
        img
          width 100%

  .main
    max-width 640px
    margin 0 auto
    .indexnavcon
      height 86px
      background: #fff;
      position: fixed;
      top: 55px
      left: 0;
      z-index: 100;
      width: 100%;
      .clearfix
        .epet-search
          /*padding: 8px 0;*/
          background: #fff;
          text-align: center;
          display: -webkit-box;
          -webkit-box-align: center;
          display: -moz-box;
          -moz-box-align: center;
          width: 100%;
          .location
            margin-right: 20px;
            a
              display: inline
            i
              position: absolute;
              top: 10px;
              right: -11px;
              border-width: 4px;
              font-size: 0;
              line-height: 0;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent;
          .search-text
            position: relative;
            -webkit-box-flex: 1;
            input
              width: 100%;
              border: 0;
              height: 25px;
              background: #e9e9e9;
              border-radius: 4px;
              color: #bcbcbc;
              text-indent: 10px;
              font-size: 13px;
              outline: 0;
            .serach-ico
              background: url("./search.png") no-repeat;
              background-size: 11px auto;
              background-position: 0 0;
              width: 11px;
              height: 11px;
              position: absolute;
              right: 5px;
              top: 5px;
              bottom: 0;
              margin: auto 0;
          .epet-category
            display: block;
            img
              width: 25px;
              margin-left: 10px;
      .clearfix:after
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    .allmodule
      padding-top: 141px;

  .find_nav
    width: 100%;
    height: 35px;
    min-width: 320px;
    .dscroll
      overflow-x: auto;
      overflow-y: hidden;
      .dscroll-div
        width: 140%;
        .dscroll-ul
          white-space: nowrap;
          display: flex;
          .dscroll-li
            float: left;
            width: 20%
            a
              display: block;
              width: 100%;
              height: 100%;
              line-height: 36px;
              font-size: 14px;
              text-align: center;
              color: #666;
            i
              position: absolute;
              bottom: 1px;
              left: -10%;
              width: 120%;
              height: 2px;


  .footer
      padding-bottom: 0;
      margin: 1em 0 0;
      background: #fff;
      clear: both;
      .ft
        font-size: 14px;
        padding: 15px 0 5px;
        text-align: center;
        .bt
          color: red;
        span
          padding-right: 10px;
          a
            display: inline
  /*.footernav_ul
    .index-a a
      background-position: 0 0;
    .type-a a
      background-position: -85px -41px;*/
</style>

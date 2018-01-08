<template>
  <div>
    <div class="surprise_day">
      <div class="surprise-tit clearfix pad10 rela overflow">
        <div class="fl titimg">
          <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png">
        </div>
        <div class="fl ft13 ml10" style="margin-top: 1px;">{{discountData.title}}</div>
        <div class="time ftc fl ml5">
          <div class="time1 clearfix ft12 dtime">
            <span class="time1-1">00</span>
            <span class="time-zi ft12">:</span>
            <span class="time1-1">00</span>
            <span class="time-zi ft12">:</span>
            <span class="time1-1">00</span>
          </div>
        </div>
        <div class="more">
          <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0" class="db ftr">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/10/bc4f0db8483e9084f5923cb92bfe2b7a.jpg">
          </a>
        </div>
      </div>

      <div class="surprise-pro pl5 mb10">
        <div class="swiper-container surprise-scroll swiper-container-horizontal">
          <div class="dscroll">
            <ul>
              <li v-for="(good, index) in discountData.goods" :key="index">
                <div class="pro-block">
                  <a href="javascript:;">
                    <div class="thispro-img loadimg-nofixed">
                      <img class="image" :src="`${good.image.image}@!300w-b`" lazy="loaded">
                      <!----> <!---->
                    </div>
                    <div class="cred ftc mt5">
                      <span class="ft12">¥</span>
                      <span class="ft14">{{good.sale_price}}</span>
                    </div>
                    <p class="c999 ftc ft12">{{good.little_price}}</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  export default {
    data () {
      return {
        discountData: {}
      }
    },

    mounted () {
      let url = '/api/main/fengqiang';
      axios.get(url)
        .then(response => {
          let data = response.data;
          if (data.code === 0) {
            this.discountData = data.data;
          }
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise_day
    background: #ffffff
  .surprise-tit
    .titimg
      img
        height: 24px;
        margin-left: -20px;
    .time
      .time1
        .time1-1
          border: 1px solid #ddd;
          padding: 1px 2px;
          font-size: 13px;
        .time-zi
          margin: 0 3px;
          font-weight: 700;
    .more
      position: absolute;
      top: 2px;
      right: -8px;
      img
        width: 50%;
        margin: 0 0 0 auto;

  .surprise-pro
    .swiper-container
      width: 100%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      .dscroll
        overflow-x: auto;
        overflow-y: hidden;
        ul
          white-space: nowrap;
          display: flex;
          li
            float: left
            width: 98px
            margin-right: 10px
            .pro-block
              margin: 0 .5em;
              a
                display: block
                .loadimg-nofixed
                  background url("./default-epet.png") no-repeat center center #f4f4f4;
                  background-size: 120px auto;
                  position: relative;
                  padding-top: 100%;
                  .image
                    top: 0;
                    left: 0;
                    position: absolute;
  /**/


</style>

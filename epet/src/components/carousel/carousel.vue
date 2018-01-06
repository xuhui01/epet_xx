<template>
  <div>
    <div class="banner_item">
      <div class="swiper-container banner-scroll banner-scroll0 swiper-container-horizontal"
      :style="{height}"
      >

        <mt-swipe :auto="3000">
          <mt-swipe-item v-for="(item, index) in images" :key="index">
            <img :src="item.image">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      images: Array,
      height: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner_item
    min-height: 1px;
    .swiper-container
      width: 100%;
      height: 160px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      img
        height:100%
</style>

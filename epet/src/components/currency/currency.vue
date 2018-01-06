<template>
  <div>
    <div class="currency_ad">
      <div class="currency-adcon dibimg1">
        <div class="titdiv rela">
          <div class="clum-tit"><!---->
            <div class="leftimg2 titclass ftc">
              <a href="">
                <img src="" style="max-height: 73px; max-width: 100%;">
              </a>
            </div>
            <div class="more titclass">
              <!---->
            </div>
          </div>
        </div>

        <div class="divboximg flex">
          <div class="divimg" :style="{width:(1/imageData.length)*100 + '%'}"
               v-for="(items, index) in imageData" :key="index">
            <a v-for="(item, index) in items" :key="index" :href="item.target.param" class="default_bg"
               :style="{height:(item.img_size.substring(4))/2 + 'px'}">
              <img :name="item.img_size" :src="item.image" lazy="loaded">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['imageData']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .divboximg
    display: flex
    .divimg
      .default_bg
        display: block;
        overflow: hidden;
        url("./default-epet.png") no-repeat center center #f4f4f4;
        background-size: 120px auto;
      img
        width 100%
  /**/

</style>

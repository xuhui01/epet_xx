<template>
  <div>
    <div class="custom_tite pt10">
      <div class="titmoudle ftc rela clum-tit pb5">
        <div class="leftimg titclass" v-if="customData.left">
          <img :src="customData.left.img.image">
        </div>
        <div>
          <div>
            <div class="more titclass" v-if="customData.right">
              <a href="javascript:;">
                <img :src="customData.right.img.image">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['customData']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .titmoudle
    background-color: #fff
    img
      max-width: 50%;
      max-height: 73px;
    .leftimg
      img
        margin: 0 auto 0 10px;
    .more
      position: absolute;
      text-align: right;
      right: 0;
      top: 1px;
      img
        max-width: inherit;
        max-height: inherit;
        margin: 0 0 0 auto;
        width: 50%

  /**/
</style>

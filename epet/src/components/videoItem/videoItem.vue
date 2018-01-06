<template>
  <div>
    <div class="cmVideoList cmVideoListIndex">
      <a href="javascript:;">
        <div class="relative imgBox overflow default_bg" v-if="videoData.cover">
          <img :src="videoData.cover.image" lazy="loaded">
          <span class="cmallPlayIco"></span>
        </div>
        <div class="ft12 c999 pad10 ftc">
          <div class="textover c333">{{videoData.title}}</div>
          <div>
            <span class="cmallViewIco mr3"></span>
            <i>{{videoData.visit}}</i>
            <span class="ml10 mr10">|</span>{{videoData.time}}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['videoData']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cmVideoList
    background-color: #fff
    padding: 0
    width: 100%;
    float: none;
    a
      display block
      .default_bg
        background: url("./default-epet.png") no-repeat center center #f4f4f4;
        background-size: 120px auto;
        overflow: hidden;
        img
          width: 100%;
        .cmallPlayIco
          background: url("./play.png") 0 0 no-repeat;
          background-size: contain;
          width: 20px;
          height: 20px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -10px;
          margin-top: -10px;
      .textover
        overflow: hidden;
        white-space: nowrap;
        word-wrap: normal;
        text-overflow: ellipsis;
      .cmallViewIco
        display: inline-block;
        width: 10px;
        height: 9px;
        background: url("./view-black.png") 0 0 no-repeat;
        background-size: contain;
  /**/
</style>

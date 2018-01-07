<template>
  <div>
    <div class="rightbox bgfff scrollbar-none">
      <div class="sort-detail-list">
        <!----> <!---->
        <div class="sort-recom bgfff">
          <div class="hot-recom bbtf3">

            <a href="javascript:;" class="title c999 db ft12 mt10 pl5">{{rightdatas.title}}
              <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png"
                   class="fr arrowL" v-if="ownner != 88888">
            </a>

            <ul class="clearfix">
              <li class="fl mt10" v-for="(item, index) in rightdatas.list" :key="index">
                <a href="javascript:;" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" :src="`${item.photo}@!300w-b`" lazy="loaded">
                  </div>
                  <p class="ftc ft12 mt10 c333">{{item.name}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!--热门品牌-->
        <div class="sort-recom bgfff" v-if="ownner != 88888" style="margin-bottom: 45px;">
          <div class="hot-recom bbtf3" v-if="hotBrand">
            <a href="javascript:;" class="title c999 db ft12 mt10 pl5">{{hotBrand.title}}</a>
            <ul class="clearfix">
              <li class="fl mt10 rela llogo" v-for="(item, index) in hotBrand.list" :key="index">
                <a href="javascript:;">
                <div class="img loadimg-nofixed rela overflow">
                  <img class="lheight image"
                       :src="item.logo"
                       lazy="loaded">
                </div>
                <p class="ftc ft12  mt5">{{item.name}}</p>
                </a>
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
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        rightdatas: {},
        hotBrand: {},
        ownner: 88888
      }
    },

    mounted () {
      PubSub.subscribe('cateid', (msg, cateid) => {
        this.sendAjax(cateid);
      });

      let url = `/api/rightData?owner=${this.ownner}`;
      axios.get(url)
        .then(response => {
          let data = response.data;
          this.rightdatas = data.data.cate_list[0];
        })
    },

    methods: {
      sendAjax (cateid) {
        this.ownner = cateid;
        let url = `/api/rightData?owner=${cateid}`;
        axios.get(url)
          .then(response => {
            let data = response.data;
            this.rightdatas = data.data.cate_list[0];
            this.hotBrand = data.data.cate_list[1];
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rightbox
    margin-left: 75px
    padding-top: 40px;
    .sort-detail-list
      .arrowL
        height: 10px;
        margin-top: 5px;
      .hot-recom
        padding: 15px 5px 20px;
        ul
          li
            width: 33.33%;
            padding: 0 5px;
            p
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 20px;

  .bgfff
    background #fff

  .bbtf3
    border-top: 1px solid #f3f4f5;

  .loadimg-nofixed .image
    top: 0;
    left: 0;
    position: absolute;

  .loadimg-nofixed
    background: url("./default-epet.png") no-repeat center center #f4f4f4;
    background-size: 120px auto;
    position: relative;
    padding-top: 100%;

  .clearfix
    overflow: hidden

  .llogo
    width: 50%!important;
    .img
      border: 1px solid #f3f4f5;
      text-align: center;
      padding: 55px 10px 10px;
      background: url("./default-epet2.jpg") no-repeat center center #fff;
      background-size: 120px auto;

  li.llogo .lheight
    height: 45px;
    max-width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: 10px;



</style>

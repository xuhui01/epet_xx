<template>
  <div>
    <div class="rightbox bgfff scrollbar-none">
      <div class="sort-detail-list">
        <!----> <!---->
        <div class="sort-recom bgfff">
          <div class="hot-recom bbtf3">

            <a href="javascript:;" class="title c999 db ft12 mt10 pl5">{{rightdatas.title}}</a>
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
        rightdatas: {}
      }
    },

    mounted () {
      PubSub.subscribe('cateid', (msg, cateid) => {
        this.sendAjax(cateid);
      });

      let ownner = 88888;
      let url = `/api/rightData?owner=${ownner}`;
      axios.get(url)
        .then(response => {
          let data = response.data;
          this.rightdatas = data.data.cate_list[0];
        })
    },

    methods: {
      sendAjax (cateid) {
        let url = `/api/rightData?owner=${cateid}`;
        axios.get(url)
          .then(response => {
            let data = response.data;
            this.rightdatas = data.data.cate_list[0];
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rightbox
    margin-left: 75px
    padding-top: 40px;
  .bgfff
    background #fff
  .bbtf3
    border-top: 1px solid #f3f4f5;
  .loadimg-nofixed .image
    top: 0;
    left: 0;
    position: absolute;
  .sort-detail-list .hot-recom ul li, .sort-detail-list .other-list ul li
    width: 33.33%;
    padding: 0 5px;
  .loadimg-nofixed
    background: url("./default-epet.png") no-repeat center center #f4f4f4;
    background-size: 120px auto;
    position: relative;
    padding-top: 100%;
  .clearfix
    overflow: hidden

</style>

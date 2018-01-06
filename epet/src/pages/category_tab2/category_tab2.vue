<template>
  <div>
    <div class="brand-list">
      <!---->
      <div class="recom wrapper bgfff" v-for="(brand, index) in brands" :key="index">
        <div class="title ftc c999 ft12">
          <span class="c999">—— {{brand.title}} ——</span>
        </div>
        <div class="list">
          <ul class="clearfix">
            <!---->
            <li class="fl rela" v-for="(item, index) in brand.list" :key="index">
              <a href="javascript:;" class="block">
                <div class="img loadimg-nofixed rela">
                  <img class="db image" :src="item.logo" lazy="loaded">
                </div>
                <p class="name ftc ft13 mt5">{{item.name}}</p>
                <p class="address ftc c999 ft12">{{item.address}}</p>
              </a>
            </li>
          </ul>
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
        brands: []
      }
    },
    mounted () {
      let url = '/api/category/brand/list';
      axios.get(url)
        .then(response => {
          let data = response.data;
          if (data.code === 0) {
            this.brands = data.brand
          }
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.brand-list
  background: #f3f4f5;
  padding-top: 40px;
  .recom
    padding-bottom: 15px;
    margin-bottom: 10px;
    .title
      padding-top: 20px;
    .list
      padding: 0 5px;

      li
        margin-top: 20px;
        width: 33.33%;
        padding: 0 5px;
        box-sizing border-box
        .img
          border: 1px solid #e2e2e2;
          text-align: center;
          padding: 50px 10px 10px;
          background: url("./default-epet2.jpg") no-repeat center center #fff;
          background-size: 120px auto;
          img
            max-width: 90%;
            margin: 10px auto 0;
            height: 40px;
            right: 0;
        .name
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        .address
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
</style>

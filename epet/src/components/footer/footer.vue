<template>
  <div>
    <ul class="clearfix footernav_ul bgfff" ref="footList">
      <li class="index-a" @click="changePosition" ><router-link to="/main" class="db"></router-link></li>
      <li class="type-a dogon" @click="changePosition"><router-link to="/category" class="db"></router-link></li>
      <li class="cart-a" @click="changePosition"><router-link to="/cart" class="db"></router-link></li>
      <li class="myepet-a" @click="changePosition"><router-link to="/login" class="db"></router-link></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      changePosition () {
        if (!event.target.children.length) {
          let lis = this.$refs.footList.children;
          for (let i = 0; i < lis.length; i++) {
            lis[i].children[0].style.backgroundPositionX = '-85px';
          }
          /*lis[0].children[0].style.backgroundPosition = '-85px 0';
          lis[1].children[0].style.backgroundPosition = '-85px -41px';
          lis[2].children[0].style.backgroundPosition = '-85px -81px';
          lis[3].children[0].style.backgroundPosition = '-85px -122px';*/

          event.target.style.backgroundPositionX = '0';
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footernav_ul
    height: 45px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 103;
    border-top: 1px solid #e7e7e7;
    box-sizing: content-box;
    li
      float: left;
      width: 25%;
      height: 55px;
    .index-a a
      background: url('./img.png') no-repeat;
      background-size: 234px 163px;
      margin: 0 auto;
      height: 40px;
      width: 42px;
      margin-top: 2px;
      background-position: 0 0;
      /*background-position: -85px 0;*/
    .type-a a
      background: url('./img.png') no-repeat;
      background-size: 234px 163px;
      margin: 0 auto;
      height: 40px;
      width: 42px;
      margin-top: 2px;
      /*background-position: 0 -40px;*/
      background-position: -85px -41px;
    .cart-a a
      background: url('./img.png') no-repeat;
      background-size: 234px 163px;
      margin: 0 auto;
      height: 40px;
      width: 42px;
      margin-top: 2px;
      background-position: -85px -81px;
    .myepet-a a
      background: url('./img.png') no-repeat;
      background-size: 234px 163px;
      margin: 0 auto;
      height: 40px;
      width: 42px;
      margin-top: 2px;
      background-position: -85px -122px;
</style>

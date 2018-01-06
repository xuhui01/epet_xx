<template>
  <div>
    <div class="columnnavdiv">
      <ul class="hottype">
        <li class="fl" style="width: 20%;" v-for="(item, index) in columnDatas" :key="index">
          <a :href="item.target.param">
            <img :src="item.image" >
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      columnDatas: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .hottype
    padding: 0
    overflow hidden
    img
      width: 100%
</style>

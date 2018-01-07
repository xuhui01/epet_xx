<template>
  <div class="login">
    <header>
      <div class="login_bg">
        <div class="rela ftc head-top">
          <!--返回上一级-->
          <a href="javascript:;" onclick="history.go(-1)" class="aback page-top"></a>
          <div class="zfont ft16 block">
            <a href="javascript:;" class="afff">注册</a>
          </div>
        </div>

        <div class="mlogo">
          <img src="./logo.png">
        </div>

      </div>
    </header>
  </div>
</template>

<script type="text/javascript">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    font: 62.5% 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
    background: #f5f5f5;
    color: #333;
    line-height: 20px;
    min-width: 320px;
    .login_bg
      background: url("./login_bg.png") no-repeat;
      background-size: 100% 100%;
      .head-top
        height: 50px;
        line-height: 50px;
        position: relative;
        padding: 0 1em;
        border-bottom: 0;
        .aback
          background: url("personal-bico3.png") no-repeat
          background-size: 12px 17px;
          display: block;
          width: 22px;
          height: 20px;
          position: absolute;
          margin-top: 16px;
        .zfont
          position: absolute;
          top: 0;
          right: 10px;
          .afff
            color: #fff;


      .mlogo
        padding: 1em 0 2em 0;
        box-sizing: border-box;
        img
          display: block;
          margin: auto;
          width: 20%;
  /**/
</style>

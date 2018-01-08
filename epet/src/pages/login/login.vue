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

        <div class="es_por4">
          <div class="tab">
            <div class="tab-item" @click="setLoginWay(false)">
              普通登录
              <i :class="{current: !loginWay}"></i>
            </div>
            <div class="tab-item" @click="setLoginWay(true)">
              手机动态密码登录
              <i :class="{current: loginWay}"></i>
            </div>
          </div>
        </div>

      </div>
    </header>

    <div class="bgfff">
      <div class="formBox">
        <form method="post" v-if="!loginWay">
          <!--账号-->
          <section class="input_container">
            <span class="mNameIco"></span>
            <input type="text" placeholder="手机号/邮箱/用户名" v-model="userAccount">
          </section>
          <!--密码-->
          <section class="input_container">
            <span class="mpasswordIco"></span>
            <input type="password" placeholder="输入密码" v-model="password">
          </section>
          <!--图形验证码-->
          <section class="input_container">
            <span class="mpasswordIco"></span>
            <input type="text" placeholder="请输入图片内容" v-model="codeNumber">
            <span style="display:block;position: absolute;top:5px;right:32px;">
              <img :src="captchaCodeImg" v-show="captchaCodeImg">
            </span>
            <div class="change_img" @click="getCaptchaCode">
              <p>看不清</p>
              <p>换一张</p>
            </div>
          </section>

        </form>

        <form method="post" v-else>
          <section class="input_container">
            <span class="mNumIco"></span>
            <input type="text" placeholder="已注册的手机号" v-model="phoneNumber">
            <div class="verify" :class="{right_phone_number:rightPhoneNumber}"
                 @click.prevent="getVerifyCode" v-show="!computedTime">获取验证码</div>
            <div class="verify" v-show="computedTime">已发送{{computedTime}}s</div>
          </section>

          <section class="input_container">
            <span class="mpasswordIco"></span>
            <input type="text" placeholder="动态密码" v-model="mobileCode">
          </section>
        </form>
      </div>

      <div class="ftc">
        <a href="javascript:;" class="btn-register ft14 pull-right">忘记密码？</a>
      </div>

      <div class="login_button" @click="login">登录</div>

      <div style="height:4em"></div>
      <!--合作伙伴-->
      <div class="other-login">
        <div class="ftc ft16 mt c666 partners"><b>合作网站登录</b></div>
        <ul class="uList1">
          <li><img src="./login_ico4.png"></li>
          <li><img src="./login_ico2.png"></li>
        </ul>
      </div>

      <alertTip v-if="showAlert"
                :showHide="showAlert"
                @closeTip="closeTip"
                :alertText="alertText"/>

    </div>
  </div>
</template>

<script type="text/javascript">
  import alertTip from '../../components/alertTip/alertTip.vue'
  import {getcaptchas, sendMobileCode, phoneLogin, accountLogin} from '../../api/index'
  export default {
    data () {
      return {
        loginWay: false,  // 登录方式
        captchaCodeImg: null,   // 图形验证码地址
        codeNumber: null, // 验证码
        username: null,
        password: null,
        phoneNumber: null,
        mobileCode: null,
        computedTime: 0, // 倒计时
        validate_token: null, // 短信的验证码
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
        userInfo: null, //获取到的用户信息
        userAccount: null, //用户名
      }
    },

    components: {alertTip},

    created () {
      this.getCaptchaCode();
    },

    computed: {
      // 判断手机号
      rightPhoneNumber () {
        return /^1\d{10}$/gi.test(this.phoneNumber);
      }
    },

    methods: {
      // 设置登录方式
      setLoginWay (loginWay) {
        this.loginWay = loginWay;
      },
      // 获取图形验证码
      async getCaptchaCode () {
        let res = await getcaptchas();
        this.captchaCodeImg = res.code;
      },
      // 获取短信验证码
      async getVerifyCode () {
        if (this.rightPhoneNumber) {
          this.computedTime = 60;
          this.timer = setInterval(() => {
            this.computedTime--;
            if (this.computedTime === 0) {
              clearInterval(this.timer);
            }
          }, 1000);
        }
        // 发送短信验证码
        let res = await sendMobileCode(this.phoneNumber);
        if (res.message) {
          this.showAlert = true;
          this.alertText = res.message;
          return
        }
        this.validate_token = res.validate_token;
      },

      async login () {
        if (this.loginWay) {
          if (!this.rightPhoneNumber) {
            this.showAlert = true;
            this.alertText = '手机号码不正确';
            return
          } else if (!(/^\d{6}$/gi.test(this.mobileCode))) {
            this.showAlert = true;
            this.alertText = '短信验证码不正确';
            return
          }
          //手机号登录
          const result = await phoneLogin(this.phoneNumber, this.mobileCode);
          if(result.code===0) {
            this.userInfo = result.data
          } else {
            this.userInfo = {
              message: '登陆失败, 手机号或验证不正确'
            }
          }

        } else {
          if (!this.userAccount) {
            this.showAlert = true
            this.alertText = '请输入手机号/邮箱/用户名'
            return
          } else if (!this.password) {
            this.showAlert = true;
            this.alertText = '请输入密码'
            return
          } else if (!this.codeNumber) {
            this.showAlert = true
            this.alertText = '请输入验证码'
            return
          }

          //用户名登录
          this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber)
        }

        //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
        if (!this.userInfo.user_id) {
          this.showAlert = true
          this.alertText = this.userInfo.message
          if (!this.loginWay) this.getCaptchaCode()
        } else {
//          this.recordUserinfo(this.userInfo)
          this.$router.go('/main')
        }
      },

      closeTip() {
        this.showAlert = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color #f3f4f5

  .login
    font: 62.5% 'Microsoft Yahei', -apple-system-font, Helvetica Neue, sans-serif;
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
      .es_por4
        background-color: rgba(255, 255, 255, 0.3);
        line-height 20px
        .tab
          overflow hidden
          .tab-item
            float: left;
            width: 50%;
            text-align: center;
            height: 44px;
            line-height: 44px;
            position: relative;
            font-size: 15px;
            color: #fff;
            .current
              display: block
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;

    .bgfff
      background #fff
      .formBox
        background: #fff;
        border-radius: 0.5em;
        margin: 0 4% 1em 4%;
        padding: 0 1.6%;
        .input_container
          border-bottom: #e2e2e2 solid 1px;
          padding: 12px 0 12px 30px;
          position: relative;
          input
            display: block;
            height: 21px;
            width: 100%;
            font-size: 15px;
            border: none;
            padding: 0;
            color: #666;
            font-family: "Microsoft Yahei", tahoma, arial;
            outline: none;
          .change_img
            position: absolute;
            top: 5px
            right: 0
            font-size 12px
            color: #7992ff
          .verify
            border: 1px solid #d6d6e6
            border-radius 5px
            padding 2px 3px
            background-color #d6d6e6
            color: #fff
            position: absolute
            top: 10px
            right: 0
          .right_phone_number
            background-color #76c84c

          .mNameIco
            float: left;
            display: inline;
            width: 17px;
            height: 21px;
            background: url("./ico3.png") no-repeat;
            background-size: contain;
            margin: 1px 0 0 -25px;
          .mpasswordIco
            float: left;
            display: inline;
            width: 17px;
            height: 20px;
            margin: 0 0 0 -25px;
            background: url("./ico4.png") no-repeat;
            background-size: contain;
          .mNumIco
            float: left;
            display: inline;
            width: 17px;
            height: 17px;
            background: url("./ico1.png") no-repeat;
            background-size: contain;
            margin: 2px 0 0 -25px;

      .ftc
        padding-left: 2em;
        padding-right: 2em;
        overflow hidden
        .btn-register
          color #898989

      .login_button
        margin 0.5em 1em
        text-align center
        background: #2ec975;
        border-radius 5px
        padding .6em 0;
        font-size: 15px;
        letter-spacing: 5px
        color: #fff
      .other-login
        .partners
          color: #d7d7d7;
          margin-top: 0.5em;
          font-size 16px
        .uList1
          padding: 1.5em 0;
          overflow: hidden
          li
            width: 33.3%;
            padding: 0 1.2em;
            float: left;
            display: inline;
            img
              width: 60%;
              height: auto;
              display: block;
              margin: auto;
              max-width: 176px;

  /**/
</style>

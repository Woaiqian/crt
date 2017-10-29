<template>
  <div class="box">
    <div class="logo">
      <img src="../assets/pt/logo.png" alt="img">
    </div>
    <form class="cellphone">
      <div class="cellphone_d d1">
        <input type="text" placeholder="手机" >
      </div>
      <div class="cellphone_d d2">
        <input type="password" placeholder="密码">
      </div>
      <p class="box_p">
        <a href="#">忘记密码?</a>
      </p>
      <router-link :to="{path: ''+url+''}">
        <div class="box_d">登录</div>
      </router-link>
      <router-link :to="{path: ''+turl+''}">
        <div class="register">
          <a href="javascrip:;">立即注册</a>
        </div>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      url: "shouye",
      turl: "tLogin"
    };
  },
  created() {},

  methods: {}
};
</script>


<style scoped >
.logo {
  text-align: center;
  margin-bottom: 0.62rem;
}

.logo img {
  margin-top: 1.5rem;
  width: 2.22rem;
  height: 3.08rem;
}

.cellphone {
  width: 90%;
  margin: 0 auto;
}

.cellphone_d input {
  width: 80%;
  border: 0;
  border-left: 0.01rem solid #e77878;
  /* height: 0.42rem; */
  font-size: 0.25rem;
  margin-left: 0.94rem;
  text-indent: 0.2rem;
  outline: none;
  background: rgb(255, 246, 246);
}

.cellphone_d {
  margin-bottom: 0.32rem;
  border: 0.01rem solid #e77878;
  border-radius: 0.25rem;
  padding: 0.28rem 0;
}

.d1 {
  background: url("../assets/pt/shouji-1.png")no-repeat 0.3rem;
  background-size: 0.33rem 0.43rem;
}

.d2 {
  background: url("../assets/pt/suo-1.png")no-repeat 0.3rem;
  background-size: 0.33rem 0.43rem;
}

.box_p {
  clear: both;
  overflow: hidden;
}

.box_p a {
  float: right;
  font: 0.25rem/0.3rem "微软雅黑";
  margin-bottom: 0.38rem;
  margin-top: 0.14rem;
}

.box_d {
  background: #d95e5f;
  border-radius: 0.25rem;
  text-align: center;
  line-height: 1.04rem;
  color: #ffffff;
  font-size: 0.3rem;
  margin-bottom: 0.52rem;
}

.register {
  border-top: 0.01rem solid #e77878;
  margin-bottom: 0.5rem;
}

.register a {
  display: block;
  width: 1.6rem;
  height: 0.3rem;
  font-size: 0.3rem;
  color: #e77878;
  text-align: center;
  background: rgb(255, 246, 246);
  margin: 0 auto;
  margin-top: -0.2rem;
}
</style>

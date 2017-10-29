<template>
  <header class="header">
    <div class="header-left">
      <img src="./../../../assets/pt/ditu2.png" />
    </div>
    <div class="header-middle">
      <div class="header-nav">
        <span :class="{'active-nav': allOrderActive}" @click="changeNav(1)">全部订单</span>
        <span :class="{'active-nav': !allOrderActive}" @click="changeNav(2)">附近订单</span>
      </div>
    </div>
  </header>	
</template>

<script>
export default {
  props: ['orderBtn', 'changeNav'],
  data() {
    return {
      allOrderActive: this.orderBtn == 1 ? true : false
    }
  },
	watch: {
    orderBtn(value) {
      this.allOrderActive = value == 1 ? true : false
		}
  }
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: 0.25rem;
  background-color: #e87979;
}
.header-left img {
  width: 0.4rem;
  height: 0.45rem;
}
.header-middle {
  flex: 1;
  text-align: center;
}
.header-nav {
  display: inline-block;
  border: 0.02rem solid #f1afaf;
  border-radius: 0.1rem;
}
.active-nav {
  border-radius: 0.1rem;
  background-color: #fff;
}
.header-nav span {
  display: inline-block;
  padding: 0.2rem 0.25rem;
  font-size: 0.25rem;
  letter-spacing: 1px;
  cursor: pointer;
}
.header-right img{
  width: 0.4rem;
  height: 0.42rem;
}
</style>
<template>
  <footer class="footer">
    <div class="footer-nav acitive-footer-nav">
      <img src="./../../../assets/pt/recieve-order.png" />
      <p>接单</p>
    </div>
      <div class="footer-nav">
        <img src="./../../../assets/pt/rank-list.png" />
        <p>排行榜</p>
      </div>
    <div class="footer-nav">
      <img src="./../../../assets/pt/wo-1.png" />
      <p>我</p>
    </div>
  </footer>	
</template>

<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #ffe5e4;
}
.footer a {
  display: block;
  flex: 1;
}
.footer-nav {
  flex: 1;
  padding: 0.12rem 0;
  color: #8d9292;
  text-align: center;
}
.acitive-footer-nav {
  color: #e87979;
}
.footer-nav p {
  font-size: 0.25rem;
  padding: 3px 0;
}
.footer-nav img {
  width: 0.35rem;
  height: 0.42rem;
}
</style>
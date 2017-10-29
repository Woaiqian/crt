<template>
  <div class="main-container">
    <section class="order-item" v-for="order in showList">
      <div class="order-item-content">
        <div class="order-infor">
          <img src="./../../../assets/bpt/1.png" />
          <p>服务项目：<span>{{order.project}}</span></p>
        </div>
        <div class="order-infor">
          <img src="./../../../assets/bpt/3.png" />
          <p>服务时间：<span>{{order.time}}</span></p>
        </div>
        <div class="order-infor">
          <img src="./../../../assets/bpt/2.png" />
          <p>服务地址：<span>{{order.address}}</span></p>
        </div>
      </div>
      <div class="order-item-btn">
          <span>接单</span>
      </div>
    </section>
  </div>	
</template>

<script>
export default {
  props: ['orderBtn'],
  data() {
    return {
      allOrderList: [
        { project: '少奶催乳', time: '7:00—10:00', address: '北京市昌平区上奥中心' },
        { project: '乳房硬块', time: '10:00—13:00', address: '北京市昌平区上奥中心' },
        { project: '乳房护理', time: '13:00—16:00', address: '北京市昌平区上奥中心' },
        { project: '产后开奶', time: '16:00—19:00', address: '北京市海淀区泰山饭店' },
        { project: '乳房护理', time: '19:00—22:00', address: '北京市昌平区上奥中心' }
      ],
      beighborOrderList: [
        { project: '少奶催乳', time: '7:00—10:00', address: '北京市昌平区上奥中心' },
        { project: '少奶催乳', time: '10:00—13:00', address: '北京市昌平区维也纳酒店' },
        { project: '少奶催乳', time: '16:00—19:00', address: '北京市昌平区嘉禾园b座' }
      ],
      showList: []
    }
  },
	watch: {
    orderBtn(value) {
      this.showList = value == 1 ? this.allOrderList : this.beighborOrderList
		}
  },
  created() {
    this.showList = this.allOrderList
  }
}
</script>

<style>
.main-container {
  padding: 0.2rem 0.2rem 1.12rem;
}
.order-item {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.25rem;
  margin-bottom: 0.25rem;
  border-radius: 0.05rem;
  background-color: #fff;
}
.order-item-content {
  flex: 1;
}
.order-infor {
  padding: 0.05rem 0;
}
.order-item img {
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.05rem;
}
.order-item p{
  display: inline-block;
  font-size: 0.25rem;
}
.order-item span{
  color: #43a1ff;
}
.order-item-btn a {
  display: block;
}
.order-item-btn span{
  display: inline-block;
  padding: 0.2rem 0.4rem;
  font-size: 0.25rem;
  color: #f1afaf;
  border: 0.02rem solid #f1afaf;
  border-radius: 0.125rem;
}
</style>
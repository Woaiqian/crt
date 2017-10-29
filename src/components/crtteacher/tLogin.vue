<template>
	<div>
		<tHeader :order-btn="orderBtn" :change-nav="changeNav"></tHeader>
		<tContent :order-btn="orderBtn"></tContent>
		<tFooter></tFooter>
	</div>
</template>

<script>
import tHeader from "./public/tHeader"
import tContent from "./public/tContent"
import tFooter from "./public/tFooter"

export default {
	name: "orderList",
	components: {
		tHeader,  tContent, tFooter
	},
	data() {
		return{
			orderBtn: 1
		}
	},
	methods: {
    changeNav(orderBtnValue) {
			this.orderBtn = orderBtnValue
		}
	}
}
</script>

<style>
	
</style>
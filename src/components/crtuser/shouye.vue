<template>
	<div class="shouye">
		<pHeader></pHeader>
		<pContent></pContent>
		<pFooter></pFooter>
		<router-view />
	</div>
</template>
<script>
import pHeader from "./public/pHeader"
import pContent from "./public/pContent"
import pFooter from "./public/pFooter"

export default {
	name: "shouye",
		data() {
			return{

			}
		},
		components: {
			pHeader, pContent, 	pFooter
		}
}
</script>
<style>
	
</style>
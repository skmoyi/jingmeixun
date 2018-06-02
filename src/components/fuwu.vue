<template>
	<div class="fuwu">
		<headerNav></headerNav>
		<bannerComponent></bannerComponent>

		<div class="fuwu-container">
			<div class="fuwu-title">业务范围</div>
			<div class="fuwu-fanwei">
				<div class="fuwu-fanwei-list"><img src="../assets/xiangji.png" alt="" /></div>
				<div class="fuwu-fanwei-list"><img src="../assets/kuohao.png" alt="" /></div>
				<div class="fuwu-fanwei-list"><img src="../assets/xiangji.png" alt="" /></div>
				<div class="fuwu-fanwei-list"><img src="../assets/kuohao.png" alt="" /></div>
				<div class="fuwu-fanwei-list five"><img src="../assets/diannao.png" alt="" /></div>
				<div class="fuwu-fanwei-list"><img src="../assets/xiangji02.png" alt="" /></div>
				<div class="fuwu-fanwei-list"><img src="../assets/jiangbei.png" alt="" /></div>
				<div class="fuwu-fanwei-list"><img src="../assets/xiangji02.png" alt="" /></div>
				<div class="fuwu-fanwei-list"><img src="../assets/jiangbei.png" alt="" /></div>
			</div>
			<div class="fuwu-wangluo-title">网络维护</div>
			<div class="fuwu-wangluo-container">
				
				<p>眼中的三维立体是如何产生的。</p>
				<p>眼中的三维立体是三维立体是如何产生的。</p>
				<p>眼中的三维立体是如何产生的。</p>
			</div>
			<div class="fuwu-wangluo-title">相关案例</div>
			<div class="fuwu-anli-container">
				<div class="fuwu-anli-list"><img src="../assets/anli02.jpg" alt="" /></div>
				<div class="fuwu-anli-list"><img src="../assets/anli02.jpg" alt="" /></div>
				<div class="fuwu-anli-list"><img src="../assets/anli02.jpg" alt="" /></div>
				<div class="fuwu-anli-list"><img src="../assets/anli02.jpg" alt="" /></div>
			</div>
			<div class="fuwu-wangluo-more">查看更多相关案例</div>
		</div>
		<footerComponent></footerComponent>
	</div>

</template>

<script>
	import headerNav from './headerNav.vue'
	import footerComponent from './footer-component'
	import bannerComponent from './banner-component'

	export default {
		name: 'fuwu',
		components: {
			headerNav,
			bannerComponent,
			footerComponent
		}
	}
</script>

<style>
	
</style>
<template>
	<div class="us">
		<headerNav></headerNav>
		<bannerComponent></bannerComponent>
		<div class="aboutUs">
			<div class="aboutUs-left">
				<div class="title-top">共同打造</div>
				<div class="title-middle">属于您自己的</div>
				<div class="title-bottom">美丽家园</div>
			</div>
			<div class="aboutUs-right">
				<h4>关于京美讯</h4>
				<div class="aboutUs-right-line"></div>
				<div class="aboutUs-right-jieshao">
					公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex。
				</div>

			</div>
		</div>
		<footerComponent></footerComponent>
	</div>
</template>

<script>
	import headerNav from './headerNav.vue'
	import footerComponent from './footer-component'
	import bannerComponent from './banner-component'

	export default {
		name: 'us',
		components: {
			headerNav,
			footerComponent,
			bannerComponent
		},
	}
</script>

<style>
	
</style>
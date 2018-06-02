<template>
	<div class='lianxi-content'>
		<headerNav></headerNav>
		<bannerComponent></bannerComponent>
		<div class="lianxi">
			<div class="yewu-ch">联系我们</div>
			<div class="yewu-en">CONTACT US</div>
		</div>

		<div class="address">
			<div class="address-title">地址</div>
			<div class="address-content">北京市朝阳区建国路88号soho现代城4号楼1906室</div>
		</div>
		<div class="dianhua">
			<div class="dianhua-title">联系电话</div>
			<div class="dianhua-number">010-62111363/62119813</div>
		</div>
		<div class="email">
			<div class="email-title">E-MAIL</div>
			<div class="email-number">liu@bowangzx.com</div>
		</div>
		<div class="erweima">
			<img src="../assets/erweima.jpg" alt="" />
		</div>

		<footerComponent></footerComponent>

	</div>
</template>

<script>
	import headerNav from './headerNav'
	import bannerComponent from './banner-component'
	import footerComponent from './footer-component'
	export default {
		name: 'lianxi',
		components: {
			headerNav,
			bannerComponent,
			footerComponent
		}
	}
</script>

<style>

</style>
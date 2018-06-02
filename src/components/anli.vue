<template>
	<div class="us">
		<headerNav></headerNav>
		<bannerComponent></bannerComponent>
		<div class="anli-container">
			<div class="anli-list">
				<div class="anli-image"><img src="../assets/anli.jpg" alt="" /></div>
				<h3> 北京凌凡餐饮管理有限公司</h3>
				<h4> 网页建设</h4>
			</div>
			<div class="anli-list">
				<div class="anli-image"><img src="../assets/anli.jpg" alt="" /></div>
				<h3> 北京凌凡餐饮管理有限公司</h3>
				<h4> 网页建设</h4>
			</div>
			<div class="anli-list">
				<div class="anli-image"><img src="../assets/anli.jpg" alt="" /></div>
				<h3> 北京凌凡餐饮管理有限公司</h3>
				<h4> 网页建设</h4>
			</div>
			<div class="anli-list">
				<div class="anli-image"><img src="../assets/anli.jpg" alt="" /></div>
				<h3> 北京凌凡餐饮管理有限公司</h3>
				<h4> 网页建设</h4>
			</div>
			<div class="anli-list">
				<div class="anli-image"><img src="../assets/anli.jpg" alt="" /></div>
				<h3> 北京凌凡餐饮管理有限公司</h3>
				<h4> 网页建设</h4>
			</div>
			<div class="anli-list">
				<div class="anli-image"><img src="../assets/anli.jpg" alt="" /></div>
				<h3> 北京凌凡餐饮管理有限公司</h3>
				<h4> 网页建设</h4>
			</div>
		</div>
		<footerComponent></footerComponent>
	</div>

</template>

<script>
	import headerNav from "./headerNav"
	import bannerComponent from './banner-component'
	import footerComponent from './footer-component'
	export default {
		name: 'us',
		components: {
			headerNav,
			bannerComponent,
			footerComponent
		},
		data() {
			return {
				ceshi: []
			}
		},
		mounted: function() {
			var that = this;

			this.$http.get('http://localhost:3000/ceshi').then(function(res) {
				console.log(res.data);
				that.ceshi = res.data;
			}, function(err) {
				console.log(err);
			})
		}

	}
</script>

<style>
	
</style>
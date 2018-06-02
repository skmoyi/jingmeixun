<template>
	<div class="nav">
		<img class="logo" src="../assets/logo.jpg" alt="" />
		<ul class="nav_ul">
			<li>
				<router-link to="/">首页</router-link>
			</li>
			<li>
				<router-link to="/us">我们</router-link>
			</li>
			<li>
				<router-link to="/fuwu">服务</router-link>
			</li>
			<li>
				<router-link to="/anli">案例</router-link>
			</li>
			<li>
				<router-link to="/news">资讯</router-link>
			</li>
			<li>
				<router-link to="/lianxi">联系</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "headerNav"
	}
</script>

<style>
	@import '../../static/css/index.css'
</style>
<template>

	<div class="news">
		<headerNav></headerNav>
		<bannerComponent></bannerComponent>

		<div class="news-content">
			<div class="news-title">
				<div class="news-title-list-out" v-for="(item,index) of list">
					<div class="news-title-list" :class="{active:selected==index}" @click="change(index)">{{item.title}}
						<div v-if="selected==index" class="triangle-down"></div>
					</div>
				</div>
				<!--<div class="news-title-list-out">
					<div class="news-title-list active">公司新闻</div>
				</div>
				<div class="news-title-list-out">
					<div class="news-title-list">专业知识</div>
				</div>-->

			</div>
			<component :is="currentView"></component>
		</div>
		<footerComponent></footerComponent>

	</div>

</template>

<script>
	import headerNav from './headerNav'
	import bannerComponent from './banner-component'
	import footerComponent from './footer-component'
	import item00 from './item00'
	import item01 from './item01'
	import item02 from './item02'

	export default {
		name: "news",
		components: {
			headerNav,
			bannerComponent,
			footerComponent,
			
			item00,
			item01,
			item02
		},
		data() {
			return {
				selected: 0,
				currentView: 'item01',
				list: [{
					title: '行业资讯'
				}, {
					title: '公司新闻'
				}, {
					title: '专业知识'
				}]
			}
		},
		methods: {
			change(index) {
				
				this.selected = index;
				this.currentView = 'item0' + index;
			}
		}
	}
</script>

<style>

</style>
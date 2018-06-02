<template>
	<div class="item">
		<div class="news-content-content" ref="viewBox">

			<div class="news-content-content-bottom">
				<div v-for="(item,index) of news" class="content-content-bottom-list" @mouseenter="changeContent(index)">
					<div v-if="selected==index" class="news-content-content-top">
						<div class="news-content-content-top-left"><img src="../assets/anli03.jpg" alt="" /></div>
						<div class="news-content-content-top-right">
							<div class="content-top-right-title"><span class="content-top-right-title-left">{{news[arrIndex].title}}</span> <span class="content-top-right-title-right">{{news[arrIndex].time}}</span></div>
							<div class="content-top-right-content" v-html='news[arrIndex].content'>
								<!--<p>网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公</p>
						<p>网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公<span>详情>></span></p>-->
								

							</div>
						</div>

					</div>

					<span v-else class="bottom-list-dot"></span><span class="bottom-list-text-left">{{item.title}}</span><span class="bottom-list-text-right">{{item.time}}</span></div>
				<!--<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>
				<div class="content-content-bottom-list"><span class="bottom-list-dot"></span><span class="bottom-list-text-left">博网追新6月下订单5折优惠活动现在开始啦！</span><span class="bottom-list-text-right">[2017-09-01]</span></div>-->

			</div>

		</div>

		<div class="loading">加载中...</div>

	</div>
</template>

<script>
	export default {
		name: 'item02',
		data() {
			return {
				selected: 0,
				arrIndex: 0,
				scroll:'',
				news: [{
					title: '00博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-09-01】',
					content: '<p>dsfafsdf网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公</p><p>dsfafsdf网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公</p>'
				}, {
					title: '博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-12-01】',
					content: '网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}, {
					title: 'asdf博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-07-01】',
					content: 'fasddsaf网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}, {
					title: '博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-08-01】',
					content: '网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}, {
					title: 'asdfa博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-05-01】',
					content: 'fadsfdf网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}, {
					title: '博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-09-01】',
					content: 'fdsaf网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}, {
					title: 'asdf博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-02-01】',
					content: '网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}, {
					title: '博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-08-01】',
					content: 'dsfasdf网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}, {
					title: 'sadf博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-09-01】',
					content: '网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}, {
					title: '博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-09-01】',
					content: 'asfdfasd网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				}]
			}
		},
		methods: {
			changeContent(index) {
				this.selected = index;
				this.arrIndex = index
			},
			menu(){
				this.scroll= document.documentElement.scrollTop || document.body.scrollTop;
				console.log(this.scroll)
			}
		
		},
		mounted() {
			
			
			this.box = this.$refs.viewBox
			document.addEventListener('scroll',(e)=>{
				console.log(document.documentElement.scrollTop);
				console.log(window.screen.height);
				console.log(document.body.clientHeight);
				if(document.documentElement.scrollTop+window.screen.height>=document.body.clientHeight){
					this.news.push({
					title: '00博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-09-01】',
					content: '<p>dsfafsdf网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公</p><p>dsfafsdf网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公</p>'
				}, {
					title: '博网追新6月下订单5折优惠活动现在开始啦！',
					time: '【2017-12-01】',
					content: '网站信息量多，您不仅可以用文字、图片、动画等方式宣传自己的产品，而且可以介绍自己的企业，发布企业新闻，介绍企业领导，公'
				})
				}
				
			})
		}
	}
</script>

<style>

</style>
<template>
	<div class="hello">
		<headerNav></headerNav>
		<bannerComponent></bannerComponent>

		<div class="yewu">
			<div class="yewu-ch">业务范围</div>
			<div class="yewu-en">SCOPE OF BUSINESS</div>
		</div>
		<div class="yewu_xiangqing">
			<div class="container">
				<div class='xiangqing-list' @mouseenter="mouseEnter(0)" @mouseleave="mouseLeave" :class="{active:itemHoverIndex==0}"><img class="xiangqing-list-image" src="../assets/bao.png" alt="" />
					<div class="xiangqing-list-text">管理系统开发 <br>电商开发</div>
					<div class="xiangqing-list-border"></div>
				</div>
				<div class="xiangqing-list" @mouseenter="mouseEnter(1)" @mouseleave="mouseLeave" :class="{active:itemHoverIndex==1}"><img class="xiangqing-list-image" src="../assets/bao01.png" alt="" />
					<div class="xiangqing-list-text">网站建设<br>手机网站建设</div>
					<div class="xiangqing-list-border"></div>
				</div>
				<div class="xiangqing-list" @mouseenter="mouseEnter(2)" @mouseleave="mouseLeave" :class="{active:itemHoverIndex==2}"><img class="xiangqing-list-image" src="../assets/cheng.png" alt="" />
					<div class="xiangqing-list-text">公众号 小程序开发 </div>
					<div class="xiangqing-list-border"></div>
				</div>
				<div class="xiangqing-list" @mouseenter="mouseEnter(3)" @mouseleave="mouseLeave" :class="{active:itemHoverIndex==3}"><img class="xiangqing-list-image" src="../assets/cheng.png" alt="" />
					<div class="xiangqing-list-text">html<br>制作 APP开发</div>
				</div>
				<div class="xiangqing-list" @mouseenter="mouseEnter(4)" @mouseleave="mouseLeave" :class="{active:itemHoverIndex==4}"><img class="xiangqing-list-image" src="../assets/fangzi.png" alt="" />
					<div class="xiangqing-list-text">网络维护</div>
				</div>
				<div class="xiangqing-list" @mouseenter="mouseEnter(5)" @mouseleave="mouseLeave" :class="{active:itemHoverIndex==5}"><img class="xiangqing-list-image" src="../assets/pingtai.png" alt="" />
					<div class="xiangqing-list-text">大型网络平台开发</div>
				</div>
				<div class="xiangqing-list" @mouseenter="mouseEnter(6)" @mouseleave="mouseLeave" :class="{active:itemHoverIndex==6}"><img class="xiangqing-list-image" src="../assets/zhiwen.png" alt="" />
					<div class="xiangqing-list-text">网络营销</div>
				</div>
				<div class="xiangqing-list" @mouseenter="mouseEnter(7)" @mouseleave="mouseLeave" :class="{active:itemHoverIndex==7}"><img class="xiangqing-list-image" src="../assets/zhiwen.png" alt="" />
					<div class="xiangqing-list-text">企业VI形象设计</div>
				</div>
			</div>
		</div>

		<div class="kehu">
			<div class="yewu-ch">我的客户</div>
			<div class="yewu-en">MY CLIENT</div>
		</div>
		<div class="kehu-xiangqing">
			<div class="container">
				<div class="kehu-list-row">
					<div class="kehu-list"><img src="../assets/kehu01.jpg"></div>
					<div class="kehu-list"><img src="../assets/kehu02.jpg"></div>
					<div class="kehu-list"><img src="../assets/kehu03.jpg"></div>
				</div>
				<div class="kehu-list-row">
					<div class="kehu-list-changtu"><img src="../assets/kehu05.jpg"></div>

					<div class="kehu-list"><img src="../assets/kehu03.jpg"></div>
				</div>
				<div class="kehu-list-row">

					<div class="kehu-list"><img src="../assets/kehu02.jpg"></div>
					<div class="kehu-list-changtu"><img src="../assets/kehu07.jpg"></div>
				</div>
			</div>

		</div>
		<div class="wenhua">
			<div class="yewu-ch">京美讯文化</div>
			<div class="yewu-en">CULTURE</div>
		</div>

		<div class="wenhuaxiangqing">
			<div class="container">

				<p>博网服务范围:网站建设,企业网站托管,网站运营维护,企业网站优化，微营销，微网站建设。 博网追新科技（北京）有限公司—中国互联博网服务范围:网站建设,企业网站托管,网站运营维护,企业网站优化，微营销，微网站建设。 博网追新科技（北京）有限公司—中国互联</p>
			</div>
		</div>

		<div class="zixun">
			<div class="yewu-ch">新闻资讯</div>
			<div class="yewu-en">NEWS INFORMATION</div>
		</div>
		<div class="news-container">
			<div class="container">
				<div class="news-container-list">
					<div class="news-container-list-title">行业资讯 <div class="triangle-down"></div></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-more">查看更多>></div>
				</div>
				<div class="news-container-list">
					<div class="news-container-list-title">公司新闻 <div class='triangle-down'></div></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-more">查看更多>></div>
				</div>
				<div class="news-container-list">
					<div class="news-container-list-title">专业知识 <div class="triangle-down"></div></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-list"><span>计算机领域新增超快捷支付方式的公告</span><span>2018/03/13</span></div>
					<div class="news-container-list-more">查看更多>></div>
				</div>
			</div>

		</div>
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
	
	import headerNav from'./headerNav.vue'
	import footerComponent from './footer-component'
	import bannerComponent from './banner-component'
	export default {
		name: 'index',
		data() {
			return {
				itemHoverIndex: 0
			}
		},
		components:{
			headerNav,
			footerComponent,
			bannerComponent
		},
		methods: {
			mouseEnter(index) {
				this.itemHoverIndex = index;
			},
			mouseLeave() {
				this.itemHoverIndex = null;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
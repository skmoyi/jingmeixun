<template>
	<div class="slide" v-on:mouseenter="stop()" v-on:mouseout="move()">
		<div class="slideshow">
			<ul>
				<transition-group tag="ul" name="image">
					<li v-for="(img,index) in imgArray" v-show="index===mark" :key="index">
						<a href="#">
							<img :src="img" alt="" />
						</a>
					</li>
				</transition-group>
			</ul>
		</div>
		<div class="bar">
			<span v-for="(item,index) in imgArray" @click='change(index)' :class="{'active':index===mark}" :key="index"></span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mark: 0,
				imgArray: ['../assets/banner.jpg', '../assets/banner.jpg', '../assets/banner.jpg', '../assets/banner.jpg']
			}
		},
		methods: {
			autoPlay() {
				this.mark++;
				if(this.mark === 4) {
					this.mark = 0
				}
			},
			play() {
				setInterval(this.autoPlay, 2500)
			},
			change(i) {
				this.mark = i
			},
			stop() {
				clearInterval(this.timer)
			},
			move() {
				this.timer = setInterval(this.autoPlay, 2500)
			}
		},
		created() {
			this.play()
		}
	}
</script>

<style>
	/** {
		margin: 0;
		padding: 0;
	}
	
	.slide {
		width: 1024px;
		height: 320px;
		margin: 0 auto;
		margin-top: 50px;
		overflow: hidden;
		position: relative;
	}
	
	.slideshow {
		width: 1024px;
		height: 320px;
	}
	
	li {
		position: absolute;
	}
	
	img {
		width: 1024px;
		height: 320px;
	}
	
	.bar {
		position: absolute;
		width: 100%;
		bottom: 10px;
		margin: 0 auto;
		z-index: 10;
		text-align: center;
	}
	
	.bar span {
		width: 20px;
		height: 5px;
		border: 1px solid;
		background: white;
		display: inline-block;
		margin-right: 10px;
	}
	
	.active {
		background: red !important;
	}
	
	.image-enter-active {
		transform: translateX(0);
		transition: all 1.5s ease;
	}
	
	.image-leave-active {
		transform: translateX(-100%);
		transition: all 1.5s ease;
	}
	
	.image-enter {
		transform: translateX(100%);
	}
	
	.image-leave {
		transform: translateX(0);
	}*/
</style>
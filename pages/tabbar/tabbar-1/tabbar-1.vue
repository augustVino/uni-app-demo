<template>
	<view class="content">
		<!-- searchCon -->
		<search></search>
		
		<!-- SwiperCon -->
		<view class="swiperCon">
			<swiper class="uniSwiper" :indicator-dots="false" :autoplay="false" :current="1" previous-margin="32px" next-margin="32px" circular>
				<swiper-item class="swiperItem">
					<view class="swiper-item">
						<view class="item-title">
							<h3 class="main-title">免费图书馆</h3>
							<h4 class="sub-title">第 111 期 送18本书，周五更新</h4>
						</view>
						<view class="item-row">
							<view class="flex-item" v-for="(item,index) in freeList" :key="index">
								<image class="cover-pic" :src="item.mediaList[0].coverPic" mode="scaleToFill" lazy-load></image>
								<text class="book-title">{{item.mediaList[0].title}}</text>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item class="swiperItem">
					<view class="swiper-item">
						<view class="item-title">
							<h3 class="main-title">免费听书馆</h3>
							<h4 class="sub-title">第 111 期</h4>
						</view>
						<view class="item-row">
							<view class="flex-item" v-for="(item,index) in listenList" :key="index">
								<image class="cover-pic listen-cover-pic" :src="item.mediaList[0].coverPic" mode="scaleToFill" lazy-load></image>
								<text class="book-title">{{item.mediaList[0].title}}</text>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item class="swiperItem">
					<view class="swiper-item">
						<view class="item-title">
							<h3 class="main-title">为你推荐</h3>
							<h4 class="sub-title">每日更新</h4>
						</view>
						<view class="item-row">
							<view class="flex-item" v-for="(item,index) in recommendList" :key="index">
								<image class="cover-pic" :src="item.mediaList[0].coverPic" mode="scaleToFill" lazy-load></image>
								<text class="book-title">{{item.mediaList[0].title}}</text>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- #ifdef MP-WEIXIN -->
			<button class="share-btn" open-type="share" @click="onShareAppMessage">立即分享</button>
		<!-- #endif -->
	</view>
</template>

<script>
	import Search from '@/components/search/search.vue'
	const localData = require('../../../static/data/json.js')
	export default {
		components:{Search},
		data() {
			return {
				listenList: [],
				freeList: [],
				recommendList: []
			};
		},
		onLoad() {
			this.getData();
		},
		methods: {
			onShareAppMessage: function (res) {
				if (res.from === 'button') {
				    console.log("来自页面内转发按钮");
				    console.log(res.target);
				}else {
				    console.log("来自右上角转发菜单")
				};
			    return {
					desc: '一套代码生成多端平台!',
					path: '/pages/tabbar/tabbar-1/tabbar-1.vue',
					imageUrl:'../../../static/img/share.jpg'
			    }
			},
			getData(){
				/* 接口调用 */
				// this.$minApi.LISTENLIST({}).then(res => {
				// 	const {data,status} = res;
				// 	if(status.code === 0){
				// 		this.listenList = data.saleList.splice(0,4);
				// 	}else{
				// 		this.listenList = [];
				// 	}
				// }).catch(err => {
				// 	console.log(err);
				// 	this.listenList = [];
				// })
				
				/* 假数据 */ 
				this.listenList = localData.listenList;
				this.freeList = localData.freeList;
				this.recommendList = localData.recommendList;
			},
			
		}
	};
</script>

<style lang="scss">
.content {
	text-align: center;
	height: 100%;
	background-image: linear-gradient(to bottom, #edeef0,#ebecee 10%, #e3e4e6 50%, #e4e5e7 80%,#eaebed 100%);
	
	.swiperCon{
		padding: 32upx 0;
		height: calc(100% - 80upx - 64upx);
		.uniSwiper{
			height: 100%;
			.swiperItem{
				border-left: 16upx solid transparent;
				border-right: 16upx solid transparent;
				box-sizing: border-box;
				.swiper-item{
					height: calc(100% - 100upx);
					border-radius: 15upx;
					background: #fff;
					padding: 50upx;
					.item-title{
						text-align:left;
						.main-title{
							font-size:45upx;
							color: #212832;
							font-weight:600;
							margin-bottom: 24upx;
						}
						.sub-title{
							font-size:26upx;
							color: #afafaf;
							font-weight:normal;
							margin-bottom: 40upx;
						}
					}
					.item-row{
						.flex-item{
							width: 50%;
							float: left;
							text-align:center;
							.cover-pic{
								display: block;
								width: 170upx;
								height: 240upx;
								margin: 0 auto;
								margin-bottom:12upx;
							}
							.listen-cover-pic{
								position: relative;
								&::after{
									content: "";
									position: absolute;
									width: 60upx;
									height: 60upx;
									left: 50%;
									top: 50%;
									transform: translate(-50%,-50%);
									border-radius: 30upx;
									background:rgba(0,0,0,.3) url(../../../static/img/listen.png) no-repeat center;
									background-size: 45upx 45upx;
								}
							}
							.book-title{
								display: inline-block;
								font-size: 22upx;
								color: #212832;
								height: 80upx;
							}
						}
					}
				}
			}
		}
	}
}
</style>

<template>
	<view class="content">
		<!-- searchCon -->
		<search></search>
		
		<view class="mainCon">
			<view class="box">
				<text class="tips">重拾阅读的习惯</text>
				<text class="tips">为生活埋下微小的信仰</text>
				<button class="btn" type="primary">去找书</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Search from '@/components/search/search.vue'
	export default {
		components:{Search},
		data() {
			return {
				
			};
		},
		onLoad() {
			
		},
		methods: {
			
		}
	};
</script>

<style lang="scss">
.content {
	text-align: center;
	height: 100%;
	.mainCon{
		height: calc(100% - 80upx);
		.box{
			margin-top:320upx;
			.tips{
				display: block;
				color: #353c46;
				font-size: 28upx;
				line-height: 52upx;
				font-weight:500;font-weight:500;
			}
			.btn{
				width: 480upx;
				height: 80upx;
				line-height: 80upx;
				font-size:28upx;
				margin-top: 80upx;
				background: #008afc;
			}
		}
	}
}
</style>

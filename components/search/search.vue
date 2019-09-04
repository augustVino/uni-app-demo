<template>
	<view class="searchCon">
		<input class="search" type="text" value="" placeholder="书城搜索" placeholder-style="color:#adb4be;"/>
		<button class="searchBtn" hover-class="none">书城</button>
	</view>
	
</template>

<script>
</script>

<style lang="scss">
	.searchCon{
		text-align: center;
		background:#f5f6f7;
		width: 655upx;
		height: 80upx;
		border-radius: 40upx;
		margin:0 auto;
		overflow:hidden;
		.search{
			display: inline-block;
			width: 377upx;
			height: 100%;
			padding: 0 75upx;
			color: #adb4be;
			font-size: 26upx;
			text-align: left;
			background: #f5f6f7 url(../../static/img/search.png) no-repeat 30upx center;
			background-size: 35upx 35upx;
			float: left;
		}
		.searchBtn{
			float: left;
			width: 128upx;
			height: 100%;
			color: #5d646e;
			border: 0;
			outline: 0;
			font-size: 26upx;
			line-height: 80upx;
			
			&::after{
				content: "";
				border: 0;
				width: 2upx;
				height: 33upx;
				background: #b8b8b9;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
</style>

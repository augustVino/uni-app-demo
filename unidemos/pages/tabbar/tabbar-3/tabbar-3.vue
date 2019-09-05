<template>
	<view class="content">
		<!-- searchCon -->
		<search class="fixedTop" value="一禅小和尚: 你总说没事" :showBtn="false"></search>
		
		<view class="mainCon">
			
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
		height: 1000px;
		
	}
}
</style>

<template>
	<h1>响应路由参数变化</h1>
</template>

<script>
export default {
	watch: {
		$route(to, from) {
			console.log('动态路由参数做出反应了~~');
		}
	},
	beforeRouteUpdate(to, from, next) {
		console.log('动态路由参数做出反应了2222~~');
	}
};
</script>

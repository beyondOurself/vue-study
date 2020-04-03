<template>
	<div>
		<h3>嵌套路由</h3>
		<h3>参数:{{this.$route.params.id}}</h3>
		 <router-view></router-view>
	</div>
</template>

<script>
export default {
	mounted() {}
};
</script>

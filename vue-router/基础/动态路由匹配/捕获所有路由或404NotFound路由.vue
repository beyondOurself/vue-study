<template>
	<h1>捕获所有路由或404NotFound路由</h1>
</template>

<script>
export default {
	mounted() {
		console.log("~~~")
		// 给出一个路由 { path: '/user-*' }
		// this.$router.push('/user-admin');
		this.$route.params.pathMatch; // 'admin'
		// // 给出一个路由 { path: '*' }
		// this.$router.push('/non-existing');
		// this.$route.params.pathMatch; // '/non-existing'
	}
};
</script>

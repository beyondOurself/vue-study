<template>
    <div>捕获所有路由或404Notfond路由</div>
</template>
<script>
	export default{
		
		
		mounted() {
			console.log(">>>>>"+this.$route.params.username);
			console.log(">>>>>"+this.$route.params.post_id);
			console.log(">>>>>"+this.$route.params.pathMatch);
		}
	}
</script>
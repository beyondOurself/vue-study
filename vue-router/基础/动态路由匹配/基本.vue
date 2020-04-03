<template>
	<h1> 基本</h1>
</template>

<script>
	export default{
		mounted() {
			console.log("输出所有的路由规则",this.$router)
			console.log("输出参数",this.$route.params.id)
			console.log("基本2>输出参数",this.$route.params.username)
			console.log("基本2>输出参数",this.$route.params.post_id)
		}
	}
</script>


<template>
    <div>响应路由参数的变化</div>
</template>
<script>
	export default{
		
		mounted() {
		}
		,
		watch:{
			'$route'(to,from){
				console.log("路由做出变化了~")
			}
		}
	}
</script>
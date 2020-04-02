<template>
    <div>two</div>
</template>
<script>
	export default{
		
		mounted() {
			console.log(">>>>>"+this.$route.params.username);
			console.log(">>>>>"+this.$route.params.post_id);
		}
	}
</script>
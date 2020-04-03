<template>
	<div>
		<h3>命名视图(defalut)</h3>
		<router-view ></router-view>
		<router-view name="ViewChildrenView"></router-view>
	</div>
</template>

<script>
export default {
	mounted() {}
};
</script>

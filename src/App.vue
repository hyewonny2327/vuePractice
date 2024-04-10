<script setup></script>

<template>
	<div class="app">
		<div class="content">
			<RouterView></RouterView>
		</div>
	</div>
</template>

<style scoped>
.app {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.content {
	width: 360px;
}
</style>

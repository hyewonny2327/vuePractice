<template>
	<div class="title-container">
		<slot></slot>
		<i class="pi pi-angle-right"></i>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.title-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	padding: 1.5rem 0;
	font-size: 1.125rem;
	font-weight: 600;
}
</style>

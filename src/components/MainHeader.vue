<template>
	<div class="header-container">
		<div class="logo-container" @click="$router.push('/')">
			<div>BeVelop</div>
			<i class="pi pi-angle-down"></i>
		</div>

		<div class="button-container">
			<i class="pi pi-user" @click="$router.push('/myprofile')"></i>
			<i class="pi pi-bell"></i>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-container {
	display: flex;
	justify-content: space-between;
	padding: 0.75rem 1.25rem;
	height: 48px;
	width: 100%;
}
.logo-container {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.button-container {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}
</style>

<template>
	<div class="container">
		<div class="text-container">
			<h1 class="title">사이드 프로젝트에서<br />하나의 수입 수단까지</h1>
			<div class="subtitle-container">
				<div class="subtitle">스토리 자세히 보기</div>
				<i class="pi pi-angle-right"></i>
			</div>
		</div>
		<img src="/background.png" class="banner-image" />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
	width: 100%;
	height: 206px;
	position: relative;
	display: flex;
	justify-content: start;
	align-items: center;
}
.text-container {
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding: 0 1.25rem;
	row-gap: 0.5rem;
}
.title {
	font-size: 21px;
	font-weight: 600;
}
.subtitle-container {
	display: flex;
	align-items: center;
}
.subtitle {
	font-size: 0.75rem;
	font-weight: 400;
}
.banner-image {
	position: absolute;
	top: 0px;
	z-index: -1;
	height: 100%;
	width: 100%;
}
</style>

<template>
	<div>
		<div class="navbar-container">
			<div class="nav-items">홈</div>
			<div class="nav-items">팀원구인</div>
			<div class="nav-items">포스트</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	height: 42px;
	width: 100%;
}
.nav-items {
	cursor: pointer;
}
</style>

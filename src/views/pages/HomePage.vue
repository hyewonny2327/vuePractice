<template>
	<div class="main-content-container">
		<MainHeader></MainHeader>
		<MainNavbar></MainNavbar>
		<MainBanner></MainBanner>
		<div class="content-container">
			<SubtitleComponent><div>📢 모집중인 프로젝트</div></SubtitleComponent>
			<div>
				<ProjectPostBox></ProjectPostBox>
			</div>
			<SubtitleComponent
				><div>
					🔥 <span class="red-text">HOT</span>한 포스트
				</div></SubtitleComponent
			>
			<div>
				<HotPostBox></HotPostBox>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import MainNavbar from '@/components/MainNavbar.vue';
import MainBanner from '@/components/MainBanner.vue';
import HotPostBox from '@/components/HotPostBox.vue';
import ProjectPostBox from '@/components/ProjectPostBox.vue';
import SubtitleComponent from '@/components/SubtitleComponent.vue';
</script>

<style scoped>
.main-content-container {
	height: 100vh;
	padding-bottom: 2.5rem;
}
.content-container {
	display: flex;
	flex-direction: column;
	padding: 20px;
}
.red-text {
	color: #ff0000;
}
</style>

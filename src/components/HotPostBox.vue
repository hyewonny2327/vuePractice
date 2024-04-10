<template>
	<div class="main-container">
		<div v-for="item in postData" :key="item.id" class="content-box-container">
			<div class="image-container">
				<img :src="item.imageUrl" alt="이미지" class="image" />
			</div>
			<div class="text-container">
				<div class="title-container">
					<div class="title">{{ item.title }}</div>
					<div class="view-count">조회수 {{ item.view }}</div>
				</div>
				<div class="content">{{ item.content }}</div>
				<div class="tag-container">
					<div v-for="(tag, index) in item.tag" :key="index" class="tag">
						#{{ tag }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const postData = ref([
	{
		id: '110000',
		imageUrl: '/postImg1.png',
		title: '감정일기 플랫폼 "데일리"',
		view: 117,
		content: '이제는 정신 건강 관리에 대한 중요성이 높아지고',
		tag: ['JAVA', 'Spring'],
	},
	{
		id: '120000',
		imageUrl: '/postImg2.png',
		title: '시간 관리 플랫폼 mozza',
		view: 114,
		content: '모임 일정을 잡을때 사용할 수 있는',
		tag: ['React', 'Spring'],
	},
]);
</script>

<style scoped>
.main-container {
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
	width: 100%;
}
.content-box-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	border: 1px solid #e5e7eb;
	border-radius: 0.375rem;
	position: relative;
}
.text-container {
	display: flex;
	flex-direction: column;
	padding: 1rem;
}
.image-container {
	height: 183px;
}
.image {
	width: 100%;
	height: 100%;
	object-fit: fill;
}

.title-container {
	display: flex;
	justify-content: space-between;
}

.title {
	font-size: 16px;
	font-weight: 500;
}

.view-count {
	color: #4b5563;
	font-size: 12px;
}

.content {
	color: #6b7280;
	font-size: 14px;
	margin-top: 0.5rem;
}

.tag-container {
	display: flex;
	color: #9ca3af;
	font-size: 14px;
	margin-top: 0.75rem;
}
</style>

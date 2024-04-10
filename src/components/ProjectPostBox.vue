<template>
	<div class="main-container">
		<div v-for="item in postData" :key="item.id">
			<div class="postbox-container">
				<div class="tag-container">
					<div v-for="(tag, index) in item.tag" :key="index">
						<div class="tag">
							{{ tag }}
						</div>
					</div>
				</div>
				<div class="title-container">
					<div>{{ item.title }}</div>
					<div class="position-box">
						<div v-for="(position, index) in item.position" :key="index">
							<div>#{{ position }}</div>
						</div>
					</div>
				</div>
				<div class="content-container">
					{{ item.content }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const postData = ref([
	{
		id: '1000000',
		tag: ['사이드 프로젝트', '라이프스타일'],
		title: '사용자 개선 프로젝트 함께 하실 분 찾아요',
		position: ['기획자', '디자이너'],
		content:
			'현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸 상태입니다. 많이 지원해주세요!!',
	},
	{
		id: '2000000',
		tag: ['스타트업', '라이프스타일'],
		title: '힙한 인테리어 소품으로 생활을 즐겁게!!',
		position: ['백엔드'],
		content:
			'집안을 힙하게 꾸며주는 다양한 아이템을 판매하는 서비스를 함께 만들어갈 백엔드 개발자 구해요!',
	},
]);
</script>

<style scoped>
.main-container {
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
	width: 320px;
}
.postbox-container {
	display: flex;
	flex-direction: column;
	border: 1px solid #e5e7eb;
	border-radius: 0.375rem;
	padding: 27px 13px;
	width: 100%;
}
.tag-container {
	display: flex;
	gap: 0.75rem;
}
.tag {
	background: #7a5df5;
	border-radius: 0.125rem;
	padding: 2px 8px;
	height: 23px;
	color: white;
	font-size: 14px;
}
.title-container {
	display: flex;
	flex-direction: column;
	margin: 16px 0;
	font-size: 16px;
	font-weight: 500;
}
.position-box {
	display: flex;
	color: #8b95a1;
	font-size: 13px;
	font-weight: 400;
}
.content-container {
	color: #8b95a1;
	font-size: small;
	font-weight: 400;
}
</style>

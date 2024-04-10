<template>
	<div>
		<MainHeader></MainHeader>
		<div class="image-container">
			<div class="background-image">
				<img :src="userProfileInfo.backgroundImageUrl" />
			</div>

			<div class="profile-image-container">
				<div class="profile-image">
					<img :src="userProfileInfo.profileImageUrl" />
				</div>
			</div>
		</div>
		<div class="content-container">
			<div class="nickname-container">
				<div class="nickname">{{ userProfileInfo.nickname }}</div>

				<div class="modify-profile" @click="$router.push('register')">
					<div>프로필 수정</div>
					<i class="pi pi-angle-right"></i>
				</div>
			</div>
			<div class="introduce-container">
				{{ userProfileInfo.introduce }}
			</div>
			<div class="line"></div>
			<div class="profile-container">
				<div class="label">프로필</div>
				<div class="profile-box-container">
					<div class="profile-box">
						{{ userProfileInfo.job }}
					</div>
					<div class="profile-box">
						{{ userProfileInfo.position }}
					</div>
				</div>
				<div class="portfolio-container">
					<div class="label">포트폴리오</div>
					<div class="file-upload-container input">
						<div>{{ userProfileInfo.filename }}</div>
					</div>
					<div class="link-upload-container input">
						<div>
							{{ userProfileInfo.url }}
						</div>
					</div>
				</div>
				<div class="skills-container">
					<div class="label">기술스택</div>
					<div class="skills-content-container">
						<div class="skills-box-container">
							<div
								v-for="(item, index) in userProfileInfo.skills"
								:key="index"
								class="skill"
							>
								{{ item }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainHeader from '@/components/MainHeader.vue';

const userProfileInfo = ref({
	profileImageUrl: '/profileImg.png',
	backgroundImageUrl: '/backgroundImg.jpg',
	nickname: '윤혜원',
	introduce: '안녕하세요 윤혜원입니다',
	job: '웹개발',
	position: '프론트엔드',
	filename: '윤혜원 포트폴리오',
	url: 'urlrul',
	skills: ['javascript', 'vue'],
});
</script>

<style scoped>
.image-container {
	width: 100%;
	height: 117px;
	background-color: black;
	border-radius: 0px 0px 58.5px 0px;
	position: relative;
}
.background-image img {
	width: 100%;
	height: 117px;
	object-fit: cover;
	border-radius: 0px 0px 58.5px 0px;
}
.nickname {
	color: #000;
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
}
.modify-profile {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.profile-image-container {
	background-color: gainsboro;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	position: absolute;
	top: 42px;
	left: 24px;
}
.profile-image img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
}

.content-container {
	padding: 54px 20px;
}
.line {
	width: 100%;
	height: 1px;
	background: #f2f4f6;
}
.label {
	margin: 18px 0;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
}
.input {
	border-radius: 6px;
	border: 1px solid #dadee2;
	padding: 15px 20px;
	width: 100%;
}
.input:focus {
	outline: none;
	border: 1px solid #7a5df5;
}
.nickname-container {
	display: flex;
	justify-content: space-between;
}

.profile-box-container {
	display: flex;
	justify-content: space-between;
}
.profile-box {
	padding: 16px 20px;
	width: 48%;
	border-radius: 6px;
	border: 1px solid #dadee2;
}

.file-upload-btn {
	cursor: pointer;
}
.file-upload-container {
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
}
.link-upload-container {
	padding: 15px 20px;
}
.portfolio-container {
	display: flex;
	flex-direction: column;
}
.skills-content-container {
	display: flex;
	font-size: 14px;
	justify-content: space-between;
}
.skill-upload-btn {
	padding: 10px 27px;
	width: 72px;
	height: 37px;
	background: #f2f4f6;
	cursor: pointer;
	border-radius: 6px;
}
.skills-box-container {
	width: 241px;
	padding: 10px 27px;
	border-radius: 6px;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
}
.skill {
	padding: 10px 27px;

	border-radius: 6px;
	background: #1d1d1d;
	color: white;
	margin: 1px 3px;
}
.submit-btn {
	height: 54px;
	width: 100%;
	border-radius: 6px;
	background: #7a5df5;
	color: white;
	margin: 48px 0;
}
</style>

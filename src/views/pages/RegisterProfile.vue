<template>
	<div>
		<MainHeader></MainHeader>
		<div class="image-container">
			<div class="background-image">
				<img :src="backgroundImageUrl" />
			</div>
			<input
				type="file"
				id="backgroundImage"
				hidden
				@change="handleBackgroundImageUpload"
			/>
			<label for="backgroundImage">
				<div class="background-text">+ 배경이미지 추가하기</div>
			</label>
			<div class="profile-image-container">
				<div class="profile-image">
					<img :src="profileImageUrl" />
				</div>
				<input
					type="file"
					id="profileImage"
					hidden
					@change="handleProfileImageUpload"
				/>
				<label for="profileImage">
					<i class="pi-plus pi profile-image-upload-btn"></i>
				</label>
			</div>
		</div>
		<div class="content-container">
			<div class="nickname-container">
				<div class="label">닉네임</div>
				<input class="input" type="text" v-model="nickname" />
				<div class="nickname-text">사용가능한 닉네임입니다.</div>
			</div>
			<div class="introduce-container">
				<div class="label">한줄소개</div>
				<textarea class="input" rows="3" v-model="introduce" />
			</div>
			<div class="profile-container">
				<div class="label">프로필</div>
				<div class="select-tag-container">
					<select name="직무" class="select" v-model="job">
						<option value="">직무</option>
						<option value="ux-designer">ux디자이너</option>
						<option value="frontend-developer">프론트엔드</option>
						<option value="backend-developer">백엔드</option>
						<option value="planner">기획자</option>
					</select>
					<select name="관심분야" class="select" v-model="position">
						<option value="">관심분야</option>
						<option value="design">서비스디자인</option>
						<option value="frontend">프론트엔드 개발</option>
						<option value="backend">백엔드 개발</option>
						<option value="planning">기획</option>
					</select>
				</div>
				<div class="portfolio-container">
					<div class="label">포트폴리오</div>
					<div class="file-upload-container input">
						<input id="portfolio" type="file" @change="getFileName" hidden />
						<div>{{ filename }}</div>
						<label for="portfolio" class="file-upload-btn">수정</label>
					</div>
					<div class="link-upload-container">
						<input
							id="portfolio"
							type="text"
							class="input"
							placeholder="링크/URL"
							v-model="url"
						/>
					</div>
				</div>
				<div class="skills-container">
					<div class="label">기술스택</div>
					<div class="skills-content-container">
						<i
							@click="handleSkillUploadBtn"
							class="pi-plus pi skill-upload-btn"
						></i>

						<div class="skills-box-container">
							<div v-if="skills.length === 0">기술 스택을 추가해보세요</div>
							<div
								v-else
								v-for="(item, index) in skills"
								:key="index"
								class="skill"
							>
								{{ item }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="submit-btn" @click="onSubmitBtnClicked">입력완료</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainHeader from '@/components/MainHeader.vue';
import router from '@/routes';

const profileImageUrl = ref('');
const backgroundImageUrl = ref('');
const nickname = ref('');
const introduce = ref('');
const job = ref('');
const position = ref('');
const filename = ref('포트폴리오 첨부(PDF권장)');
const url = ref('');
const skills = ref([]);

const getFileName = event => {
	filename.value = event.target.files[0].name;
};

const handleSkillUploadBtn = () => {
	skills.value.push(prompt('스킬을 추가하세요 :'));
};

const onSubmitBtnClicked = () => {
	const userProfileInfo = {
		profileImageUrl: profileImageUrl.value,
		backgroundImageUrl: backgroundImageUrl.value,
		nickname: nickname.value,
		introduce: introduce.value,
		job: job.value,
		position: position.value,
		filename: filename.value,
		url: url.value,
		skills: skills.value,
	};
	console.log('서버 전송', userProfileInfo);
	router.push('/myprofile');
};

const handleProfileImageUpload = event => {
	const files = event.target.files;
	if (files && files.length > 0) {
		const reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				profileImageUrl.value = reader.result;
			}
		};
	}
};

const handleBackgroundImageUpload = event => {
	const files = event.target.files;
	if (files && files.length > 0) {
		const reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				backgroundImageUrl.value = reader.result;
			}
		};
	}
};
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
.background-text {
	color: white;
	position: absolute;
	right: 20px;
	top: 49px;
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
.profile-image-upload-btn {
	width: 30px;
	height: 30px;
	padding: 6px;
	background-color: #8b95a1;
	position: absolute;
	left: 72px;
	top: 70px;
	border-radius: 50%;
	text-align: center;
	display: flex;
	justify-content: center;
	color: white;
	cursor: pointer;
}
.content-container {
	padding: 54px 20px;
}
.label {
	margin: 18px 0;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
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
.nickname-text {
	color: #7a5df5;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	margin: 8px 0;
}
.select-tag-container {
	display: flex;
	justify-content: space-between;
}
.select {
	padding: 16px 20px;
	width: 48%;
	border-radius: 6px;
	border: 1px solid #dadee2;
}
.select:focus {
	outline: none;
	border: 1px solid #7a5df5;
}
.file-upload-btn {
	cursor: pointer;
}
.file-upload-container {
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
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
	border: 1px dashed #8b95a1;
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
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

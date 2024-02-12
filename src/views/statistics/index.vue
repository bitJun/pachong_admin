<template>
	<div class="container">
		<el-form :inline="true" :model="form" class="demo-form-inline">
			<el-form-item label="下单时间">
				<el-date-picker
					v-model="form.rangeDate"
					type="datetimerange"
					start-placeholder="开始时间"
					end-placeholder="结束时间"
					format="YYYY-MM-DD HH:mm:ss"
					date-format="YYYY/MM/DD ddd"
					time-format="A hh:mm:ss"
				/>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit()">查询</el-button>
				<el-button type="primary" @click="onReset()">重置</el-button>
			</el-form-item>
		</el-form>
		<div class="box">
			<h3 class="title">挂售</h3>
			<el-row :gutter="20">
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">发布商品件数</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">发布商品人数</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">支付人数</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">交易完成人数</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">GMV</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="box">
			<h3 class="title">拍卖</h3>
			<el-row :gutter="20">
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">发布商品件数</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">发布商品人数</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">支付人数</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">交易完成人数</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">GMV</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="box">
			<h3 class="title">抽奖</h3>
			<el-row :gutter="20">
				<el-col :span="4">
					<div class="section">
						<p class="section_num">78</p>
						<p class="section_name">发布数</p>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue';
const form = reactive({
	rangeDate: ''
});
const onSubmit = () => {
  	console.log('submit!')
}
const onReset = () => {
	console.log('onReset!')
}
</script>

<style lang="scss" scoped>
.container {
	padding: 15px;
}
.box {
	padding: 20px;
	background: #ffffff;
	margin-bottom: 20px;
}
.title {
	font-size: 28px;
	margin-bottom: 15px;
}
.section {
	height: 150px;
	border-radius: 15px;
	background: rgba(gray,0.5);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&_num {
		color: #333333;
		font-size: 36px;
		margin-bottom: 10px;
	}
	&_name {
		font-size: 18px;
	}
}
</style>

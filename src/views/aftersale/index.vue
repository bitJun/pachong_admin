<template>
	<div class="container">
		<el-form :inline="true" :model="form" class="demo-form-inline">
			<el-form-item label="售后状态">
				<el-select
					v-model="form.orderType"
					placeholder="Activity zone"
					clearable
				>
					<el-option label="请选择" value="0" />
					<el-option label="待商家处理" value="1" />
					<el-option label="待平台处理" value="2" />
					<el-option label="待买家上传物料" value="3" />
				</el-select>
			</el-form-item>
			<el-form-item label="订单号">
				<el-input
					v-model="form.region"
					placeholder="Please input"
					class="input-with-select"
				/>
			</el-form-item>
			<el-form-item label="售后发起时间">
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
			<el-form-item label="退款状态">
				<el-select
					v-model="form.orderType"
					placeholder="Activity zone"
					clearable
				>
					<el-option label="请选择" value="0" />
					<el-option label="退款成功" value="1" />
					<el-option label="退款失败" value="2" />
					<el-option label="退款中" value="3" />
				</el-select>
			</el-form-item>
			<el-form-item label="视商品名">
				<el-input
					v-model="form.region"
					placeholder="Please input"
					class="input-with-select"
				/>
			</el-form-item>
			<el-form-item label="买家id">
				<el-input
					v-model="form.region"
					placeholder="Please input"
					class="input-with-select"
				/>
			</el-form-item>
			<el-form-item label="商家id">
				<el-input
					v-model="form.region"
					placeholder="Please input"
					class="input-with-select"
				/>
			</el-form-item>
			<el-form-item label="收货人手机号">
				<el-input
					v-model="form.region"
					placeholder="Please input"
					class="input-with-select"
				/>
			</el-form-item>
			<el-form-item label="售后物流单号">
				<el-input
					v-model="form.region"
					placeholder="Please input"
					class="input-with-select"
				/>
			</el-form-item>
			<el-form-item label="平台介入">
				<el-radio-group v-model="form.radio1" class="ml-4">
					<el-radio label="1" size="large">是</el-radio>
					<el-radio label="2" size="large">否</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit()">查询</el-button>
				<el-button type="primary" @click="onReset()">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
	<div class="box">
		<div class="tabs">
			<div class="tabList">
				<div
					class="tabListItem"
					:class="[item.id == current ? 'active' : '']"
					v-for="item in tabs"
					:key="item.id"
					@click="onChangeItem(item.id)"
				>
					{{item.name}}
				</div>
			</div>
		</div>
		<TableData />
		<div class="pagination">
			<el-pagination
				v-model:current-page="currentPage"
				v-model:page-size="pageSize"
				:page-sizes="[10, 20, 50]"
				:small="false"
				:disabled="false"
				:background="true"
				layout="sizes, prev, pager, next"
				:total="100"
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
			/>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import TableData from './components/table.vue';
const form = reactive({
	rangeDate: '',
	orderType: '',
	region: '',
	radio1: ''
});
const current = ref(0);
const tabs = ref([
	{
		id: 0,
		name: '全部'
	},
	{
		id: 1,
		name: '待平台处理'
	},
	{
		id: 2,
		name: '待商家处理'
	},
	{
		id: 3,
		name: '商家已同意'
	},
	{
		id: 4,
		name: '商家已拒绝'
	},
	{
		id: 5,
		name: '售后成功'
	},
	{
		id: 6,
		name: '售后关闭'
	},
])
const onSubmit = () => {}
const onReset = () => {}
const onChangeItem = (id) => {
	current.value = id;
}
const handleSizeChange = (val) => {
	console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
	console.log(`current page: ${val}`)
}

</script>

<style lang="css" scoped>
.container {
	padding: 15px;
}
.pagination {
	margin-top: 20px;
	display: flex;
	justify-content: flex-end;
}
.box {
	padding: 15px;
}
</style>

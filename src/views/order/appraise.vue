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
			<el-form-item label="">
				<el-input
					v-model="form.region"
					placeholder="Please input"
					class="input-with-select"
				>
					<template #prepend>
						<el-select v-model="form.region" placeholder="Select" style="width: 115px">
							<el-option label="Zone one" value="shanghai" />
							<el-option label="Zone two" value="beijing" />
						</el-select>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item label="评价类型">
				<el-select
					v-model="form.orderType"
					placeholder="Activity zone"
					clearable
				>
					<el-option label="全部" value="0" />
					<el-option label="好评" value="1" />
					<el-option label="差评" value="2" />
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit()">查询</el-button>
				<el-button type="primary" @click="onReset()">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
	<div class="box">
		<el-table :data="tableData" style="width: 100%">
			<el-table-column fixed prop="date" label="评价人" />
			<el-table-column prop="name" label="角色" />
			<el-table-column prop="state" label="评价商品信息" />
			<el-table-column prop="zip" label="所属订单" />
			<el-table-column prop="zip" label="好评类型" />
			<el-table-column prop="zip" label="评价内容" />
			<el-table-column prop="zip" label="是否展示" />
			<el-table-column fixed="right" label="操作" width="260">
				<template #default>
					<el-button link type="primary" size="small">隐藏</el-button>
					<el-button link type="primary" size="small">显示</el-button>
				</template>
			</el-table-column>
		</el-table>
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
import { reactive } from "vue";
const form = reactive({
	rangeDate: '',
	orderType: '',
	region: '',
	radio1: ''
});
const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Home',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Home',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
]
const onSubmit = () => {}
const onReset = () => {}
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

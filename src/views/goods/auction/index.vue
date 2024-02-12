<template>
	<div class="container">
		<el-form :inline="true" :model="form" class="demo-form-inline">
			<el-form-item label="创建时间">
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
			<el-form-item label="商品名称">
				<el-input v-model="form.id" placeholder="请输入拍卖名称" clearable />
			</el-form-item>
			<el-form-item label="">
				<el-select
					v-model="form.region"
					placeholder="Activity zone"
					clearable
				>
					<el-option label="Zone one" value="shanghai" />
					<el-option label="Zone two" value="beijing" />
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit()">查询</el-button>
				<el-button type="primary" @click="onReset()">重置</el-button>
			</el-form-item>
		</el-form>
		<div style="margin-bottom: 20px;">
			<el-button type="primary" @click="onAdd()">发布拍卖</el-button>
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
			<List />
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
	</div>
	<el-drawer
		v-model="dialog"
		title="I have a nested table inside!"
		direction="rtl"
		size="50%"
	>
		<el-table :data="gridData">
			<el-table-column property="date" label="Date" width="150" />
			<el-table-column property="name" label="Name" width="200" />
			<el-table-column property="address" label="Address" />
		</el-table>
	</el-drawer>

</template>

<script setup>
import List from './list.vue';
import { reactive, ref } from 'vue';
const form = reactive({
	phone: '',
	id: '',
	rangeDate: '',
	region: ''
});
const dialog = ref(false);
const onSubmit = () => {
	console.log('submit!')
}
const onReset = () => {
	console.log('onReset!')
}
const handleSizeChange = (val) => {
	console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
	console.log(`current page: ${val}`)
}
const onChangeItem = (id) => {
	current.value = id;
}
const current = ref(0);
const tabs = ref([
	{
		id: 0,
		name: '全部'
	},
	{
		id: 1,
		name: '销售中'
	},
	{
		id: 2,
		name: '已售罄'
	},
	{
		id: 3,
		name: '仓库中'
	}
])
const gridData = [
  {
    date: '2016-05-02',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
]
const onAdd = () => {
	dialog.value = true;
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
.pagination {
	margin-top: 20px;
	display: flex;
	justify-content: flex-end;
}
</style>

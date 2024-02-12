<template>
	<div class="container">
		<el-form :inline="true" :model="form" class="demo-form-inline">
			<el-form-item label="手机号">
				<el-input v-model="form.phone" placeholder="请输入手机号" clearable />
			</el-form-item>
			<el-form-item label="ID">
				<el-input v-model="form.id" placeholder="请输入ID" clearable />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit()">查询</el-button>
				<el-button type="primary" @click="onReset()">重置</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column fixed prop="date" label="序号" width="150" />
			<el-table-column prop="name" label="ID" width="120" />
			<el-table-column prop="state" label="用户名" width="120" />
			<el-table-column prop="city" label="用户类型" width="120" />
			<el-table-column prop="address" label="手机号" width="120" />
			<el-table-column prop="zip" label="注册时间" width="120" />
			<el-table-column prop="zip" label="下单次数" width="120" />
			<el-table-column prop="zip" label="发布次数" />
			<el-table-column prop="zip" label="警告次数" width="120" />
			<el-table-column prop="zip" label="用户状态" width="120" />
			<el-table-column fixed="right" label="操作" width="180">
				<template #default>
					<el-button link type="primary" size="small">查看认证信息</el-button>
					<el-button link type="primary" size="small">取消封禁</el-button>
					<el-button link type="primary" size="small">警告</el-button>
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
import { reactive, ref } from 'vue';
const form = reactive({
	phone: '',
	id: ''
});
const currentPage = ref(1);
const pageSize = ref(10);
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
// const handleClick = () => {
//   console.log('click')
// }
</script>

<style lang="scss" scoped>

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

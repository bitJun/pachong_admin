<template>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column fixed prop="date" label="售后单号" />
		<el-table-column prop="name" label="退款类型" />
		<el-table-column prop="state" label="是否发货" />
		<el-table-column prop="zip" label="订单号" />
		<el-table-column prop="zip" label="订单状态" />
		<el-table-column prop="zip" label="买家" />
		<el-table-column prop="zip" label="卖家" />
		<el-table-column prop="zip" label="订单支付金额" />
		<el-table-column prop="zip" label="申请退款金额" />
		<el-table-column prop="zip" label="申请时间" />
		<el-table-column prop="zip" label="退款时间" />
		<el-table-column fixed="right" label="操作" width="260">
			<template #default>
				<el-button link type="primary" size="small">查看协商历史</el-button>
				<el-button link type="primary" size="small">处理纠纷</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>
<script setup>
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
</script>

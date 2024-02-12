<template>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column fixed prop="date" label="订单号" />
		<el-table-column prop="name" label="商品信息" />
		<el-table-column prop="state" label="零售价/拍卖成交价" />
		<el-table-column prop="zip" label="数量" />
		<el-table-column prop="zip" label="实付金额" />
		<el-table-column prop="zip" label="买家id（昵称）" />
		<el-table-column prop="zip" label="订单类型" />
		<el-table-column prop="zip" label="订单状态" />
		<el-table-column prop="zip" label="物流" />
		<el-table-column prop="zip" label="售后状态" />
		<el-table-column fixed="right" label="操作" width="260">
			<template #default>
				<el-button link type="primary" size="small">关闭订单</el-button>
				<el-button link type="primary" size="small">查看订单</el-button>
				<el-button link type="primary" size="small">查看物流</el-button>
				<el-button link type="primary" size="small">退款</el-button>
				<el-button link type="primary" size="small">查看评价</el-button>
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
